using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace CryptarithmeticSolverClassLibrary {
    public class Utility {

        public char[] GetLetters(string input) {

            input = Regex.Replace(input.ToLower(), @"\s", "");

            return new HashSet<char>(input).ToArray();
        }
    }
}