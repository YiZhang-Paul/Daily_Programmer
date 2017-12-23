using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace printNumberInEnglish {
    class NumberToEnglishConverter {

        private Dictionary<int, string> Translation { get; set; }

        public NumberToEnglishConverter(string[] translations) {

            Translation = GetTranslationTable(translations);
            var that = DecomposeNumber(20125);
        }

        private Dictionary<int, string> GetTranslationTable(string[] translations) {

            var table = new Dictionary<int, string>();

            foreach(string translation in translations) {

                if(Regex.IsMatch(translation, @"\d")) {

                    int value = int.Parse(Regex.Match(translation, @"\d+").Value);

                    if(!table.ContainsKey(value)) {

                        table.Add(value, Regex.Match(translation, @"[^\d\s]+").Value);
                    }
                }
            }

            return table;
        }

        private string GetNumberString(int number) {

            string result = number.ToString();
            int padLength = (int)Math.Ceiling((double)result.Length / 3) * 3;

            return result.PadLeft(padLength, '0');
        }

        private int[] DecomposeNumber(int number) { 
        
            var decomposed = new List<int>();
            string numberString = GetNumberString(number);

            for(int i = 0; i < numberString.Length; i += 3) {

                decomposed.Add(int.Parse(numberString.Substring(i, 3)));
            }

            return decomposed.ToArray();
        }

        private string GetTranslation(int number) { 
        
            if(Translation.ContainsKey(number)) {
            
                return Translation[number];
            }

            int leadDigit = int.Parse(number.ToString()[0].ToString());
            
            return Translation[leadDigit] + "-" + Translation[number / leadDigit];
        }

        public string ToEnglish(int number) {

            var translation = DecomposeNumber(number).Select(GetTranslation);

            return string.Join(", ", translation);
        }
    }
}