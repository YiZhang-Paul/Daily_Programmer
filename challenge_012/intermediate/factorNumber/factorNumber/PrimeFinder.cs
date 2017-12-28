using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace factorNumber {
    class PrimeFinder : IPrimeFinder {

        private IPrimalityTester Tester { get; set; }

        public PrimeFinder(IPrimalityTester tester) {

            Tester = tester;
        }

        public int NextPrime(int number) { 
        
            do {
            
                number++;

            } while(!Tester.IsPrime(number));

            return number;
        }
    }
}