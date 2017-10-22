using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace wordUnscrambler {
    class Unscrambler {

        public string[] List { get; private set; }
        public Dictionary<string, List<string>> Dictionary { get; private set; }
        /*
         * @param {string} [name] - word list file name
         */
        public Unscrambler(string name = "wordList.txt") {

            List = GetList(name);
            Dictionary = GetDictionary();
        }
        /*
         * retrieve word list
         * @param {string} [name] - word list file name
         *
         * @return {string[]} [word list]
         */
        public string[] GetList(string name) {

            string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, name);

            try {

                return File.ReadAllLines(path).Select(word => word.ToLower()).ToArray();
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return new string[1];
        }
        /*
         * construct unscrambled word dictionary
         *
         * @return {Dictionary<string, List<string>>} [unscrambled word dictionary]
         */
        public Dictionary<string, List<string>> GetDictionary() { 
        
            var dictionary = new Dictionary<string, List<string>>();
            
            foreach(string word in List) {

                string key = SortLetter(word);
                dictionary[key] = dictionary.ContainsKey(key) ? dictionary[key] : new List<string>();
                dictionary[key].Add(word);
            }

            return dictionary;
        }
        /*
         * sort letters of a word in alphabetical order
         * @param {string} [word] - word to sort
         *
         * @return {string} [sorted word]
         */
        public string SortLetter(string word) {

            char[] output = new char[word.Length];
            int[] counter = new int[26];

            for(int i = 0; i < word.Length; i++) {

                counter[Char.ConvertToUtf32(word, i) - 97]++;
            }

            for(int i = 1; i < counter.Length; i++) {

                counter[i] += counter[i - 1];
            }

            for(int i = 0; i < word.Length; i++) {

                int index = Char.ConvertToUtf32(word, i) - 97;
                output[counter[index] - 1] = word[i];
                counter[index]--;
            }

            return string.Join("", output);
        }
        /*
         * unscramble word
         * @param {string} [word] - word to unscramble
         *
         * @return {string[]} [all possible unscrambled words]
         */
        public string[] Unscramble(string word) {

            string key = SortLetter(word);

            return Dictionary.ContainsKey(key) ? Dictionary[key].ToArray() : new string[1];
        }
    }
}