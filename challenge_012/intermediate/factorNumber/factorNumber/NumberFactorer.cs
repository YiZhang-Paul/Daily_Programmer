using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace factorNumber {
    class NumberFactorer {

        private IPrimeFinder PrimeFinder { get; set; }

        public NumberFactorer(IPrimeFinder primeFinder) {

            PrimeFinder = primeFinder;
        }

        public int[] Factor(int number) { 
        
            if(Math.Abs(number) <= 1) {

                return new int[] { number };
            }

            var factors = new List<int>();
            int currentPrime = 2;

            while(number != 1) {
                //find next divisible prime number
                while(number % currentPrime != 0) {

                    currentPrime = PrimeFinder.NextPrime(currentPrime);
                }

                number /= currentPrime;
                factors.Add(currentPrime);
            }

            return factors.ToArray();
        }
    }
}