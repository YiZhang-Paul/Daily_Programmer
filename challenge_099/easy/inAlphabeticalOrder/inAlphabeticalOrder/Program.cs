using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace inAlphabeticalOrder {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(WordsInOrder(GetList()).Length);
        }
        /*
         * retrieve word list
         * @param {string} [name] - word list file name
         *
         * @return {string[]} [word list]
         */
        public static string[] GetList(string name = "wordList.txt") {

            string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, name);

            try {

                return File.ReadAllLines(path);
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return null;
        }
        /*
         * check if letters in a word are in alphabetical order
         * @param {string} [word] - word to check
         *
         * @return {bool} [test result]
         */
        public static bool IsInOrder(string word) {

            string pattern = "^a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*$";

            return Regex.IsMatch(word, pattern, RegexOptions.IgnoreCase);
        }
        /*
         * find all words with letters in alphabetical order
         * @param {string[]} [list] - word list
         *
         * @return {string[]} [all words with letters in alphabetical order]
         */
        public static string[] WordsInOrder(string[] list) {

            return list.Where(word => IsInOrder(word)).ToArray();
        }
    }
}