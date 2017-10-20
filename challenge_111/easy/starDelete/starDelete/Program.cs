using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace starDelete {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string input1 = "adf*lp";
            string input2 = "a*o";
            string input3 = "*dech*";
            string input4 = "de**po";
            string input5 = "sa*n*ti";
            string input6 = "abc";
            string input7 = "*as";

            Console.WriteLine(input1 + " --> " + StarDelete(input1));
            Console.WriteLine(input2 + " --> " + StarDelete(input2));
            Console.WriteLine(input3 + " --> " + StarDelete(input3));
            Console.WriteLine(input4 + " --> " + StarDelete(input4));
            Console.WriteLine(input5 + " --> " + StarDelete(input5));
            Console.WriteLine(input6 + " --> " + StarDelete(input6));
            Console.WriteLine(input7 + " --> " + StarDelete(input7));
        }
        /*
         * remove asterisk and letters on its both sides in a string
         * @param {string} [input] - string to remove asterisks
         *
         * @return {string} [string with all asterisks removed]
         */
        public static string StarDelete(string input) {

            return Regex.Replace(input, @"[^*]?\*[^*]?", "");
        }
    }
}