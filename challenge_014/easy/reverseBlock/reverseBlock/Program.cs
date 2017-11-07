using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reverseBlock {
    class Program {
        static void Main(string[] args) {

            int[] list1 = new int[] { 12, 24, 32, 44, 55, 66 };
            int[] list2 = new int[] { 12, 24, 32, 44, 55, 66 };
            int[] list3 = new int[] { 12, 24, 32, 35, 60, 71, 44, 55, 66 };

            //challenge input
            ReverseBlock(list1, 2);
            Console.WriteLine(string.Join(" ", list1));
            ReverseBlock(list2, 3);
            Console.WriteLine(string.Join(" ", list2));
            ReverseBlock(list3, 4);
            Console.WriteLine(string.Join(" ", list3));
        }
        /// <summary>
        /// swap value of two items
        /// </summary>
        public static void Swap<T>(ref T item1, ref T item2) {

            T temp = item1;
            item1 = item2;
            item2 = temp;
        }
        /// <summary>
        /// reverse every block of given size in an array
        /// </summary>
        public static void ReverseBlock(int[] list, int size) {

            for(int i = 0; i < list.Length; i += size) {

                int maxIndex = Math.Min(i + size, list.Length) - 1;

                for(int j = i; j < maxIndex - j + i; j++) {

                    Swap(ref list[j], ref list[maxIndex - j + i]);
                }
            }
        }
    }
}