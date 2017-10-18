using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace wordsWithOrderedVowels {
    class Program {
        static void Main(string[] args) {

            Console.WriteLine(string.Join("\n", GetOrderedVowelWord()));
        }
        /*
         * retrieve word list
         * @param {string} [name] - word list file name
         *
         * @return {string[]} [all words in the list]
         */
        public static string[] GetList(string name) {

            string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, name);
            string[] list = new string[1];

            try {

                list = File.ReadAllLines(path);
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return list[0] == null ? null : list; 
        }
        /*
         * check if a word contains all ordered vowels
         * @param {string} [word] - word to check
         *
         * @return {bool} [test result]
         */
        public static bool HasOrderedVowel(string word) {

            return Regex.Replace(word, "[^aeiouy]", "", RegexOptions.IgnoreCase).ToLower() == "aeiouy";
        }
        /*
         * find all words containing all ordered vowels
         * @param {string} [name] - word list file name
         *
         * @return {string[]} [words with all vowels in alphabetical order]
         */
        public static string[] GetOrderedVowelWord(string name = "wordList.txt") {

            return GetList(name).Where(word => HasOrderedVowel(word))
                                .Select(word => word.Trim())
                                .ToArray();
        }
    }
}