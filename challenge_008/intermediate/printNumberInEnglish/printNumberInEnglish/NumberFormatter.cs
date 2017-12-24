using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace printNumberInEnglish {
    class NumberFormatter : INumberFormatter {

        private string[] _keyWords = { 
                                     
            @"hundred(?!\sthousand)", "thousand", "hundred thousand", "million", "billion"
        };

        private string MatchPattern { get; set; }

        public NumberFormatter() {

            MatchPattern = GetMatchPattern(_keyWords);
        }

        private string GetMatchPattern(string[] keyWords) {

            return "(" + string.Join("|", keyWords) + @")(?=.)+";
        }
        /// <summary>
        /// convert number to string which are manipulatable in groups of 3 digits
        /// </summary>
        private string PadNumber(int number) {

            string result = number.ToString();
            //simulate comma separators in numbers (e.g 1,000,000)
            int padLength = (int)Math.Ceiling((double)result.Length / 3) * 3;

            return result.PadLeft(padLength, '0');
        }

        public int[] ToHundreds(int number) {

            var hundreds = new List<int>();
            string paddedNumber = PadNumber(number);

            for(int i = 0; i < paddedNumber.Length; i += 3) {

                hundreds.Add(int.Parse(paddedNumber.Substring(i, 3)));
            }

            return hundreds.ToArray();
        }

        public string ToEnglish(string toFormat) {

            toFormat = Regex.Replace(toFormat.Trim(), @"\s+", " ");

            return Regex.Replace(toFormat, MatchPattern, match => {

                return match.Value + " and";
            });
        }
    }
}