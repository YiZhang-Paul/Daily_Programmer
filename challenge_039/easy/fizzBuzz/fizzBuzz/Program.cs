using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fizzBuzz {
    class Program {
        static void Main(string[] args) {

            //challenge input
            FizzBuzz(20);
            FizzBuzz(100);
        }
        /// <summary>
        /// Fizz Buzz
        /// </summary>
        public static void FizzBuzz(int limit) {

            for(int i = 1; i <= limit; i++) {

                if(i % 3 == 0 || i % 5 == 0) {

                    Console.WriteLine(i % 15 == 0 ? "FizzBuzz" : (i % 3 == 0 ? "Fizz" : "Buzz"));
                    continue;
                }

                Console.WriteLine(i);
            }
        }
    }
}