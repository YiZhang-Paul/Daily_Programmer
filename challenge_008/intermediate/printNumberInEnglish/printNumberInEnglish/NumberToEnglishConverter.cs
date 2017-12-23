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
            var that = ToEnglish(20125);
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

        private int[] DecomposeNumber(int number) { 
        
            var decomposed = new List<int>();
            string numberString = string.Join("", number.ToString().Reverse());

            for(int i = 0; i < numberString.Length; i++) {

                int digit = int.Parse(numberString[i].ToString());

                if(digit != 0) {

                    decomposed.Add(digit * (int)Math.Pow(10, i));
                }
            }

            decomposed.Reverse();

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