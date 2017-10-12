using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pangrams {
    class PangramChecker {
        /**
         * display content of a dictionary
         * @param {Dictionary<char, int>} [dictionary] - dictionary to display
         * 
         * @return {string} [dictionary content]
         */
        public string DisplayContent(Dictionary<char, int> dictionary) {
            StringBuilder content = new StringBuilder();
            foreach(KeyValuePair<char, int> pair in dictionary) {
                content.Append(pair.Key + " : " + pair.Value + ", ");
            }
            return "{" + content.ToString().Substring(0, content.Length - 1) + "}";
        }
        /**
         * check if a string is pangram
         * @param {string} [testStr] - string to test
         * @param {Dictionary<char, int>} [counter] - letter counter
         * @param {int} [totalLetter] - total number of letters in a writing system
         * 
         * @return {bool} [test result]
         */
        public bool IsPangram(string testStr, Dictionary<char, int> counter, int totalLetter = 26) {
            string lowerStr = testStr.ToLower();
            foreach(char character in lowerStr) {
                if(Char.IsLetter(character)) {
                    counter[character] = counter.ContainsKey(character) ? counter[character] + 1 : 1;
                }
            }
            return counter.Count >= totalLetter;
        }
    }
}
