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

            ReadAlgorithm(algorithm);
        }

        private int[] ReadNumbers(string numbers) {

            return Regex.Matches(numbers, @"\d+")
                        .Cast<Match>()
                        .Select(match => int.Parse(match.Value))
                        .ToArray();
        }

        private void ReadAlgorithm(string algorithm) {

            var allocations = algorithm.Split('\n');
            var processes = new List<Process>();
            Allocator = new Allocator(ReadNumbers(allocations[0]));

            for(int i = 1; i < allocations.Length; i++) {

                var numbers = ReadNumbers(allocations[i]);
                var process = new Process(numbers.Skip(3).ToArray());
                int[] toAllocate = numbers.Take(3).ToArray();
                Allocator.ReceiveResource(toAllocate);
                Allocator.Allocate(process, toAllocate);
                processes.Add(process);
            }

            Processes = processes.ToArray();
        }
    }
}