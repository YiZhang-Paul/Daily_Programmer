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

        private int[] GetListWithItem(int[] list, int item) {

            return list.Concat(new int[] { item }).ToArray();
        }

        private int[] CopyListWithoutItem(int[] list, int indexToIgnore) {

            var beforeIndex = list.Take(indexToIgnore);
            var afterIndex = list.Skip(indexToIgnore + 1);

            return beforeIndex.Concat(afterIndex).ToArray();
        }

        public int[][] GetCombinations(int[] options, int total, int[] current = null, List<int[]> combinations = null) {

            current = current ?? new int[0];
            combinations = combinations ?? new List<int[]>();

            if(current.Length == total) {

                combinations.Add(current);

                return null;
            }

            for(int i = 0; i < options.Length; i++) {

                int[] newCurrent = GetListWithItem(current, options[i]);
                int[] otherOptions = CopyListWithoutItem(options, i);
                GetCombinations(otherOptions, total, newCurrent, combinations);
            }

            return combinations.ToArray();
        }
    }
}