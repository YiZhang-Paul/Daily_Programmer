using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using System.IO;

namespace randomTalker {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string input1 = "Your program will be responsible for analyzing a small chunk of text, the text of this entire dailyprogrammer description. Your task is to output the distinct words in this description, from highest to lowest count with the number of occurrences for each. Punctuation will be considered as separate words where they are not a part of the word. The following will be considered their own words: \" . , : ; ! ? ( ) [ ] { }For anything else, consider it as part of a word. Extra Credit: Process the text of the ebook Metamorphosis, by Franz Kafka and determine the top 10 most frequently used words and their counts. (This will help for part 2)";
            Console.WriteLine(AnalyzeText(input1));
            //bonus input
            string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "book.txt");
            string input2 = "";

            try {

                input2 = File.ReadAllText(path);
                Console.WriteLine(AnalyzeText(input2));
            }
            catch(Exception exception) {
            
                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }
        }
        /*
         * retrieve all words from text
         * @param {string} [text] - text to extract words
         *
         * @return {string[]} [all words]
         */
        public static string[] GetWords(string text) {

            var matches = Regex.Matches(text.ToLower(), @"["".,:;!?\(\)\[\]\{\}]|[^"".,:;!?\(\)\[\]\{\}\s]+");

            return matches.Cast<Match>().Select(match => match.Value).ToArray();
        }
        /*
         * analyze occurrences of each word in text
         * @param {string} [text] - text to analyze
         *
         * @return {string} [occurrences of each word]
         */
        public static string AnalyzeText(string text) {

            var counter = new Dictionary<string, int>();
            //count occurrences of each word
            foreach(string word in GetWords(text)) {

                counter[word] = counter.ContainsKey(word) ? counter[word] + 1 : 1;
            }

            var result = new StringBuilder();
            //display word and number of occurrence in descending order
            foreach(var pair in counter.OrderByDescending(pair => pair.Value)) {

                result.Append(pair.Key + " : " + pair.Value + "times\n");
            }

            return result.ToString();
        }
    }
}