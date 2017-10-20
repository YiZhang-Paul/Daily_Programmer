using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace wordLadderSteps {
    class WordLadder {

        public string[] WordList { get; private set; }

        public WordLadder() {

            WordList = GetList("wordList.txt");
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

                return File.ReadAllLines(path);
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return null;
        }
        /*
         * retrieve all valid words for current word in the ladder
         * @param {string} [curWord] - current word in the ladder
         *
         * @return {string[]} [all valid words]
         */
        public string[] GetCandidates(string curWord) {

            return WordList.Where(word => IsValidWord(curWord, word)).ToArray();
        }
        /*
         * check if a word is a candidate of current word in the ladder
         * @param {string} [curWord] - current word in the ladder
         * @param {string} [testWord] - word to check
         *
         * @return {bool} [test result]
         */
        public bool IsValidWord(string curWord, string testWord) { 
        
            if(testWord.Length != curWord.Length) {

                return false;
            }

            bool hasOtherChar = false;

            for(int i = 0; i < curWord.Length; i++) {

                if(curWord[i] != testWord[i] && hasOtherChar) {

                    return false;
                }

                hasOtherChar = hasOtherChar ? true : curWord[i] != testWord[i];
            }

            return hasOtherChar;
        }
        /*
         * find words with given amount of candidates
         * @param {int} [total] - total amount of candidates needed for the word
         *
         * @return {string[]} [all words with given amoun of candidates]
         */
        public string[] GetWordWithGivenCandidates(int total) {

            return WordList.Where(word => GetCandidates(word).Length == total).ToArray();
        }
        /*
         * retrieve all unique candidates along the word ladder chain
         * @param {string} [start] - starting word in the chain
         * @param {int} [steps] - total steps in the chain
         *
         * @return {string[]} [all unique candidates]
         */
        public string[] GetCandidatesChain(string start, int steps) {

            var allCandidates = new HashSet<string>();
            var curCandidates = new HashSet<string>(new string[] { start });

            for(int i = 0; i < steps; i++) {

                var newCandidates = new HashSet<string>();
                
                foreach(string word in curCandidates) {

                    newCandidates.UnionWith(GetCandidates(word));
                }

                curCandidates = newCandidates;
                allCandidates.UnionWith(curCandidates);
            }

            return allCandidates.ToArray();
        }
    }
}