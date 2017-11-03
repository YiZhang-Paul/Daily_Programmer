using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mergeSortedLists {
    class Program {
        static void Main(string[] args) {

            int[] list1 = new int[] { 1, 5, 7, 8 };
            int[] list2 = new int[] { 2, 3, 4, 7, 9 };
            Console.WriteLine(string.Join(" ", MergeSortedLists(list1, list2)));
        }
        /// <summary>
        /// merge two sorted lists into one sorted list
        /// </summary>
        public static int[] MergeSortedLists(int[] list1, int[] list2) { 
        
            var toMerge1 = new Queue<int>(list1);
            var toMerge2 = new Queue<int>(list2);
            var merged = new List<int>();

            while(toMerge1.Count > 0 || toMerge2.Count > 0) {

                if(toMerge1.Count == 0 || toMerge2.Count == 0) {

                    merged.AddRange(toMerge1.Count == 0 ? toMerge2 : toMerge1);

                    return merged.ToArray();
                }

                merged.Add((toMerge1.Peek() < toMerge2.Peek() ? toMerge1 : toMerge2).Dequeue());
            }

            return merged.ToArray();
        }
    }
}