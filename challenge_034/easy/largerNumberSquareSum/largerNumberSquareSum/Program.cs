using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace largerNumberSquareSum {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(LargerSquareSum(1, 2, 3));
            Console.WriteLine(LargerSquareSum(3, 2, 3));
            Console.WriteLine(LargerSquareSum(1, 21, 1));
            Console.WriteLine(LargerSquareSum(1, 21, 2));
        }
        /// <summary>
        /// calculate the sum of the squares of the two larger numbers
        /// </summary>
        public static int LargerSquareSum(int number1, int number2, int number3) {

            var numbers = new int[] { number1, number2, number3 }.OrderBy(value => value);

            return numbers.Skip(1).Aggregate(0, (sum, number) => sum + (int)Math.Pow(number, 2));
        }
    }
}