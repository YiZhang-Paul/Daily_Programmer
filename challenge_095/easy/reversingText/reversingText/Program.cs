using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace reversingText {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string name = "thetyger.txt";
            ReverseText(name, "output.txt");
        }
        /// <summary>
        /// read all lines of text file
        /// </summary>
        /// <param name="name">text file name</param>
        /// <returns>all lines of text file</returns>
        public static string[] ReadFile(string name) {

            try {

                string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, name);

                return File.ReadAllLines(path);
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return new string[0];
        }
        /// <summary>
        /// reverse text in a file and output reversed text to specified file
        /// </summary>
        /// <param name="name">text file name</param>
        /// <param name="output">output text file name</param>
        public static void ReverseText(string name, string output) {

            var reversed = new StringBuilder();
            //reverse all lines and all words on each line
            foreach(string line in ReadFile(name).Reverse()) {

                var words = Regex.Matches(line, @"\S+").Cast<Match>().Select(match => match.Value);
                reversed.Append(string.Join(" ", words.Reverse()) + "\r\n");
            }
            //write reversed text to file
            WriteFile(output, reversed.ToString());
        }
        /// <summary>
        /// write output to text file
        /// </summary>
        /// <param name="name">output file name</param>
        /// <param name="output">output to write</param>
        public static void WriteFile(string name, string output) {

            try {

                string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, name);
                File.WriteAllText(path, output);
                Console.WriteLine("Output successful. Output:\n" + output);
            }
            catch(Exception exception) {

                Console.WriteLine("Failed to write output text.");
                Console.WriteLine(exception.Message);
            }
        }
    }
}