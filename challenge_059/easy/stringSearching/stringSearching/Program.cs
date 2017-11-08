using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace stringSearching {
    class Program {
        static void Main(string[] args) {

            Console.WriteLine(string.Join(" ", GetPrefixTable("abcdabca")));
            Console.WriteLine(string.Join(" ", GetPrefixTable("aabaabaaa")));
        }
        /// <summary>
        /// build proper prefix table for a given search pattern
        /// </summary>
        public static int[] GetPrefixTable(string pattern) { 
        
            int[] prefix = new int[pattern.Length];

            for(int k = 1, j = 0, i = 1; k < pattern.Length; k++) {

                while(j != 0 && pattern[j] != pattern[i]) {

                    j = prefix[j - 1];
                }

                if(pattern[j] == pattern[i]) {

                    prefix[k] = j + 1;
                    j++;
                }

                i++;
            }

            return prefix;
        }
    }
}