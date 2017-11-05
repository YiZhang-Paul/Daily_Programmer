using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace countLines {
    class Program {
        static void Main(string[] args) {

            //challenge & bonus input
            Console.WriteLine(LineAndWordCount("text.txt"));
        }
        /// <summary>
        /// get line count and word count of a file
        /// </summary>
        public static string LineAndWordCount(string fileName) {

            var result = new StringBuilder();

            try {

                var lines = File.ReadAllLines(fileName);

                return result.Append("Total Lines: " + lines.Count() + "\n")
                             .Append("Total Words: " + Regex.Matches(string.Join(" ", lines), @"\S+").Count)
                             .ToString();
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return result.ToString();
        }
    }
}