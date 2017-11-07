using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace removeDuplicate {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(RemoveDuplicate("Daily Programmer", "aeiou "));
        }
        /// <summary>
        /// remove characters in the first string that also appear in second string
        /// </summary>
        public static string RemoveDuplicate(string string1, string string2) {

            var duplicate = new HashSet<char>(string2);
            var output = new StringBuilder();

            foreach(char letter in string1) {
            
                if(!duplicate.Contains(letter)) {
                
                    output.Append(letter);
                }
            }

            return output.ToString();
        }
    }
}