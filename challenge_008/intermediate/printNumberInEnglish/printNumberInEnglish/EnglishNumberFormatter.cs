using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace printNumberInEnglish {
    class EnglishNumberFormatter : NumberFormatter, IEnglishNumberFormatter {

        public EnglishNumberFormatter() {

            var modifiedKeyWords = KeyWords.Where(keyWord => !Regex.IsMatch(keyWord, "hundred"));
            MatchPattern = GetMatchPattern(modifiedKeyWords.ToArray());
        }

        protected override string GetMatchPattern(string[] keyWords) {

            return string.Join("|", keyWords);
        }

        public string[] ToHundreds(string english) {

            string pattern = "(?<=" + MatchPattern + ").+|(?<!" + MatchPattern + ").+" + MatchPattern;

            if(!Regex.IsMatch(english, pattern)) {

                return new string[] { english };
            }

            return Regex.Matches(english, "(?<=" + MatchPattern + ").+|(?<!" + MatchPattern + ").+" + MatchPattern)
                        .Cast<Match>()
                        .Select(match => Regex.Replace(match.Value.Trim(), "^and", "").Trim())
                        .ToArray();
        }
    }
}