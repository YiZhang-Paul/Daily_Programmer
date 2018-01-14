using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace PrimalityTesterClassLibrary {
    public class FermatPrimalityTester : IBigIntegerPrimalityTester {

        private Random _random = new Random();

        private IPrimalityTester BasicTester { get; set; }

        public FermatPrimalityTester(IPrimalityTester basicTester) {

            BasicTester = basicTester;
        }

        private List<int> GetTestNumbers(BigInteger number) {

            int maxNumber = 0;

            try {

                maxNumber = (int)number - 1;
            }
            catch(Exception) {

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

        private bool IsCongruent(int testNumber, BigInteger number) {

            return BigInteger.ModPow(testNumber, number, number).Equals(testNumber);
        }

        public bool IsPrime(BigInteger number, double certainty) { 
        
            if(number <= 100) {

                return BasicTester.IsPrime((int)number);
            }

            var testNumbers = GetTestNumbers(number);
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