using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace letterToNumber {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(FormatPhoneNumber("1-800-VERIZON"));
            Console.WriteLine(FormatPhoneNumber("1-800-COMCAST"));
        }
        /// <summary>
        /// convert letter to number
        /// </summary>
        public static int ToNumber(char letter) {

            int index = Char.ConvertToUtf32(letter.ToString(), 0) - 64;
            //number key 2 to 6
            if(index < 16) {

                return (int)Math.Ceiling((double)index / 3) + 1;
            }
            //number key 7 to 9
            return index < 20 ? 7 : (index < 23 ? 8 : 9);
        }
        /// <summary>
        /// reformat phone number
        /// </summary>
        public static string FormatPhoneNumber(string phone) {

            return Regex.Replace(phone, "[A-Za-z]+", match => {

                string digits = string.Join("", match.Value.Select(letter => ToNumber(letter)));

                return digits.Substring(0, 3) + "-" + digits.Substring(3);
            });
        }
    }
}