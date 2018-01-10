using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace CryptarithmeticSolverClassLibrary {
    public class Utility : IUtility {

        public string[] GetWords(string input) {

            return Regex.Matches(input.ToLower(), @"[A-z]+")
                        .Cast<Match>()
                        .Select(match => match.Value)
                        .ToArray();
        }

        public char[] GetLetters(string input) {

            string allLetters = string.Join("", GetWords(input));

            return new HashSet<char>(allLetters).ToArray();
        }

        private List<int> GetListWithItem(List<int> list, int item) {

            return list.Concat(new int[] { item }).ToList();
        }

        private List<int> CopyListWithoutItem(List<int> list, int indexToIgnore) {

            var beforeIndex = list.Take(indexToIgnore);
            var afterIndex = list.Skip(indexToIgnore + 1);

            return beforeIndex.Concat(afterIndex).ToList();
        }

        public int[][] GetCombinations(List<int> options, int total, List<int> current = null, List<int[]> combinations = null) {

            current = current ?? new List<int>();
            combinations = combinations ?? new List<int[]>();

            if(current.Count == total) {

                combinations.Add(current.ToArray());

                return null;
            }

            for(int i = 0; i < options.Count; i++) {

                var newCurrent = GetListWithItem(current, options[i]);
                var otherOptions = CopyListWithoutItem(options, i);
                GetCombinations(otherOptions, total, newCurrent, combinations);
            }

            return combinations.ToArray();
        }
    }
}