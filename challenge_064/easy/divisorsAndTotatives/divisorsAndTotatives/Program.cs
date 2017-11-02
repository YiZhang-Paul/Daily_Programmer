using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace divisorsAndTotatives {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(string.Join(" ", GetDivisors(60)));
            Console.WriteLine(GetDivisorSum(60));
            Console.WriteLine(GetDivisorCount(60));
            Console.WriteLine(string.Join(" ", GetTotatives(30)));
            Console.WriteLine(GetTotient(30));
        }
        /// <summary>
        /// find all divisors of a number
        /// </summary>
        public static int[] GetDivisors(int number) {

            int limit = (int)Math.Floor(Math.Sqrt(number));
            var divisors = new HashSet<int>();

            for(int i = 1; i <= limit; i++) {

                if(number % i == 0) {

                    divisors.Add(i);
                    divisors.Add(number / i);
                }
            }

            return divisors.OrderBy(value => value).ToArray();
        }
        /// <summary>
        /// calculate sum of all divisors of a given number
        /// </summary>
        public static int GetDivisorSum(int number) {

            return GetDivisors(number).Sum();
        }
        /// <summary>
        /// count total number of divisors of a given number
        /// </summary>
        public static int GetDivisorCount(int number) {

            return GetDivisors(number).Count();
        }
        /// <summary>
        /// find greatest common divisor between two numbers
        /// </summary>
        public static int GreatestCommonDivisor(int number1, int number2) {

            return number1 % number2 == 0 ? number2 : GreatestCommonDivisor(number2, number1 % number2);
        }
        /// <summary>
        /// find all totatives of a number
        /// </summary>
        public static int[] GetTotatives(int number) { 
        
            var totatives = new List<int>();

            for(int i = 1; i < number; i++) {

                if(GreatestCommonDivisor(number, i) == 1) {

                    totatives.Add(i);
                }
            }

            return totatives.ToArray();
        }
        /// <summary>
        /// find totient of a number
        /// </summary>
        public static int GetTotient(int number) {

            return GetTotatives(number).Count();
        }
    }
}