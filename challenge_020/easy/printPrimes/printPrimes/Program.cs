using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace printPrimes {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(string.Join("\n", GetPrimes(2000)));
        }
        /// <summary>
        /// find all primes up to a given limit
        /// </summary>
        public static int[] GetPrimes(int limit) {

            var tester = new PrimalityTester();

            return Enumerable.Range(1, limit).Where(number => tester.IsPrime(number)).ToArray();
        }
    }
}