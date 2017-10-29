using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace substringList {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(string.Join("\n", GetSubstrings(5)) + "\n");
            //bonus 1 input
            Console.WriteLine(GetTotalStrings(5, 500) + "\n");
            Console.WriteLine(GetTotalStrings(500, 500) + "\n");
            Console.WriteLine(GetTotalStrings(4, 5) + "\n");
            //bonus 2 input
            Console.WriteLine(string.Join("\n", GetSubstrings(4, "hello")) + "\n");
            Console.WriteLine(string.Join("\n", GetSubstrings(5, "hello")));
        }
        /// <summary>
        /// calculate factorial of a given number
        /// </summary>
        public static int Factorial(int number) {

            return number == 1 ? number : number + Factorial(number - 1);
        }
        /// <summary>
        /// calculate total number of possible substrings
        /// </summary>
        /// <param name="length">maiximum substring length</param>
        /// <param name="alphabetSize">alphabet table size</param>
        public static int GetTotalStrings(int length, int alphabetSize) {

            return Factorial(Math.Min(length, alphabetSize));
        }
        /// <summary>
        /// generate alphabet table
        /// </summary>
        /// <param name="size">alphabet table size</param>
        public static string GetAlphabetTable(int size) {

            var table = new StringBuilder();

            for(int i = 0; i < size; i++) {

                table.Append(Char.ConvertFromUtf32(i % 26 + 97));
            }

            return table.ToString();
        }
        /// <summary>
        /// generate all substrings for a given maximum substring length
        /// </summary>
        /// <param name="length">maiximum substring length</param>
        /// <param name="alphabetSize">alphabet table size</param>
        public static string[] GetSubstrings(int length, int alphabetSize = 26) {

            string alphabets = GetAlphabetTable(Math.Min(length, alphabetSize));
            var substrings = new List<string>(GetTotalStrings(length, alphabetSize));

            for(int i = 0; i < alphabets.Length; i++) {

                for(int j = 1; j <= alphabets.Length - i; j++) {

                    substrings.Add(alphabets.Substring(i, j));
                }
            }

            return substrings.ToArray();
        }
        /// <summary>
        /// generate all unique substrings for a given string input
        /// </summary>
        /// <param name="length">maiximum substring length</param>
        /// <param name="input">input string</param>
        public static string[] GetSubstrings(int length, string input) {

            string alphabets = input.Substring(0, Math.Min(input.Length, length));
            var substrings = new HashSet<string>();

            for(int i = 0; i < alphabets.Length; i++) {

                for(int j = 1; j <= alphabets.Length - i; j++) {

                    substrings.Add(alphabets.Substring(i, j));
                }
            }

            return substrings.ToArray();
        }
    }
}