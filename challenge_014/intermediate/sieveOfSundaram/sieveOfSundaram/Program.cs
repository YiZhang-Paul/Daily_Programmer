using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sieveOfSundaram {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(string.Join(", ", FindPrimes(100)));
            Console.WriteLine(string.Join(", ", FindPrimes(10000)));
        }

        private static int[] FindPrimes(int limit) { 
        
            var numbers = new HashSet<int>(Enumerable.Range(1, limit));

            for(int i = 1; 2 * i + 2 * i * i <= limit; i++) {

                for(int j = i; i + j + 2 * i * j <= limit; j++) {

                    numbers.Remove(i + j + 2 * i * j);
                }
            }

            var primes = numbers.Select(number => number * 2 + 1);

            return new int[] { 2 }.Concat(primes)
                                  .Where(number => number <= limit)
                                  .ToArray();
        }
    }
}