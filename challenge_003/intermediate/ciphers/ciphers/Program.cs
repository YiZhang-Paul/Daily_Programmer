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
            string toDecode = "Zhofrph#wr#flskhu#gdb$#Fuhdwh#d#surjudp#wkdw#fdq#wdnh#d#slhfh#ri#whaw#dqg#hqfubsw#lw#zlwk#dq#doskdehwlfdo#vxevwlwxwlrq#flskhu1#Wklv#fdq#ljqruh#zklwh#vsdfh/#qxpehuv/#dqg#vbperov1#iru#hawud#fuhglw/#pdnh#lw#hqfubsw#zklwhvsdfh/#qxpehuv/#dqg#vbperov$#iru#hawud#hawud#fuhglw/#ghfrgh#vrphrqh#hovhv#flskhu$";
            //challenge & bonus input
            Console.WriteLine(Encode(toEncode, 3) + "\n");
            Console.WriteLine(Decode(toDecode, 3));
        }

        private static bool IsUpperCase(char letter) {

            return letter == Char.ToUpper(letter);
        }

        private static char ShiftLetter(char letter, int key) {

            int baseCode = IsUpperCase(letter) ? 65 : 97;
            int charCode = Char.ConvertToUtf32(letter.ToString(), 0);

            return Char.ConvertFromUtf32(baseCode + (charCode - baseCode + key) % 26)[0];
        }

        private static char ShiftCharacter(char character, int key) { 
        
            int[] forbidCodes = new int[] { 65, 97, 128 };
            int[] validCodes = new int[] { 91, 123, 0 };
            int charCode = Char.ConvertToUtf32(character.ToString(), 0);

            for(int i = 0; i < 3; i++) {

                if(charCode < forbidCodes[i] && charCode + key >= forbidCodes[i]) {

                    key -= forbidCodes[i] - charCode;
                    charCode = validCodes[i];
                    i = -1;
                }
            }

            return Char.ConvertFromUtf32(charCode + key)[0];
        }

        private static string Encode(string text, int key) {

            return Regex.Replace(text, ".", match => {

                if(Char.IsLetter(match.Value[0])) {

                    return ShiftLetter(match.Value[0], key).ToString();
                }
                else {

                    return ShiftCharacter(match.Value[0], key).ToString();
                }
            });
        }

        private static string Decode(string text, int key) {

            return Regex.Replace(text, ".", match => {

                if(Char.IsLetter(match.Value[0])) {

                    return ShiftLetter(match.Value[0], 26 - key).ToString();
                }
                else {

                    return ShiftCharacter(match.Value[0], 76 - key).ToString();
                }
            });
        }
    }
}