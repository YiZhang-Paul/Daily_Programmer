using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace splitList {
    class Program {
        static void Main(string[] args) {

            int[] list1 = new int[] { 1, 2, 3, 4, 5 };
            int[] list2 = new int[] { 1, 2, 3, 4 };
            int[] list3 = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            int[] list4 = new int[] { 1, 2, 3, 4, 5, 6, 7, 8 };

            //challenge input
            Console.WriteLine(string.Join("\n", SplitList(list1).Select(list => string.Join(" ", list))) + "\n");
            Console.WriteLine(string.Join("\n", SplitList(list2).Select(list => string.Join(" ", list))) + "\n");
            Console.WriteLine(string.Join("\n", SplitList(list3).Select(list => string.Join(" ", list))) + "\n");
            Console.WriteLine(string.Join("\n", SplitList(list4).Select(list => string.Join(" ", list))) + "\n");
        }
        /// <summary>
        /// split list in half
        /// </summary>
        public static List<int[]> SplitList(int[] list) {

            int center = (list.Length + list.Length % 2) / 2; 

            return new List<int[]> { list.Take(center).ToArray(), list.Skip(center).ToArray() };
        }
    }
}