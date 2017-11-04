using System;
using System.Collections.Generic;
using System.Linq;
using System.Text; 
using System.Threading.Tasks;

namespace printListWithoutLoop {
    class Program {
        static void Main(string[] args) {

            PrintList1(1, 1000);
            PrintList2(1, 1000);
            PrintList3(1, 1000);
            
            //challenge input
            int number = 1;
            PrintList4(ref number);
        }
        /// <summary>
        /// print list of numbers without using loop
        /// </summary>
        public static void PrintList1(int start, int end, int[] numbers = null) {

            numbers = numbers ?? new int[end + 1 - start];

            try {

                numbers[start - 1] = start;
                PrintList1(++start, end, numbers);
            }
            catch(Exception) {

                Console.WriteLine(string.Join("\n", numbers));
            }
        }
        /// <summary>
        /// print list of numbers without using loop
        /// </summary>
        public static void PrintList2(int start, int end) {

            Console.WriteLine(start);

            if(++start <= end) {

                PrintList2(start, end);
            }
        }
        /// <summary>
        /// print list of numbers without using conditional
        /// </summary>
        public static void PrintList3(int start, int end) {

            Console.WriteLine(string.Join("\n", Enumerable.Range(start, end))); ;
        }
        /// <summary>
        /// print 1 to 1000 without using loop or conditional
        /// </summary>
        public static void PrintList4(ref int number) {

            Next512(ref number);
            Next256(ref number);
            Next128(ref number);
            Next64(ref number);
            Next32(ref number);
            Next8(ref number);    
        }
        /// <summary>
        /// print next few numbers
        /// </summary>
        public static void Next1(ref int number) {

            Console.WriteLine(number++);
        }
        public static void Next2(ref int number) {

            Next1(ref number);
            Next1(ref number);
        }
        public static void Next4(ref int number) {

            Next2(ref number);
            Next2(ref number);
        }
        public static void Next8(ref int number) {

            Next4(ref number);
            Next4(ref number);
        }
        public static void Next16(ref int number) {

            Next8(ref number);
            Next8(ref number);
        }
        public static void Next32(ref int number) {

            Next16(ref number);
            Next16(ref number);
        }
        public static void Next64(ref int number) {

            Next32(ref number);
            Next32(ref number);
        }
        public static void Next128(ref int number) {

            Next64(ref number);
            Next64(ref number);
        }
        public static void Next256(ref int number) {

            Next128(ref number);
            Next128(ref number);
        }
        public static void Next512(ref int number) {

            Next256(ref number);
            Next256(ref number);
        }
    }
}