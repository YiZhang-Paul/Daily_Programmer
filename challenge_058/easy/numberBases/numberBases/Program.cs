using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace numberBases {
    class Program {
        static void Main(string[] args) {

            //default input
            Console.WriteLine(DecimalToBase(1234, 2));
            Console.WriteLine(DecimalToBase(1234, 16));
            Console.WriteLine(DecimalToBase(12345678, 23));
            Console.WriteLine(DecimalToBase(12345678, 19));
            //challenge input
            Console.WriteLine(DecimalToBase(19959694, 35));
            Console.WriteLine(DecimalToBase(376609378180550, 29));
            //bonus input
            Console.WriteLine(string.Join(" ", GetPalindromicBases(15167)));
            Console.WriteLine(string.Join(" ", GetPalindromicBases(10858)));
        }
        /// <summary>
        /// generate a list of powers of a given base that is smaller than given number
        /// </summary>
        public static IEnumerable<long> GetBasePowers(long number, int targetBase) {

            int power = 0;

            while((long)Math.Pow(targetBase, power) <= number) {

                yield return (long)Math.Pow(targetBase, power++);
            }
        }
        /// <summary>
        /// retrieve corresponding number character
        /// </summary>
        public static char GetNumberChar(int number) { 
        
            return number > 9 ? Char.ConvertFromUtf32(55 + number)[0] : number.ToString()[0];
        }
        /// <summary>
        /// convert decimal number to target base
        /// </summary>
        public static string DecimalToBase(long number, int targetBase) {

            var result = new StringBuilder();
            var powers = GetBasePowers(number, targetBase).OrderByDescending(value => value);

            foreach(long power in powers) {

                result.Append(GetNumberChar((int)(number / power)));
                number = number % power;
            }

            return result.ToString();
        }
        /// <summary>
        /// find all bases where a decimal number is palindromic
        /// </summary>
        public static int[] GetPalindromicBases(int number) {

            return Enumerable.Range(2, 35)
                             .Where(curBase => IsPalindrome(DecimalToBase(number, curBase)))
                             .ToArray();
        }
        /// <summary>
        /// check if a number is palindromic
        /// </summary>
        public static bool IsPalindrome(string number) {

            for(int i = 0; i < number.Length - 1 - i; i++) {

                if(number[i] != number[number.Length - 1 - i]) {
                
                    return false;
                }
            }

            return true;
        }
    }
}