using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Numerics;
using System.Threading.Tasks;

namespace FermatPrimalityTesterClassLibrary {
    public class FermatPrimalityTester {

        private Random _random = new Random();

        private List<int> GetSmallerPositiveIntegers(BigInteger number) {

            int maxNumber = 0;

            try {

                maxNumber = (int)number - 1;
            }
            catch(OverflowException) {

                maxNumber = 1000000;
            }

            return Enumerable.Range(1, maxNumber).ToList();
        }

        private int PickTestNumber(List<int> numbers) {

            int index = _random.Next(0, numbers.Count);
            int number = numbers[index];
            numbers.RemoveAt(index);

            return number;
        }

        private double GetProbability(int passes) { 
        
            return 1 - Math.Pow(2, -passes);
        }

        private bool IsCongruent(int choice, BigInteger power) {

            return BigInteger.ModPow(choice, power, power).Equals(choice);
        }

        public bool IsPrime(BigInteger number, double certainty) {

            var testNumbers = GetSmallerPositiveIntegers(number);
            int testPasses = 0;

            while(GetProbability(testPasses) <= certainty && testNumbers.Count > 0) {
            
                if(!IsCongruent(PickTestNumber(testNumbers), number)) {
                
                    return false;
                }

                testPasses++;
            }

            return true;
        }
    }
}