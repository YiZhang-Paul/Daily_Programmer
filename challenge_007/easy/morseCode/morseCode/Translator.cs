using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace morseCode {
    class Translator {

        private string[] _characters = {
        
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
            ",", ".", "?", "/", "-", "("                               
        };
        private string[] _morseCode = { 

            ".-",     //A
            "-...",   //B
            "-.-.",   //C
            "-..",    //D
            ".",      //E
            "..-.",   //F
            "--.",    //G
            "....",   //H
            "..",     //I
            ".---",   //J
            "-.-",    //K
            ".-..",   //L
            "--",     //M
            "-.",     //N
            "---",    //O
            ".--.",   //P
            "--.-",   //Q
            ".-.",    //R
            "...",    //S
            "-",      //T
            "..-",    //U
            "...-",   //V
            ".--",    //W
            "-..-",   //X
            "-.--",   //Y
            "--..",   //Z
            ".----",  //1
            "..---",  //2
            "...--",  //3
            "....-",  //4
            ".....",  //5
            "-....",  //6
            "--...",  //7
            "---..",  //8
            "----.",  //9
            "-----",  //0
            "--..--", //,
            ".-.-.-", //.
            "..--..", //?
            "-..-.",  ///
            "-....-", //-
            "-.--.-", //(
        };

        public Dictionary<string, string> EnglishTable { get; private set; }
        public Dictionary<string, string> CodeTable { get; private set; }

        public Translator() {

            EnglishTable = GetTable(_morseCode, _characters);
            CodeTable = GetTable(_characters, _morseCode);
        }
        /// <summary>
        /// create translate table
        /// </summary>
        public Dictionary<string, string> GetTable(string[] keys, string[] values) { 
        
            var table = new Dictionary<string, string>();

            for(int i = 0; i < keys.Length; i++) {

                table.Add(keys[i], values[i]);
            }

            return table;
        }
        /// <summary>
        /// translate morse code to English
        /// </summary>
        public string ToEnglish(string code) {

            var words = code.Split('/')
                            .Select(word => word.Trim().Split(' '))
                            .Select(word => word.Select(character => EnglishTable[character]))
                            .Select(word => string.Join("", word));

            return Regex.Replace(string.Join(" ", words), @"(?<=\([^\(]*)\(", ")");
        }
        /// <summary>
        /// translate English to morse code
        /// </summary>
        public string ToMorseCode(string english) {

            english = Regex.Replace(english, @"\)", "(");

            return Regex.Replace(english, ".", match => match.Value == " " ? "/ " : CodeTable[match.Value] + " ");
        }
    }
}