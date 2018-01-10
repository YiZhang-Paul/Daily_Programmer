using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CryptarithmeticSolverClassLibrary {
    public class CryptarithmeticSolver {

        private IUtility Utility { get; set; }

        public CryptarithmeticSolver(IUtility utility) {

            Utility = utility;
        }

        private Dictionary<char, int> CreateDigitLookup(char[] letters, int[] digits) {

            if(letters.Length != digits.Length) {

                throw new ArgumentException("Number of Letters Does not Match Number of Digits.");
            }
        
            var lookup = new Dictionary<char, int>();

            for(int i = 0; i < letters.Length; i++) {

                lookup[letters[i]] = digits[i];
            }

            return lookup;
        }

        private bool HasLeadingZero(string[] words, Dictionary<char, int> lookup) {

            return words.Any(word => lookup[word[0]] == 0);
        }

        private bool TrailLettersHoldEqual(string[] words, Dictionary<char, int> lookup) {

            string lastWord = words.Last();
            int sum = words.Take(words.Length - 1)
                           .Sum(word => lookup[word.Last()]);

            return sum % 10 == lookup[lastWord.Last()];
        }

        public bool IsValidCryptarithm(string[] words, char[] letters, int[] digits) {

            var digitLookup = CreateDigitLookup(letters, digits);

            if(HasLeadingZero(words, digitLookup) || !TrailLettersHoldEqual(words, digitLookup)) {

                return false;
            }
        
            return true;
        }
    }
}