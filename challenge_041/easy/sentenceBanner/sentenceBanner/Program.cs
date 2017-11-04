using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace sentenceBanner {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(GetBanner("So long and thanks for all the fish"));
            //bonus input
            Console.WriteLine(GetBanner("The cat needs more fish. Not enough fish available. Please catch more fish."));
        }
        /// <summary>
        /// wrap text to fit in maximum row length
        /// </summary>
        public static string[] FormatText(string sentence, int rowLength) { 
        
            var lines = new List<string>();
            var newLine = new StringBuilder();

            foreach(Match match in Regex.Matches(sentence, @"\S+")) {
            
                if(newLine.Length + match.Value.Length > rowLength) {

                    lines.Add(newLine.ToString().Trim());
                    newLine = new StringBuilder();
                }

                newLine.Append(" " + match.Value);
            }

            if(newLine.Length > 0) {

                lines.Add(newLine.ToString().Trim());
            }

            rowLength = lines.Max(line => line.Length);

            return lines.Select(line => "*  " + line.PadRight(rowLength, ' ') + "  *").ToArray();
        }
        /// <summary>
        /// wrap sentence inside of a banner
        /// </summary>
        public static string GetBanner(string sentence, int rowLength = 40) {

            string[] lines = FormatText(sentence, rowLength);
            string border = "".PadLeft(lines[0].Length, '*');
            string blank = "*" + "".PadLeft(lines[0].Length - 2, ' ') + "*";

            return string.Join("\n", new string[] {
            
                border, blank, string.Join("\n", lines), blank, border
            });
        }
    }
}