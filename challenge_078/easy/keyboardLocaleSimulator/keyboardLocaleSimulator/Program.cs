using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace keyboardLocaleSimulator {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(KeyToChar('a', "c"));
            Console.WriteLine(KeyToChar('a', "cs"));
            Console.WriteLine(KeyToChar('a', "cst"));
            Console.WriteLine(KeyToChar('a', "csa"));
            Console.WriteLine(KeyToChar('1', "s"));
            Console.WriteLine(KeyToChar('7', "cs"));
            Console.WriteLine(KeyToChar('\\', "s"));
            Console.WriteLine(KeyToChar('=', "cs"));
            //bonus input
            Console.WriteLine(ApplyKeyPress("^sm^Sy e-mail address ^s9^Sto send the ^s444^S to^s0^S is ^cfake^s2^Sgmail.com^C"));
        }
        /// <summary>
        /// apply caps lock to key press
        /// </summary>
        public static char ApplyCapsLock(char key) {

            return key.ToString().ToUpper()[0];
        }
        /// <summary>
        /// apply shift key to key press
        /// </summary>
        public static char ApplyShiftKey(char key) {

            string character = key.ToString();

            if(Char.IsLetter(key)) {
                //toggle between upper/lower case
                return character == character.ToUpper() ? character.ToLower()[0] : character.ToUpper()[0]; 
            }

            string input = @"1234567890-=[]\;',./";
            string output = @"!@#$%^&*()_+{}|:""<>?";

            return output[input.IndexOf(character)];
        }
        /// <summary>
        /// convert key press to output character
        /// </summary>
        /// <param name="modifiers">flags for modifier keys: caps lock (c), shift (s), ctrl (t), alt (a)</param>
        public static char KeyToChar(char key, string modifiers = "") { 
        
            if(modifiers.Contains('t') || modifiers.Contains('a')) {

                return '\0';
            }
            //apply caps lock and shift key when applicable
            key = modifiers.Contains('c') ? ApplyCapsLock(key) : key;
            key = modifiers.Contains('s') ? ApplyShiftKey(key) : key;

            return key;
        }
        /// <summary>
        /// apply modifier keys to all key press
        /// </summary>
        public static string ApplyKeyPress(string input) { 
        
            foreach(string modifier in new string[] { "S", "C", "T", "A" }) {

                string pattern = @"\^" + modifier.ToLower() + @"([^^]|\^(?!" + modifier + @"))+\^" + modifier;
                //capture modifier key groups
                input = Regex.Replace(input, pattern, match => {

                    return Regex.Replace(match.Value, @"(?<!\^)\w", otherMatch => {
                        //apply modifier keys
                        return KeyToChar(otherMatch.Value[0], match.Value[1].ToString()).ToString();
                    });
                });
            }

            return Regex.Replace(input, @"\^\w", "");
        }
    }
}