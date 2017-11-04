using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace partitionArray {
    class Program {
        static void Main(string[] args) {

            int[] array = new int[] { 1, 3, 2, 9, 4, 6, 4, 3, 1, 7, 8, 5, 4, 5, 10, 11, 15, 18 };

            //challenge input
            Partition(array);
            Console.WriteLine(string.Join(" ", array));
        }
        /// <summary>
        /// find index of first odd number in an array after a given starting index
        /// </summary>
        public static int GetOddIndex(int[] array, int startIndex = 0) {

            for(int i = startIndex; i < array.Length; i++) {

                if(array[i] % 2 == 1) {
                
                    return i;
                }
            }

            return -1;
        }
        /// <summary>
        /// swap two elements in an array
        /// </summary>
        public static void Swap<T>(ref T element1, ref T element2) {

            T temp = element1;
            element1 = element2;
            element2 = temp;
        }
        /// <summary>
        /// partition array so that all even numbers precede odd numbers
        /// </summary>
        public static void Partition(int[] array) {

            for(int i = 0, oddIndex = GetOddIndex(array); i < array.Length; i++) {

                if(array[i] % 2 == 0) {

                    Swap<int>(ref array[i], ref array[oddIndex]);
                    oddIndex = GetOddIndex(array, oddIndex + 1);
                }
            }
        }
    }
}