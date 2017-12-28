using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using factorNumber;

namespace printPrimes {
    class PrimalityTester : IPrimalityTester {
        /// <summary>
        /// retrieve test base for Rabin-Miller primality test
        /// </summary>
        private int[] GetTestBase(int number) {

            var bases = new Dictionary<int, int[]> {

                { 2047, new int[] { 2 } },
                { 1373653, new int[] { 2, 3 } },
                { 9080191, new int[] { 31, 73 } },
                { 25326001, new int[] { 2, 3, 5 } }
            };

            return bases.First(pair => number < pair.Key).Value;
        }
        /// <summary>
        /// calculate Rabin-Miller primality test coefficients
        /// </summary>
        private int[] GetCoefficients(int number) {

            int s = 0, d = number - 1;

            while(d % 2 == 0) {

                s++;
                d /= 2;
            }

            return new int[] { s, d };
        }
        /// <summary>
        /// check if a number is prime number
        /// </summary>
        public bool IsPrime(int number) {

            if(number <= 2) {

                return number == 2;
            }

            int[] coefficients = GetCoefficients(number);

            foreach(int testBase in GetTestBase(number)) {

                for(int i = 0; i < coefficients[0]; i++) {

                    int remaider = (int)(Math.Pow(testBase, Math.Pow(2, i) * coefficients[1]) % number);

                    if(remaider == number - 1 || (i == 0 && remaider == 1)) {

                        return true;
                    }
                }
            }

            return false;
        }
    }
}