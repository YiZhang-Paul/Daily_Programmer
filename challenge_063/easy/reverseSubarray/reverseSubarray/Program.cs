using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reverseSubarray {
    class Program {
        static void Main(string[] args) {

            int[] array1 = new int[] { 1, 2, 3, 4, 5 };
            int[] array2 = new int[] { 1, 2, 3, 4, 5 };
            int[] array3 = new int[] { 1, 2, 3, 4, 5 };
            int[] array4 = new int[] { 51, 41, 12, 62, 74 };

            //challenge input
            ReverseSubarray(1, array1);
            ReverseSubarray(2, array2);
            ReverseSubarray(5, array3);
            ReverseSubarray(3, array4);
            Console.WriteLine(string.Join(" ", array1));
            Console.WriteLine(string.Join(" ", array2));
            Console.WriteLine(string.Join(" ", array3));
            Console.WriteLine(string.Join(" ", array4));
        }
        /// <summary>
        /// reverse subarray of an array
        /// </summary>
        /// <param name="size">size of subarray</param>
        public static void ReverseSubarray(int size, int[] array) {

            for(int i = 0; i < size - i; i++) {

                int temp = array[i];
                array[i] = array[size - 1 - i];
                array[size - 1 - i] = temp;
            }
        }
    }
}