using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mcNuggetNumbers {
    public class McNuggetNumberFinder {

        private int[] _orderSizes = { 6, 9, 20 };

        private int[] CombineLists(IEnumerable<IEnumerable<int>> lists) {

            return lists.Aggregate(new List<int>(), (combined, list) => {

                return combined.Concat(list).ToList();

            }).ToArray();
        }

        private int[] GetNumbersSeen(Dictionary<int, List<int>> numbers) {

            return CombineLists(numbers.Select(pair => pair.Value));
        }

        private int[] GetNewMcNuggetNumbers(int oldNumber, int limit, HashSet<int> numbersSeen) {

            return _orderSizes.Select(size => size + oldNumber)
                              .Where(newNumber => newNumber <= limit)
                              .Where(newNumber => !numbersSeen.Contains(newNumber))
                              .ToArray();
        }

        public int[] FindMcNuggetNumbers(int limit) {

            var results = new Dictionary<int, List<int>>() { { 1, new List<int>(_orderSizes) } };
            var numbersSeen = new HashSet<int>(GetNumbersSeen(results));
            int combination = results.Max(pair => pair.Key) + 1;

            while(results[combination - 1].Count != 0) {
            
                results[combination] = new List<int>();

                foreach(int oldNumber in results[combination - 1]) {

                    var newNumbers = GetNewMcNuggetNumbers(oldNumber, limit, numbersSeen);
                    results[combination] = results[combination].Concat(newNumbers).ToList();
                    numbersSeen.UnionWith(newNumbers);
                }

                combination++;
            }

            return GetNumbersSeen(results);
        }

        public int[] FindNonMcNuggetNumbers(int limit) { 
        
            var mcNuggetNumbers = new HashSet<int>(FindMcNuggetNumbers(limit));

            return Enumerable.Range(1, limit)
                             .Where(number => !mcNuggetNumbers.Contains(number))
                             .ToArray();
        }
    }
}