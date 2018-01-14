using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrimalityTesterClassLibrary {
    public class PrimalityTester : IPrimalityTester {

        private IEnumerable<int> GetFactors(int number) {

            return Enumerable.Range(2, Math.Max(0, number - 2));
        }

        public bool IsPrime(int number) {

            if(number <= 2) {

                return number == 2;
            }

            return GetFactors(number).All(factor => number % factor != 0);
        }
    }
}