using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace bankerAlgorithm {
    class ProcessManager {

        private Allocator Allocator { get; set; }
        private Process[] Processes { get; set; }

        public ProcessManager(string algorithm) {

            Allocator = CreateAllocator(algorithm);
            Processes = CreateProcesses(algorithm);
        }

        private int[] ReadNumbers(string numbers) {

            return Regex.Matches(numbers, @"\d+")
                        .Cast<Match>()
                        .Select(match => int.Parse(match.Value))
                        .ToArray();
        }

        private Allocator CreateAllocator(string algorithm) {

            var allocations = algorithm.Split('\n');
            var allocator = new Allocator(ReadNumbers(allocations[0]));

            foreach(var allocation in allocations.Skip(1)) {

                var resources = ReadNumbers(allocation).Take(3).ToArray();
                allocator.ReceiveResource(resources);
            }

            return allocator;
        }

        private Process[] CreateProcesses(string algorithm) {

            var allocations = algorithm.Split('\n');
            var processes = new List<Process>();

            foreach(var allocation in allocations.Skip(1)) {

                var resources = ReadNumbers(allocation);
                processes.Add(new Process(resources.Skip(3).ToArray()));
                Allocator.Allocate(processes.Last(), resources.Take(3).ToArray());
            }

            return processes.ToArray();
        }
    }
}