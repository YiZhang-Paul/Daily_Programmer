using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace divisibleDigits {
    class Program {
        static void Main(string[] args) {
            //default input
            int result = GetMaxDivisible(2, 101);
            Console.WriteLine(result == 0 ? "No Solution Found." : "Result: " + result);
            //challenge input
            result = GetMaxDivisible(3, 2);
            Console.WriteLine(result == 0 ? "No Solution Found." : "Result: " + result);
            result = GetMaxDivisible(7, 4241275);
            Console.WriteLine(result == 0 ? "No Solution Found." : "Result: " + result);
        }
        /*
         * find maximum divisible integer of given places
         * @param {int} [places] - total digits in the number
         * @param {int} [divisor] - integer to divide
         *
         * @return {int} [maximum divisible integer]
         */
        public static int GetMaxDivisible(int places, int divisor) {
            return (int)(Math.Pow(10, places) - 1) / divisor * divisor;
        }
    }
}