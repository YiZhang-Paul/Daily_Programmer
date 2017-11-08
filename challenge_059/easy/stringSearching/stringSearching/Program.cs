using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace stringSearching {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine("String Found at Index " + Search("Double, double, toil and trouble", "il an"));
            Console.WriteLine("String Found at Index " + Search("abxabcabcaby", "abcaby"));
        }
        /// <summary>
        /// build proper prefix table for a given search pattern
        /// </summary>
        public static int[] GetPrefixTable(string pattern) { 
        
            int[] prefix = new int[pattern.Length];

            for(int i = 1, j = 0, k = 1; i < pattern.Length; i++) {

                while(j != 0 && pattern[j] != pattern[k]) {
                
                    j = prefix[j - 1];
                }

                if(pattern[j] == pattern[k]) {

                    prefix[i] = j + 1;
                    j++;
                }

                k++;
            }

            return prefix;
        }
        /// <summary>
        /// search for pattern in a given string
        /// </summary>
        public static int Search(string text, string pattern) {

            int[] prefix = GetPrefixTable(pattern);

            for(int i = 0, j = 0; i < text.Length; i++) {

                if(text[i] != pattern[j]) {

                    i -= j == 0 ? 0 : 1;
                    j = prefix[Math.Max(0, j - 1)];
                }
                else if(++j == prefix.Length) {
                
                    return i - (j - 1);
                }
            }

            return -1;
        }
    }
}