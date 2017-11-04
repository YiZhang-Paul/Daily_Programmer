using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace combinations {
    class Program {
        static void Main(string[] args) {

            int[] numbers = new int[] { 1, 2, 3, 4, 5 };

            //challenge input
            Console.WriteLine(string.Join("\n", GetCombination(numbers, 3).Select(combine => "[" + string.Join(", ", combine) + "]")));
        }
        /// <summary>
        /// find all combinations of given size
        /// </summary>
        /// <param name="numbers">all available numbers</param>
        /// <param name="size">size of subarray</param>
        /// <param name="subset">current combination</param>
        /// <param name="collection">collection of all combinations</param>
        public static List<int[]> GetCombination(int[] numbers, int size, List<int> subset = null, List<int[]> collection = null) { 
        
            subset = subset ?? new List<int>();
            collection = collection ?? new List<int[]>();

            if(subset.Count == size) {

                collection.Add(subset.OrderBy(number => number).ToArray());
            }

            for(int i = 0; i < numbers.Length; i++) {

                var newSubset = subset.Concat(new List<int> { numbers[i] }).ToList();
                GetCombination(numbers.Take(i).ToArray(), size, newSubset, collection);
            }

            return collection.OrderBy(combine => combine[0]).ToList();
        }
    }
}