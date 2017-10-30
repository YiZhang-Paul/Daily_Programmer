using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace titleCase {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string input1 = "the quick brown fox jumps over the lazy dog";
            string[] exception1 = new string[] { "jumps", "the", "over" };
            string input2 = "THE vitamins ARE IN my fresh CALIFORNIA raisins";
            string[] exception2 = new string[] { "are", "is", "in", "your", "my" };

            Console.WriteLine(ToTitleCase(input1, exception1));
            Console.WriteLine(ToTitleCase(input2, exception2));
        }
        /// <summary>
        /// transform a string into title case
        /// </summary>
        /// <param name="input">input string to transform</param>
        /// <param name="exception">words not to be capitalized</param>
        public static string ToTitleCase(string input, string[] exception) {

            var allExceptions = new HashSet<string>(exception);
            string[] words = input.ToLower().Split(' ');

            for(int i = 0; i < words.Length; i++) {
                //capitalize first word and all other words that are not exceptions
                if(i == 0 || !allExceptions.Contains(words[i])) {

                    words[i] = words[i][0].ToString().ToUpper() + words[i].Substring(1).ToLower();
                }
            }

            return string.Join(" ", words);
        }
    }
}