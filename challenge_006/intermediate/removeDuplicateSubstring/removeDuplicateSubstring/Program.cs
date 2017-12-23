using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace removeDuplicateSubstring {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(RemoveDuplicate("aaajtestBlaBlatestBlaBla"));
            Console.WriteLine(RemoveDuplicate("aaatestBlaBlatestBlaBla"));
            Console.WriteLine(RemoveDuplicate("aaathisBlaBlathisBlaBla"));
            Console.WriteLine(RemoveDuplicate("aaathatBlaBlathatBlaBla"));
            Console.WriteLine(RemoveDuplicate("aaagoodBlaBlagoodBlaBla"));
            Console.WriteLine(RemoveDuplicate("aaagood1BlaBla123good1BlaBla123"));
        }

        private static string FindDuplicatePrefix(string input) {

            string prefix = "";

            if(input.Length < 2) {

                return "";
            }

            for(int i = 2; i <= input.Length - i; i++) {

                string newPrefix = input.Substring(0, i);
                string suffix = input.Substring(i);

                if(!Regex.IsMatch(suffix, newPrefix)) {

                    return prefix;
                }

                prefix = newPrefix;
            }

            return prefix;
        }

        private static string RemoveDuplicate(string input) {

            var result = new StringBuilder();

            while(input.Length > 0) {

                string duplicate = FindDuplicatePrefix(input);

                if(duplicate == "") {
                    //move to next character
                    result.Append(input[0]);
                    input = input.Substring(1);
                    continue;
                }
                //remove duplicates
                result.Append(duplicate);
                input = Regex.Replace(input.Substring(duplicate.Length), duplicate, "");
            }

            return result.ToString();
        }
    }
}