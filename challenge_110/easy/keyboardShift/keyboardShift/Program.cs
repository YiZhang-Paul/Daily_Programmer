using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace keyboardShift {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string input1 = "Jr;;p ept;f";
            string input2 = "Lmiyj od ,u jrtp";

            Console.WriteLine(FixKeyboardShift(input1));
            Console.WriteLine(FixKeyboardShift(input2));
        }
        /*
         * convert broken keyboard input to original input
         * @param {string} [input] - input to fix
         *
         * @return {string} [fixed input]
         */
        public static string FixInput(string input) { 

            string toFix = "wertyuiop[sdfghjkl;xcvbnm,WERTYUIOP{SDFGHJKL:XCVBNM<";
            string fix = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

            if(!Regex.IsMatch(toFix, input)) {

                return input;
            }

            return fix[Regex.Match(toFix, input).Index].ToString();
        }
        /*
         * fix keyboard shift
         * @param {string} [shift] - keyboard shift to fix
         *
         * @return {string} [fixed keyboard shift]
         */
        public static string FixKeyboardShift(string shift) {

            return Regex.Replace(shift, @"[^\d\s]", match => FixInput(match.Value));
        }
    }
}