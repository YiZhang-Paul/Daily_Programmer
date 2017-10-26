using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace morseCodeTranslator {
    class MorseCodeTranslator {

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

        private string _englishCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.?/-()";

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
    }
}