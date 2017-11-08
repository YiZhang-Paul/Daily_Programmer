using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace roulette {
    class Formatter {
        /// <summary>
        /// capitalize words
        /// </summary>
        public static string Capitalize(string word) {

            return word[0].ToString().ToUpper() + word.Substring(1).ToLower();
        }
        /// <summary>
        /// capitalize all words in a sentence
        /// </summary>
        public static string CapitalizeAll(string sentence) {

            return Regex.Replace(sentence, @"\b[A-Za-z]+", match => Capitalize(match.Value));
        }
    }
}