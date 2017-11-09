using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace calculatePI {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(GetPI());
            Console.WriteLine(GetPI(100));            
        }
        /// <summary>
        /// calculate next digit of PI
        /// </summary>
        public static int GetDigit(int[] numerator, int[] denominator, int[] remainder) {

            for(int i = remainder.Length - 1, carry = 0; i >= 0; i--) {

                int sum = remainder[i] * 10 + carry;
                remainder[i] = sum % (i == 0 ? 10 : denominator[i - 1]);

                if(i == 0) {

                    return sum / 10;
                }

                carry = sum / denominator[i - 1] * numerator[i - 1];
            }

            return -1;
        }
        /// <summary>
        /// calculate value of PI
        /// </summary>
        public static string GetPI(int precision = 30) {

            var result = new List<int>();
            int[] numerator = Enumerable.Range(1, 1000).ToArray();
            int[] denominator = numerator.Select(value => value * 2 + 1).ToArray();
            int[] remainder = Enumerable.Repeat(2, numerator.Length + 1).ToArray();

            for(int i = 0; i < precision + 1; i++) {

                int digit = GetDigit(numerator, denominator, remainder);

                if(digit > 9) {
                
                    result[result.Count - 1]++;
                }

                result.Add(digit > 9 ? 0 : digit);
            }

            return result[0] + "." + string.Join("", result.Skip(1));
        }
    }
}