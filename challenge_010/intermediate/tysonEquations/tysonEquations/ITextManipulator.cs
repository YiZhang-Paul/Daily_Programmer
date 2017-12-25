using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tysonEquations {
    interface ITextManipulator {

        string SortLetters(string word);
        string SwapLetter(string word, char toSwap, char newLetter);
    }
}