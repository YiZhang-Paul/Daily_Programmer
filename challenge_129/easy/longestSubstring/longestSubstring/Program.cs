using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace longestSubstring {
    class Program {
        static void Main(string[] args) {
            
            //challenge input
            string input1 = "abbccc";
            string input2 = "abcabcabcabccc";
            string input3 = "qwertyytrewq";

            Console.WriteLine(LongestSubstring(input1));
            Console.WriteLine(LongestSubstring(input2));
            Console.WriteLine(LongestSubstring(input3));
        }
        /*
         * find longest substring containing at most two unique characters
         * @param {string} [input] - input string to search from
         *
         * @return {string} [longest substring]
         */
        public static string LongestSubstring(string input) {

            string result = "";

            for(int i = 0; i < input.Length; i++) {
                //container for current substring and unique characters
                var substring = new StringBuilder(input[i].ToString());
                var charSeen = new HashSet<char>(new char[] { input[i] });
            
                foreach(char character in input.Substring(i + 1)) {

                    charSeen.Add(character);
                    //include current character if no more than 3 unique characters were seen
                    if(charSeen.Count <= 2) substring.Append(character);
 
                    if(charSeen.Count > 2) {
                        //record current longest substring found
                        result = result.Length < substring.Length ? substring.ToString() : result;
                        break;
                    }
                }
                //return substring upon reaching the end of original search string
                if(substring.Length == input.Length - i && substring.Length > result.Length) {

                    return substring.ToString();
                } 
            }

            return result;
        }
    }
}