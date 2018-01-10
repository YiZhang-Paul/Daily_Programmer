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

            var lookup = new Dictionary<char, int>();

            for(int i = 0; i < letters.Length; i++) {

                lookup[letters[i]] = digits[i];
            }

            return lookup;
        }

        private bool HasLeadingZero(string[] words, Dictionary<char, int> lookup) {

            return words.Any(word => lookup[word.First()] == 0);
        }

        private bool TrailLettersHoldEqual(string[] words, Dictionary<char, int> lookup) {

            string lastWord = words.Last();
            int sum = words.Take(words.Length - 1)
                           .Sum(word => lookup[word.Last()]);

            return sum % 10 == lookup[lastWord.Last()];
        }

        private int ToNumber(string word, Dictionary<char, int> lookup) {

            var digits = word.Select(letter => lookup[letter]);

            return int.Parse(string.Join("", digits));
        }

        private bool CanFormEquation(string[] words, Dictionary<char, int> lookup) { 

            int sum = words.Take(words.Length - 1)
                           .Sum(word => ToNumber(word, lookup));

            return sum == ToNumber(words.Last(), lookup);
        }

        private bool IsValidCryptarithm(string[] words, Dictionary<char, int> lookup) {

            if(HasLeadingZero(words, lookup) || !TrailLettersHoldEqual(words, lookup)) {

                return false;
            }

            return CanFormEquation(words, lookup);
        }

        public Dictionary<char, int> FindCryptarithm(string input) {

            string[] words = Utility.GetWords(input);
            char[] letters = Utility.GetLetters(input);
            int[] allDigits = Enumerable.Range(0, 10).ToArray();

            foreach(int[] digits in Utility.GetCombinations(allDigits, letters.Length)) {

                var lookup = CreateDigitLookup(letters, digits);

                if(IsValidCryptarithm(words, lookup)) {

                    return lookup;
                }
            }
        
            return null;
        }
    }
}