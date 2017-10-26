using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace morseCodeTranslator {
    class MorseCodeTranslator {

        private string _englishCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.?/-()";
        private string[] _internationalMorseCode = { 
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
            "-.--.-", //)
        };

        public Dictionary<char, string> MorseCode { get; private set; }
        public Dictionary<string, string> EnglishCharacters { get; private set; }

        public MorseCodeTranslator() {

            MorseCode = GetMorseTable();
            EnglishCharacters = GetEnglishTable();
        }
        /// <summary>
        /// populate morse code table
        /// </summary>
        /// <returns>morse code table</returns>
        public Dictionary<char, string> GetMorseTable() {

            var codeTable = new Dictionary<char, string>();

            for(int i = 0; i < _englishCharacters.Length; i++) {

                codeTable.Add(_englishCharacters[i], _internationalMorseCode[i]);
            }

            return codeTable;
        }
        /// <summary>
        /// populate english characters table
        /// </summary>
        /// <returns>english characters table</returns>
        public Dictionary<string, string> GetEnglishTable() { 
        
            var englishTable = new Dictionary<string, string>();

            for(int i = 0; i < _internationalMorseCode.Length - 2; i++) {

                englishTable.Add(_internationalMorseCode[i], _englishCharacters[i].ToString());
            }

            englishTable.Add(_internationalMorseCode.Last(), "()");

            return englishTable;
        }
        /// <summary>
        /// translate between morse code and English words
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public string Translate(string input) { 
        
            return Regex.IsMatch(input, @"\w") ? ToMorseCode(input) : ToEnglish(input);
        }
        /// <summary>
        /// translate English words to morse code
        /// </summary>
        /// <param name="input">English word to translate</param>
        /// <returns>morse code</returns>
        public string ToMorseCode(string input) {

            return Regex.Replace(input.ToUpper(), @"\S", match => {

                char key = match.Value[0];

                return MorseCode.ContainsKey(key) ? MorseCode[key] + " " : "";
            });
        }
        /// <summary>
        /// translate morse code to English words
        /// </summary>
        /// <param name="input">morse code to translate</param>
        /// <returns>English words</returns>
        public string ToEnglish(string input) {

            string englishWords = Regex.Replace(input, @"\S+\s?", match => {

                string key = match.Value.Trim();

                return EnglishCharacters.ContainsKey(key) ? EnglishCharacters[key] : "";
            });
            //handle parentheses
            return Regex.Replace(englishWords, @"\(\)[^\(\)]+\(\)", match => {

                return "(" + match.Value.Replace("()", "") + ")";
            });
        }
    }
}