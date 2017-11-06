using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using System.IO;

namespace palindromes {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(IsPalindrome("hannah"));
            Console.WriteLine(IsPalindrome("12321"));
            Console.WriteLine(IsPalindrome("123321"));
            Console.WriteLine(IsPalindrome("123421"));
            //bonus input
            Console.WriteLine(IsPalindrome(ReadFile("poem.txt")));
        }
        /// <summary>
        /// read file
        /// </summary>
        public static string ReadFile(string fileName) {

            try {

                return File.ReadAllText(fileName); 
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return "";
        }
        /// <summary>
        /// check if a text is palindromic
        /// </summary>
        public static bool IsPalindrome(string text) {

            text = Regex.Replace(text.ToLower(), @"\W", "");

            for(int i = 0; i < text.Length - 1 - i; i++) {

                if(text[i] != text[text.Length - 1 - i]) {
                
                    return false;
                }
            }

            return true;
        }
    }
}