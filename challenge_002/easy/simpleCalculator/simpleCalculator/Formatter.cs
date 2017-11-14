using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace simpleCalculator {
    class Formatter {
        /// <summary>
        /// format number for proper display
        /// </summary>
        public string Format(string digits, bool keepDecimal = false) {

            bool isDecimal = Regex.IsMatch(digits, @"\.");
            string integer = isDecimal ? digits.Split('.')[0] : digits;
            string decimals = isDecimal ? digits.Split('.')[1] : "";

            return AddComma(integer) + (keepDecimal || isDecimal ? "." : "") + decimals;
        }
        /// <summary>
        /// add comma to numbers
        /// </summary>
        public string AddComma(string number) {

            var result = new StringBuilder();

            for(int i = number.Length - 1; i >= 0; i--) {

                result.Append(number[i] + ((number.Length - i) % 3 == 0 ? "," : ""));
            }

            return Regex.Replace(string.Join("", result.ToString().Reverse()), "^,|(?<=-),", "");
        }
    }
}