using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace stringTypeChecking {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string input1 = "123";
            string input2 = "+123";
            string input3 = "-123";
            string input4 = "0";
            string input5 = "123.456";
            string input6 = "20-11-2012";
            string input7 = "Hello, World!";

            Console.WriteLine(GetType(input1));
            Console.WriteLine(GetType(input2));
            Console.WriteLine(GetType(input3));
            Console.WriteLine(GetType(input4));
            Console.WriteLine(GetType(input5));
            Console.WriteLine(GetType(input6));
            Console.WriteLine(GetType(input7));
        }
        /*
         * check string type
         * @param {string} [input] - input string to check
         *
         * @return {string} [type of string]
         */
        public static string GetType(string input) { 
        
            if(Regex.IsMatch(input, @"^[+-]?\d+$")) {

                return "int";
            }
            else if(Regex.IsMatch(input, @"^[+-]?\d*\.?\d+$")) {

                return "float";
            }
            else if(Regex.IsMatch(input, @"^\d{2}-\d{2}-\d{4}$")) {

                input = string.Join("-", input.Split('-').Reverse());
                DateTime date;

                return DateTime.TryParse(input, out date) ? "date" : "text";
            }
            else {

                return "text";
            }
        }
    }
}