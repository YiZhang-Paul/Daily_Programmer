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

            string integer = Math.Truncate(number).ToString();
            string digits = number.ToString();
            string decimals = Regex.IsMatch(digits, @"\.") ? digits.Split('.')[1] : "";

            if(decimals != "" && decimal.Parse(decimals) == 0 && !keepDecimal) {

                decimals = "";
            }

            return AddComma(integer) + (keepDecimal || decimals != "" ? "." : "") + decimals;
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