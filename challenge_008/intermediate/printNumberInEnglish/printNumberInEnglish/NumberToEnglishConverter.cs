using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace printNumberInEnglish {
    class NumberToEnglishConverter {

        private Dictionary<int, string> TranslationTable { get; set; }
        private INumberFormatter Formatter { get; set; }

        public NumberToEnglishConverter(string[] translations, INumberFormatter formatter) {

            TranslationTable = CreateTranslationTable(translations);
            Formatter = formatter;
        }

        private Dictionary<int, string> CreateTranslationTable(string[] translations) {

            var table = new Dictionary<int, string>();
            //make sure the translate does translate between numbers and English words
            foreach(string translation in translations.Where(row => Regex.IsMatch(row, @"\d"))) {

                int number = int.Parse(Regex.Match(translation, @"\d+").Value);
                string english = Regex.Match(translation, @"[^\d\s]+").Value;
                table[number] = english;
            }

            return table;
        }

        private string GetTranslation(int number) {

            if(!TranslationTable.ContainsKey(number)) {

                return "";
            }

            return TranslationTable[number];
        }
        /// <summary>
        /// translate numbers from 1 - 99 to English
        /// </summary>
        private string ReadTens(int tens) { 
        
            if(tens == 0) {

                return "";
            }

            var result = new StringBuilder(GetTranslation(tens));
            //check if the number cannot be directly translated
            if(result.Length == 0) {

                result.Append(GetTranslation(tens - tens % 10) + "-")
                      .Append(GetTranslation(tens % 10));
            }

            return result.ToString();
        }
        /// <summary>
        /// translate numbers from 1 - 999 to English
        /// </summary>
        private string ReadHundreds(int hundreds) {

            if(hundreds == 0) {

                return "";
            }

            var result = new StringBuilder();

            if(hundreds >= 100) {

                result.Append(GetTranslation(hundreds / 100) + " ")
                      .Append(GetTranslation(100));
            }

            return result.Append(" " + ReadTens(hundreds % 100)).ToString();
        }

        public string ToEnglish(int number) {

            var hundreds = Formatter.ToHundreds(number);
            var translation = new StringBuilder();

            for(int i = 0; i < hundreds.Length; i++) {

                int groupNumber = (int)Math.Pow(10, hundreds.Length - i + 1);
                //check if current number group represents thousands, millions, billions, etc.
                string group = groupNumber > 100 ? " " + GetTranslation(groupNumber) : "";
                translation.Append(ReadHundreds(hundreds[i]) + group + " ");
            }

            return Formatter.ToEnglish(translation.ToString());
        }
    }
}