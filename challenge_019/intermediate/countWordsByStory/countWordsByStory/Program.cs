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

            string text = ReadText("book.txt");
            string[] titles = GetTitles(text);
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
                        .Select(line => line.Trim())
                        .Where(line => line != "")
                        .ToArray();
        }
    }
}