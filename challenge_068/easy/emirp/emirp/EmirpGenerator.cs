using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace emirp {
    class EmirpGenerator {

        private PrimalityTester _tester = new PrimalityTester();
        /// <summary>
        /// reverse the digits of a number
        /// </summary>
        public int ReverseDigits(int number) {

            return Convert.ToInt32(string.Join("", number.ToString().Reverse()));
        }
        /// <summary>
        /// check if a number is palindromic
        /// </summary>
        public bool IsPalindrome(int number) {

            string digits = number.ToString();

            for(int i = 0; i < digits.Length - 1 - i; i++) {

                if(digits[i] != digits[digits.Length - 1 - i]) {
                
                    return false;
                }
            }

            return true;
        }
        /// <summary>
        /// check if a number is Emirp
        /// </summary>
        public bool IsEmirp(int number) {

            return _tester.IsPrime(number) && !IsPalindrome(number) && _tester.IsPrime(ReverseDigits(number));
        }
        /// <summary>
        /// calculate all Emirps within given limit
        /// </summary>
        public int[] GetEmirp(int limit) { 
        
            var results = new HashSet<int>();

            for(int i = 0; i <= limit; i++) {

                if(!results.Contains(i) && IsEmirp(i)) {
                    //add both Emirp number and its reversed number
                    results.Add(i);
                    results.Add(ReverseDigits(i));
                }
            }

            return results.OrderBy(number => number).ToArray();
        }
    }
}