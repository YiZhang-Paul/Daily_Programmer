using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sumDigits {
    class Program {
        static void Main(string[] args) {

            //default input
            int input1 = 31337;
            int input2 = 1073741824;

            Console.WriteLine(SumDigits(input1));
            Console.WriteLine(SumDigits(input2));
        }
        /*
         * sum digits of a number until sum becomes one digit
         * @param {long} [number] - number to sum digits with
         *
         * @return {int} [final sum]
         */
        public static int SumDigits(long number) { 
            
            do {
                //sum of digits of current number
                number = GetDigits(number).Sum();

            } while(number > 9);

            return (int)number;
        }
        /*
         * retrieve all digits of a number
         * @param {long} [number] - number to check
         *
         * @return {int[]} [all digits of the number]
         */
        public static int[] GetDigits(long number) {
            //handle negative numbers
            number = Math.Abs(number);
            var digits = new List<int>();

            while(number != 0) {
                //retrieve each digit of the number
                int remainder = (int)(number % 10);
                digits.Insert(0, remainder);
                number = (number - remainder) / 10;
            }

            return digits.ToArray();
        }
    }
}