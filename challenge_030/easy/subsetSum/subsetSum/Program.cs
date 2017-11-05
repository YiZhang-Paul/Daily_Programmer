using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace subsetSum {
    class Program {
        static void Main(string[] args) {

            int[] array1 = new int[] { 1, 4, 5, 4, 6, 2, 3, 5 };
            int[] array2 = new int[] { 1, 4, 5, 6, 2, 3, 5 };
            int[] array3 = new int[] { 1, 4, 5, 4, 6, 4, 2, 3, 5 };

            //challenge input
            Console.WriteLine(string.Join("\n", SubsetSum(array1, 8).Select(set => "[" + string.Join(", ", set) + "]")) + "\n");
            Console.WriteLine(string.Join("\n", SubsetSum(array2, 8).Select(set => "[" + string.Join(", ", set) + "]")) + "\n");
            Console.WriteLine(string.Join("\n", SubsetSum(array3, 8).Select(set => "[" + string.Join(", ", set) + "]")) + "\n");
        }
        /// <summary>
        /// find subsets from an array that sum to given number
        /// </summary>
        public static List<int[]> SubsetSum(int[] array, int sum) { 
        
            var counter = new Dictionary<int, int>();
            var subsets = new List<int[]>();

            foreach(int number in array) {
                //count occurrences of each number
                counter[number] = counter.ContainsKey(number) ? counter[number] + 1 : 1;
            }

            foreach(int number in array) {
                //other possible number in the subset
                int other = sum - number;

                if(counter.ContainsKey(other) && (number != other || counter[other] > 1)) {
                    //avoid duplicate subsets in future
                    counter.Remove(number);
                    counter.Remove(other);
                    subsets.Add(new int[] { number, other }.OrderBy(value => value).ToArray());
                }
            }

            return subsets;
        }
    }
}