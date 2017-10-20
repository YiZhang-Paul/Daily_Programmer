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
         * retrieve all valid words for current word in ladder
         * @param {string} [curWord] - current word in the ladder
         *
         * @return {string[]} [all valid words]
         */
        public string[] GetCandidates(string curWord) {

            return WordList.Where(word => IsValidWord(curWord, word)).ToArray();
        }
        /*
         * check if a word is a candidate of current word in ladder
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
    }
}