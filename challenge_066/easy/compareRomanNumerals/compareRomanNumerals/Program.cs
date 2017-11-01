using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace compareRomanNumerals {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(CompareNumeral("X", "VIIII"));
            Console.WriteLine(CompareNumeral("CX", "MX"));
            Console.WriteLine(CompareNumeral("MDX", "MDXI"));
            Console.WriteLine(CompareNumeral("MDX", "MDV"));
            Console.WriteLine(CompareNumeral("MDV", "MDV") + "\n");
            //bonus input
            Console.WriteLine(CompareNumeral("XIV", "XII"));
            Console.WriteLine(CompareNumeral("XLIII", "LIV"));
            Console.WriteLine(CompareNumeral("III", "IV"));
            Console.WriteLine(CompareNumeral("MMCD", "MMCD"));
        }
        /// <summary>
        /// transform Numerals to non-subtracted form
        /// </summary>
        public static string ToNonSubtracted(string numeral) {

            string[] subtracted = new string[] { "CM", "CD", "XC", "XL", "IX", "IV" };
            string[] nonSubtracted = new string[] { "DCCCC", "CCCC", "LXXXX", "XXXX", "VIIII", "IIII" };
            
            for(int i = 0; i < subtracted.Length; i++) {

                numeral = Regex.Replace(numeral, subtracted[i], nonSubtracted[i]);
            }

            return numeral;
        }
        /// <summary>
        /// check if first Roman Numeral value is smaller than the second
        /// </summary>
        public static bool CompareNumeral(string first, string second) {
        
            string[] letters = new string[] { "M", "D", "C", "L", "X", "V", "I" };
            /// transform Numerals to non-subtracted form
            first = ToNonSubtracted(first);
            second = ToNonSubtracted(second);

            foreach(string letter in letters) {
                //compare occurrences of letters from largest to smallest
                int total1 = Regex.Matches(first, letter).Count;
                int total2 = Regex.Matches(second, letter).Count;

                if(total1 != total2) {

                    return total1 < total2;
                }
            }

            return false;
        }
    }
}