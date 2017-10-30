using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace keyboardLocaleSimulator {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(KeyToChar('a', "1000"));
            Console.WriteLine(KeyToChar('a', "1100"));
            Console.WriteLine(KeyToChar('a', "1110"));
            Console.WriteLine(KeyToChar('a', "1101"));
            Console.WriteLine(KeyToChar('1', "0100"));
            Console.WriteLine(KeyToChar('7', "1100"));
            Console.WriteLine(KeyToChar('\\', "0100"));
            Console.WriteLine(KeyToChar('=', "1100"));
        }
        /// <summary>
        /// apply shift key to key press
        /// </summary>
        public static char ApplyShift(char keypress) { 
        
            string charString = keypress.ToString();
            
            if(Char.IsLetter(keypress)) {
                //toggle between upper/lower case
                return charString == charString.ToUpper() ? charString.ToLower()[0] : charString.ToUpper()[0];
            }

            string input = @"1234567890-=[]\;',./";
            string output = @"!@#$%^&*()_+{}|:""<>?";

            return output[input.IndexOf(charString)];
        }
        /// <summary>
        /// convert key press to output character
        /// </summary>
        /// <param name="modifiers">
        /// flags (0 : off, 1 : on) for modifier keys.
        /// from left to right: caps lock, shift, ctrl, alt
        /// </param>
        public static char KeyToChar(char keypress, string modifiers = "0000") { 
        
            if(modifiers[2] == '1' || modifiers[3] == '1') {
            
                return '\0';
            }
            //check caps lock
            if(modifiers[0] == '1' && Char.IsLetter(keypress)) {

                keypress = keypress.ToString().ToUpper()[0];
            }
            //apply shift key when applicable
            return modifiers[1] == '1' ? ApplyShift(keypress) : keypress; 
        }
    }
}