using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace digitsCheck {
    class Program {
        static void Main(string[] args) {
 
            //challenge input
            Console.WriteLine(HasAllDigit("123"));
            Console.WriteLine(HasAllDigit("123.123"));
            Console.WriteLine(HasAllDigit("abc"));
        }
        /*
         * check if a string contains only digits
         * @param {string} [input] - input string to check
         *
         * @return {bool} [test result]
         */
        public static bool HasAllDigit(string input) {

            for(int i = 0; i < input.Length; i++) {

                if(!Char.IsDigit(input[i])) {
                
                    return false;
                }
            }

            return true;
        }
    }
}