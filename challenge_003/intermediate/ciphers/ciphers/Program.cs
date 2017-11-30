using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace ciphers {
    class Program {
        static void Main(string[] args) {

            string toEncode = "Welcome to cipher day! Create a program that can take a piece of text and encrypt it with an alphabetical substitution cipher. This can ignore white space, numbers, and symbols. for extra credit, make it encrypt whitespace, numbers, and symbols! for extra extra credit, decode someone elses cipher!";
            string toDecode = "Zhofrph wr flskhu gdb! Fuhdwh d surjudp wkdw fdq wdnh d slhfh ri whaw dqg hqfubsw lw zlwk dq doskdehwlfdo vxevwlwxwlrq flskhu. Wklv fdq ljqruh zklwh vsdfh, qxpehuv, dqg vbperov. iru hawud fuhglw, pdnh lw hqfubsw zklwhvsdfh, qxpehuv, dqg vbperov! iru hawud hawud fuhglw, ghfrgh vrphrqh hovhv flskhu!";
            //challenge input
            Console.WriteLine(Encode(toEncode, 3) + "\n");
            Console.WriteLine(Decode(toDecode, 3));
        }

        private static bool IsUpperCase(char letter) {

            return letter == Char.ToUpper(letter);
        }

        private static char EncodeLetter(char letter, int key) {

            int baseCode = IsUpperCase(letter) ? 65 : 97;
            int charCode = Char.ConvertToUtf32(letter.ToString(), 0);

            return Char.ConvertFromUtf32(baseCode + (charCode - baseCode + key) % 26)[0];
        }

        private static string Encode(string text, int key) {

            return Regex.Replace(text, "[a-zA-Z]", match => EncodeLetter(match.Value[0], key).ToString());
        }

        private static string Decode(string text, int key) {

            return Encode(text, 26 - key);
        }
    }
}