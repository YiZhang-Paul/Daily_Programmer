using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace printNumberInEnglish {
    class EnglishToNumberConverter {

        private Dictionary<string, int> TranslationTable { get; set; }
        private IEnglishNumberFormatter Formatter { get; set; }

        public EnglishToNumberConverter(string[] translations, IEnglishNumberFormatter formatter) {

            TranslationTable = CreateTranslationTable(translations);
            Formatter = formatter;
        }

        private Dictionary<string, int> CreateTranslationTable(string[] translations) {

            var table = new Dictionary<string, int>();
            //make sure the translate does translate between numbers and English words
            foreach(string translation in translations.Where(row => Regex.IsMatch(row, @"\d"))) {

                string english = Regex.Match(translation, @"[^\d\s]+").Value;
                int number = int.Parse(Regex.Match(translation, @"\d+").Value);
                table[english] = number;
            }

            return table;
        }

        private int GetValue(string translation) {

            bool isCompositeNumber = Regex.IsMatch(translation, "-");

            if(isCompositeNumber) {

                var numbers = translation.Split('-');

                return GetValue(numbers[0]) + GetValue(numbers[1]);
            }
            else if(!TranslationTable.ContainsKey(translation)) {

                return 0;
            }

            return TranslationTable[translation];

        }

        public int ToNumber(string english) {

            int result = 0;

            foreach(string hundreds in Formatter.ToHundreds(english)) {

                var items = hundreds.Split(' ');
                var temporaryTotal = 0;

                for(int i = 0; i < items.Length; i++) {

                    if(items[i] == "and") {

                        temporaryTotal += GetValue(items[++i]);
                        continue;
                    }

                    int value = GetValue(items[i]);
                    temporaryTotal = temporaryTotal == 0 ? value : temporaryTotal * value;
                }

                result += temporaryTotal;
            }

            return result;
        }
    }
}