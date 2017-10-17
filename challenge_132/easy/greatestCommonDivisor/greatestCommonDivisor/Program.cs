using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace greatestCommonDivisor {
    class Program {
        static void Main(string[] args) {

            //default input
            int[] input1 = new int[] { 8, 12 };
            //challenge input
            int[] input2 = new int[] { 32, 12 };
            int[] input3 = new int[] { 142341, 512345 };
            long[] input4 = new long[] { 65535, 4294967295 };

            Console.WriteLine(GetGCDRecursive(input1[0], input1[1]));
            Console.WriteLine(GetGCDRecursive(input2[0], input2[1]));
            Console.WriteLine(GetGCDRecursive(input3[0], input3[1]));
            Console.WriteLine(GetGCDRecursive(input4[0], input4[1]));
            Console.WriteLine(GetGCDIterative(input1[0], input1[1]));
            Console.WriteLine(GetGCDIterative(input2[0], input2[1]));
            Console.WriteLine(GetGCDIterative(input3[0], input3[1]));
            Console.WriteLine(GetGCDIterative(input4[0], input4[1]));
        }
        /*
         * calculate greatest common divisor (recursive)
         * @param {long} [number1] - number 1
         * @param {long} [number2] - number 2
         *
         * @return {long} [greatest common divisor]
         */
        public static long GetGCDRecursive(long number1, long number2) {

            return number1 % number2 == 0 ? number2 : GetGCDRecursive(number2, number1 % number2);
        }
        /*
         * calculate greatest common divisor (iterative)
         * @param {long} [number1] - number 1
         * @param {long} [number2] - number 2
         *
         * @return {long} [greatest common divisor]
         */
        public static long GetGCDIterative(long number1, long number2) {

            long larger = Math.Max(number1, number2);
            long smaller = Math.Min(number1, number2);

            while(larger % smaller != 0) {

                long remainder = larger % smaller;
                larger = smaller;
                smaller = remainder;
            }

            return smaller;
        }
    }
}