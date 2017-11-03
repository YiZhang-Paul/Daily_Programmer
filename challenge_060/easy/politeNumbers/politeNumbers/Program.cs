using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace politeNumbers {
    class Program {
        static void Main(string[] args) {

            //challenge input
            for(int i = 1; i <= 100; i++) {

                Console.Write(GetPoliteness1(i) + " ");
            }

            Console.WriteLine();

            for(int i = 1; i <= 100; i++) {

                Console.Write(GetPoliteness2(i) + " ");
            }
        }
        /// <summary>
        /// find politeness of a number
        /// </summary>
        public static int GetPoliteness1(int number) {

            return GetDivisors(number).Count(divisor => divisor > 1 && divisor % 2 == 1);
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

            return divisors.ToArray();
        }
        /// <summary>
        /// find next prime number
        /// </summary>
        public static int GetNextPrime(int number) { 
        
            var tester = new PrimalityTester();
            
            do {

                number++;

            } while(!tester.IsPrime(number));

            return number;
        }
        /// <summary>
        /// find politeness of a number
        /// </summary>
        public static int GetPoliteness2(int number) {

            if(number <= 2) {

                return 0;
            }

            var powers = new Dictionary<int, int>();
            int prime = 2;

            while(number != 1) {
            
                if(number % prime == 0) {

                    number /= prime;
                    powers[prime] = powers.ContainsKey(prime) ? powers[prime] + 1 : 1;
                }
                else {

                    prime = GetNextPrime(prime);
                }
            }

            return powers.Where(pair => pair.Key > 2)
                         .Select(pair => pair.Value + 1)
                         .Aggregate(1, (acc, val) => acc * val) - 1;
        }
    }
}