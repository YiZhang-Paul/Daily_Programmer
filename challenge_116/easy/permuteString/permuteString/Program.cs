using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace permuteString {
    class Program {
        static void Main(string[] args) {

            //default & bonus input
            string input1 = "baz";
            string input2 = "daily";
            string input3 = "ab";
            //challenge & bonus input
            string input4 = "abbccc";

            Console.WriteLine(string.Join(" ", Permute(input1, new HashSet<string>())));
            Console.WriteLine(string.Join(" ", Permute(input2, new HashSet<string>())));
            Console.WriteLine(string.Join(" ", Permute(input3, new HashSet<string>())));
            Console.WriteLine(string.Join(" ", Permute(input4, new HashSet<string>())));
        }
        /*
         * get permutation of a string
         * @param {string} [input] - string to permute
         * @param {HashSet<string>} [collection] - collection of all permutations
         * @param {string} [curStr] - current string permutation
         *
         * @return {string[]} [all permutations]
         */
        public static string[] Permute(string input, HashSet<string> collection, string curStr = "") { 
        
            if(input.Length == 1) {
                //remove duplicates
                collection.Add(curStr + input);
                return null;
            }

            for(int i = 0; i < input.Length; i++) {

                Permute(input.Substring(0, i) + input.Substring(i + 1), collection, curStr + input[i]);
            }

            return collection.ToArray();
        }
    }
}