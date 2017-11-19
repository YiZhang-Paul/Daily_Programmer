using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace calculator {
    class Formatter {
        /// <summary>
        /// format number for proper display
        /// </summary>
        public string Format(decimal number, bool keepDecimal = false) {

            string digits = number.ToString();
            bool isDecimal = Regex.IsMatch(digits, @"\.");
            string integer = isDecimal ? digits.Split('.')[0] : digits;
            string decimals = isDecimal ? digits.Split('.')[1] : "";

            return AddComma(integer) + (keepDecimal || isDecimal ? "." : "") + decimals;
        }
        /// <summary>
        /// add commas to integer part of a number
        /// </summary>
        public string AddComma(string integer) {

            var formatted = new StringBuilder();

            for(int i = integer.Length - 1; i >= 0; i--) {

                formatted.Append(integer[i] + ((integer.Length - i) % 3 == 0 ? "," : ""));
            }

            return Regex.Replace(string.Join("", formatted.ToString().Reverse()), "^,|(?<=-),", "");
        }
    }
}