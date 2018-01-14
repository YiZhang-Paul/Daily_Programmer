using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace PrimalityTesterClassLibrary {
    public class MillerRabinPrimalityTester : FermatPrimalityTester {

        private Dictionary<BigInteger, int[]> TestBases { get; set; }

        public MillerRabinPrimalityTester(IPrimalityTester basicTester, string testBaseFile) : base(basicTester) {

            TestBases = CreateTestBases(testBaseFile);
        }

        private string[] PickNumbers(string input) {

            return Regex.Matches(input, @"\d+")
                        .Cast<Match>()
                        .Select(match => match.Value)
                        .ToArray();
        }

        private Dictionary<BigInteger, int[]> CreateTestBases(string fileName) {

            try {

                var testBases = new Dictionary<BigInteger, int[]>();
                var linesInFile = File.ReadAllLines(fileName);

                foreach(string[] numbers in linesInFile.Select(PickNumbers)) {

                    var baseValue = BigInteger.Parse(numbers[0]);
                    var testValues = numbers.Skip(1).Select(int.Parse);
                    testBases[baseValue] = testValues.ToArray();
                }

                return testBases;
            }
            catch(Exception) {
                
                throw new ArgumentException("File Does not Exist.");
            }
        }

        private int[] GetTestValues(BigInteger number) {

            if(TestBases.All(pair => pair.Key <= number)) {

                return null;
            }

            return TestBases.First(pair => pair.Key > number).Value;
        }

        private BigInteger[] GetCoefficients(BigInteger number) {

            BigInteger s = 0, d = number - 1;

            while(d % 2 == 0) {

                s++;
                d /= 2;
            }

            return new BigInteger[] { s, d };
        }

        public bool IsPrime(BigInteger number) { 
        
            int[] testValues = GetTestValues(number);

            if(number <= 2 || testValues == null) {

                return base.IsPrime(number, 0.99);
            }

            var coefficients = GetCoefficients(number);

            foreach(int testValue in testValues) {
            
                foreach(int power in Enumerable.Range(0, (int)coefficients[0])) {

                    var actualPower = (int)Math.Pow(2, power) * coefficients[1];
                    var remainder = BigInteger.ModPow(testValue, actualPower, number);

                    if((number - 1).Equals(remainder) || (power == 0 && remainder.Equals(1))) {
                    
                        return true;
                    }
                }
            }

            return false;
        }
    }
}