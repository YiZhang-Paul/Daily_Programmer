using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace longAndShortScale {
    class NumberTranslator {

        private string[] _shortScaleWords = new string[] { 

            "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion" 
        };
        private string[] _longScaleWords = new string[] { 

            "thousand", "million", "milliard", "billion", "billiard", "trillion", "trilliard"
        };
        private Dictionary<int, string> _translateTable = new Dictionary<int, string> { 
        
            {1, "one"}, 
            {2, "two"}, 
            {3, "three"}, 
            {4, "four"}, 
            {5, "five"}, 
            {6, "six"}, 
            {7, "seven"}, 
            {8, "eight"}, 
            {9, "nine"}, 
            {10, "ten"},
            {11, "eleven"}, 
            {12, "twelve"},
            {13, "thirteen"},
            {14, "fourteen"}, 
            {15, "fifteen"}, 
            {16, "sixteen"}, 
            {17, "seventeen"}, 
            {18, "eighteen"}, 
            {19, "nineteen"}, 
            {20, "twenty"}, 
            {30, "thirty"}, 
            {40, "forty"}, 
            {50, "fifty"}, 
            {60, "sixty"},
            {70, "seventy"}, 
            {80, "eighty"}, 
            {90, "ninety"}
        };
        /// <summary>
        /// translate number into English
        /// </summary>
        public string Translate(long number) {

            string numberString = number.ToString();
            var shortForm = new StringBuilder();
            var longForm = new StringBuilder();

            for(int i = numberString.Length / 3; i >= 0; i--) {

                int segment = GetSegment(numberString, i);

                if(segment > 0) {

                    string translate = ReadSegment(segment);
                    shortForm.Append(translate + (i - 1 >= 0 ? " " + _shortScaleWords[i - 1] : "") + ", ");
                    longForm.Append(translate + (i - 1 >= 0 ? " " + _longScaleWords[i - 1] : "") + ", ");
                }
            }

            return "Short Scale: " + FormatResult(shortForm) + "\n\nLong Scale: " + FormatResult(longForm);
        }
        /// <summary>
        /// format result
        /// </summary>
        public string FormatResult(StringBuilder result) {

            string formatted = result.ToString().Substring(0, result.Length - 2);

            return Regex.Replace(formatted, @",(?=[^,]+$)", " and");
        }
        /// <summary>
        /// retrieve digits of a given segment
        /// </summary>
        public int[] GetDigits(int number) {

            string numberString = number.ToString().PadLeft(3, '0');

            return numberString.Select(digit => Int32.Parse(digit.ToString())).ToArray();
        }
        /// <summary>
        /// retrieve a given segment from number
        /// </summary>
        public int GetSegment(string numberString, int segmentIndex) {

            int startIndex = Math.Max(0, numberString.Length - (segmentIndex + 1) * 3);
            int length = Math.Min(numberString.Length - segmentIndex * 3, 3);
            
            return Int32.Parse(numberString.Substring(startIndex, length));
        }
        /// <summary>
        /// read segments of number
        /// </summary>
        public string ReadSegment(int segment) {

            int[] digits = GetDigits(segment);
            var translate = new StringBuilder();
            //read hundreds
            if(digits[0] != 0) {

                translate.Append(ReadHundreds(digits[0]));
            }
            //read tens and ones
            if(digits[1] != 0) {

                translate.Append((digits[0] == 0 ? "" : " and ") + ReadTens(digits[1], digits[2]));
            }
            else if(digits[2] != 0) {

                translate.Append((digits[0] == 0 ? "" : " and ") + ReadDigits(digits[2]));
            }

            return translate.ToString();
        }
        /// <summary>
        /// read hundreds
        /// </summary>
        public string ReadHundreds(int digit) {

            return ReadDigits(digit) + " hundred";
        }
        /// <summary>
        /// read tens
        /// </summary>
        /// <param name="tens">digit on tens place</param>
        /// <param name="ones">digit on ones place</param>
        public string ReadTens(int tens, int ones) { 
        
            int total = tens * 10 + ones;

            if(_translateTable.ContainsKey(total)) {
            
                return _translateTable[total];
            }

            return _translateTable[tens * 10] + (ones > 0 ? "-" + ReadDigits(ones) : "");
        }
        /// <summary>
        /// read digits
        /// </summary>
        public string ReadDigits(int digit) { 
            
            return _translateTable[digit];
        }
    }
}