using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace bankerAlgorithm {
    class ProcessManager {

        private string Algorithm { get; set; }
        private Allocator Allocator { get; set; }
        private List<Process> Processes { get; set; }

        public ProcessManager(string algorithm) {

            Algorithm = algorithm;
            Allocator = CreateAllocator();
            Processes = CreateProcesses(Allocator);
        }

        private int[] ReadNumbers(string numbers) {

            return Regex.Matches(numbers, @"\d+")
                        .Cast<Match>()
                        .Select(match => int.Parse(match.Value))
                        .ToArray();
        }

        private Allocator CreateAllocator() {

            var allocations = Algorithm.Split('\n');
            var allocator = new Allocator(ReadNumbers(allocations[0]));

            foreach(var allocation in allocations.Skip(1)) {

                var resources = ReadNumbers(allocation).Take(3).ToArray();
                allocator.ReceiveResource(resources);
            }

            return allocator;
        }

        private List<Process> CreateProcesses(Allocator allocator) {

            var allocations = Algorithm.Split('\n');
            var processes = new List<Process>();

            foreach(var allocation in allocations.Skip(1)) {

                var resources = ReadNumbers(allocation);
                processes.Add(new Process("P" + processes.Count, resources.Skip(3).ToArray()));
                //initial assigned resources
                allocator.Allocate(processes.Last(), resources.Take(3).ToArray());
            }

            return processes;
        }

        private bool CanProcess(Process process, Allocator allocator) {

            for(int i = 0; i < process.AssignedResources.Length; i++) {

                if(allocator.Resources[i] + process.AssignedResources[i] < process.RequiredResources[i]) {

                    return false;
                }
            }

            return true;
        }

        private List<Process> GetValidProcesses(List<Process> processes, Allocator allocator) {

            return processes.Where(process => CanProcess(process, allocator)).ToList();
        }

        private void TestRunProcess(Process process, Allocator allocator) {

            allocator.Allocate(process, allocator.Resources);
            //simulate process releasing resource after execution
            process.ReleaseResource(allocator);
        }
        /// <summary>
        /// determine order of processes to be executed by simulating given algorithm
        /// </summary>
        public Process[] GetProcessOrder() {

            var order = new List<Process>();
            var testAllocator = CreateAllocator();
            var testProcesses = CreateProcesses(testAllocator);
            var toProcess = new Queue<Process>(GetValidProcesses(testProcesses, testAllocator));

            while(toProcess.Count > 0) {

                order.Add(toProcess.Dequeue());
                //simulate process being executed
                testProcesses.Remove(order.Last());
                TestRunProcess(order.Last(), testAllocator);

                if(toProcess.Count == 0 && testProcesses.Count > 0) {
                    //check if there are more processes available due to resources being released
                    toProcess = new Queue<Process>(GetValidProcesses(testProcesses, testAllocator));
                }
            }

            if(testProcesses.Count > 0) {

                throw new Exception("Cannot Compelete Given Algorithm.");
            }

            return order.ToArray();
        }
    }
}