using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace caesarCipher {
    class Program {
        static void Main(string[] args) {

            //challenge & bonus input
            Console.WriteLine(Encrypt("Daily Programmer", 6));
            Console.WriteLine(Decrypt("Jgore Vxumxgsskx", 6));
        }
        /// <summary>
        /// shift a given letter to another using a given key
        /// </summary>
        public static char Shift(char letter, int key) {

            int charCode = Char.ConvertToUtf32(letter.ToString(), 0);
            int baseCode = charCode < 97 ? 65 : 97;

            return Char.ConvertFromUtf32(baseCode + (charCode - baseCode + key) % 26)[0];
        }
        /// <summary>
        /// encrypt text using Caesar Cipher
        /// </summary>
        public static string Encrypt(string text, int key) {

            return Regex.Replace(text, "[A-Za-z]", match => Shift(match.Value[0], key).ToString());
        }
        /// <summary>
        /// decrypt text using Caesar Cipher
        /// </summary>
        public static string Decrypt(string text, int key) {

            return Encrypt(text, 26 - key);
        }
    }
}