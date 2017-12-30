using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace countWordsByStory {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(CountDescendingWordsByStory("book.txt")); ;
        }

        private static string ReadText(string fileName) {

            try {

                return File.ReadAllText(fileName);
            }
            catch(Exception exception) {

                Console.WriteLine("File not Found.");
                Console.WriteLine(exception.Message);
                throw exception;
            }
        }

        private static string[] GetTitles(string text) {

            string[] chapters = { 

                "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII" 
            };

            return Regex.Match(text, string.Join(@"\.[^\n]+\n\s*", chapters) + @"\.[^\n]+\n")
                        .Value
                        .Split('\r')
                        .Select(line => line.Trim().ToUpper())
                        .Where(line => line != "")
                        .ToArray();
        }

        private static string GetContent(string text) {

            string regex = @"ADVENTURE I\..+(?=End of the Project Gutenberg)";

            return Regex.Match(text, regex, RegexOptions.Singleline).Value;
        }

        private static Dictionary<string, string> GetStories(string content, string[] titles) { 

            var stories = new Dictionary<string, string>();

            for(int i = 0; i < titles.Length; i++) {

                string regex = @"(?<=" + titles[i] + ").+(?=" + (i == titles.Length - 1 ? "[^.]" : titles[i + 1]) + ")";
                stories[titles[i]] = Regex.Match(content, regex, RegexOptions.Singleline).Value;
            }

            return stories;
        }

        private static Dictionary<string, int> CountWordsByStory(Dictionary<string, string> stories) { 
        
            var counts = new Dictionary<string, int>();

            foreach(var pair in stories) {

                counts[pair.Key] = Regex.Matches(pair.Value.Trim(), @"[A-Za-z']+").Count;
            }

            return counts;
        }

        private static string CountDescendingWordsByStory(string fileName) {
        
            string text = ReadText(fileName);
            var stories = GetStories(GetContent(text),  GetTitles(text));

            return CountWordsByStory(stories).OrderByDescending(pair => pair.Value)
                                             .Aggregate("", (counts, pair) => {

                                                 return counts + pair.Key + "-> Word Count: " + pair.Value + "\n";
                                             });
        }
    }
}