using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace anagrams {
    class AnagramFinder {

        public string[] List { get; private set; }
        public Dictionary<string, List<string>> SortedWords { get; private set; } 
        /// <param name="name">word list file name</param>
        public AnagramFinder(string name) {

            List = GetWordList(name);
            SortedWords = SortAllWords(List);
        }
        /// <summary>
        /// retrieve word list
        /// </summary>
        /// <param name="name">word list file name</param>
        /// <returns></returns>
        public string[] GetWordList(string name) { 
        
            try {

                return File.ReadAllLines(name);
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return new string[0];
        }
        /// <summary>
        /// sort all letters in a word in alphabetical order
        /// </summary>
        /// <param name="word">word to sort</param>
        /// <returns>sorted word</returns>
        public string SortLetters(string word) {

            return string.Join("", word.OrderBy(letter => Char.ConvertToUtf32(letter.ToString(), 0)));
        }
        /// <summary>
        /// group all words with same letters together
        /// </summary>
        /// <param name="words">all words in the word list</param>
        /// <returns>grouped words</returns>
        public Dictionary<string, List<string>> SortAllWords(string[] words) { 
        
            var groups = new Dictionary<string, List<string>>();

            foreach(string word in words) {

                string sorted = SortLetters(word);
                groups[sorted] = groups.ContainsKey(sorted) ? groups[sorted] : new List<string>();
                groups[sorted].Add(word);
            }

            return groups;
        }
        /// <summary>
        /// retrieve anagrams of a word
        /// </summary>
        /// <param name="word">word to examine</param>
        /// <returns>all anagrams of the given word</returns>
        public string[] GetAnagrams(string word) {

            string sorted = SortLetters(word).ToLower();

            return SortedWords.ContainsKey(sorted) ? SortedWords[sorted].ToArray() : new string[] { "No Anagram Found." };
        }
        /// <summary>
        /// retrieve anagram family with given size in place
        /// </summary>
        /// <param name="place"></param>
        /// <returns></returns>
        public string[] GetLargestFamily(int place = 1) {

            return SortedWords.OrderByDescending(group => group.Value.Count)
                              .Take(place)
                              .Last().Value
                              .ToArray();
        }
    }
}