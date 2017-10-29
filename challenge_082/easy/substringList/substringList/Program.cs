using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace substringList {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(string.Join("\n", GetSubstrings(5)));
            //bonus 1 input
            Console.WriteLine(GetTotalStrings(5, 500));
            Console.WriteLine(GetTotalStrings(500, 500));
        }
        /// <summary>
        /// calculate factorial of a number
        /// </summary>
        /// <param name="number">number for calculation</param>
        /// <returns>factorial of given number</returns>
        public static int Factorial(int number) {

            return number == 1 ? number : Factorial(number - 1) + number;
        }
        /// <summary>
        /// calculate total number of substrings 
        /// </summary>
        /// <param name="length">maximum length of substrings</param>
        /// <param name="alphabetSize">alphabet table size</param>
        /// <returns>total number of possible substrings</returns>
        public static int GetTotalStrings(int length, int alphabetSize) {

            return Factorial(Math.Min(length, alphabetSize));
        }
        /// <summary>
        /// create alphabet table
        /// </summary>
        /// <param name="size">table size</param>
        /// <returns>alphabet table</returns>
        public static string GetAlphabetTable(int size) {

            var table = new StringBuilder();

            for(int i = 0; i < size; i++) {

                table.Append(Char.ConvertFromUtf32(i % 26 + 97));
            }

            return table.ToString();
        }
        /// <summary>
        /// generate all substrings for a given maximum length
        /// </summary>
        /// <param name="length">maximum length of substrings</param>
        /// <param name="alphabetSize">alphabet table size</param>
        /// <returns>all substrings</returns>
        public static string[] GetSubstrings(int length, int alphabetSize = 26) {

            string alphabetTable = GetAlphabetTable(Math.Min(length, alphabetSize));
            var substrings = new List<string>(GetTotalStrings(length, alphabetSize));

            for(int i = 0; i < alphabetTable.Length; i++) {

                for(int j = 1; j <= alphabetTable.Length - i; j++) {

                    substrings.Add(alphabetTable.Substring(i, j));
                }
            }

            return substrings.ToArray();
        }
    }
}