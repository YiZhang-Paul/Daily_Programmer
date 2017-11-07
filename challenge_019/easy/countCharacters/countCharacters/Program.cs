using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace countCharacters {
    class Program {
        static void Main(string[] args) {

            string book = GetText("text.txt");

            //challenge input
            Console.WriteLine(CountCharacters(GetContent(book)));
        }
        /// <summary>
        /// retrieve text from file
        /// </summary>
        public static string GetText(string fileName) {

            try {

                return File.ReadAllText(fileName);
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return null;
        }
        /// <summary>
        /// retrieve book content
        /// </summary>
        public static string GetContent(string text) {

            string begin = "ADVENTURE I. A SCANDAL IN BOHEMIA";
            string end = "End of the Project Gutenberg";

            return Regex.Match(text, @"(?<=" + begin + ")(.|\n)+(?=" + end + ")").Value;
        }
        /// <summary>
        /// count total number of alphanumeric characters
        /// </summary>
        public static int CountCharacters(string text) {

            return Regex.Matches(text, "[A-Za-z0-9]").Count;
        }
    }
}