using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace mostCommonWords {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(GetCommonWords("text.txt", 5));
        }
        /// <summary>
        /// retrieve text
        /// </summary>
        public static string GetText(string fileName) {

            try {

                return File.ReadAllText(fileName);
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return "";
        }
        /// <summary>
        /// count occurrences of every word in the text
        /// </summary>
        public static Dictionary<string, int> CountWords(string fileName) {

            var counter = new Dictionary<string, int>();
            
            foreach(Match match in Regex.Matches(GetText(fileName), @"\w+")) {

                string word = match.Value.ToLower();
                counter[word] = counter.ContainsKey(word) ? counter[word] + 1 : 1;
            }

            return counter;
        }
        /// <summary>
        /// retrieve top common words in text
        /// </summary>
        /// <param name="total">total number of top common words to display</param>
        public static string GetCommonWords(string fileName, int total) { 
        
            var result = new StringBuilder();
            var commonWords = CountWords(fileName).OrderByDescending(pair => pair.Value);

            foreach(var pair in commonWords.Take(total)) {

                result.Append(pair.Key + " : " + pair.Value + ";\n");
            }

            return result.ToString();
        }
    }
}