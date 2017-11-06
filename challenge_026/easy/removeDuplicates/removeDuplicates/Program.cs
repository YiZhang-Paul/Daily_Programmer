using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace removeDuplicates {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(string.Join(" ", RemoveDuplicate("balloons")));
            Console.WriteLine(string.Join(" ", RemoveDuplicate("ddaaiillyypprrooggrraammeerr")));
            Console.WriteLine(string.Join(" ", RemoveDuplicate("aabbccddeded")));
            Console.WriteLine(string.Join(" ", RemoveDuplicate("flabby aapples")));
        }
        /// <summary>
        /// remove duplicates in string
        /// </summary>
        public static string[] RemoveDuplicate(string word) {

            char letter = word[0];
            var original = new StringBuilder(letter.ToString());
            var duplicate = new StringBuilder();

            for(int i = 1; i < word.Length; i++) {

                bool hasDuplicate = word[i] == letter;
                (hasDuplicate ? duplicate : original).Append(word[i]);
                letter = hasDuplicate ? letter : word[i];
            }

            return new string[] { "\"" + original.ToString() + "\"", "\"" + duplicate.ToString() + "\"" };
        }
    }
}