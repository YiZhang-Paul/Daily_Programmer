using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rankWords {
    class Program {
        static void Main(string[] args) {

            string[] words = new string[] { "Hat", "Shoe" };

            //challenge input
            Console.WriteLine(string.Join(", ", RankBySum(words)));
            //bonus input
            Console.WriteLine(string.Join(", ", RankByAverage(words)));
        }
        /// <summary>
        /// retrieve value of a given letter
        /// </summary>
        public static int GetLetterValue(char letter) {

            return Char.ConvertToUtf32(letter.ToString().ToLower(), 0) - 96;
        }
        /// <summary>
        /// calculate sum of all letter values in a given word
        /// </summary>
        public static int GetWordValue(string word) {

            return word.Select(letter => GetLetterValue(letter)).Sum();
        }
        /// <summary>
        /// sort words by sum of letter values
        /// </summary>
        public static string[] RankBySum(string[] words) {

            return words.OrderBy(word => GetWordValue(word)).ToArray();
        }
        /// <summary>
        /// sort words by average of letter sum
        /// </summary>
        public static string[] RankByAverage(string[] words) {

            return words.OrderBy(word => (double)GetWordValue(word) / word.Length).ToArray();
        }
    }
}