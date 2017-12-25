using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace tysonEquations {
    class TextManipulator : ITextManipulator {

        public string SortLetters(string word) {

            return string.Join("", word.OrderBy(letter => Convert.ToInt32(letter)));
        }

        public string SwapLetter(string word, char toSwap, char newLetter) {

            return Regex.Replace(word, toSwap.ToString(), newLetter.ToString());
        }
    }
}