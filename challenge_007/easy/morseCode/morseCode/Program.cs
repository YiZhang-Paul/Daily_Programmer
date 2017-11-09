using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace morseCode {
    class Program {
        static void Main(string[] args) {

            var translator = new Translator();

            //challenge & bonus input
            Console.WriteLine(translator.ToEnglish(".... . .-.. .-.. --- / -.. .- .. .-.. -.-- / -.--.- .--. .-. --- --. .-. .- -- -- . .-. -.--.- / --. --- --- -.. / .-.. ..- -.-. -.- / --- -. / - .... . / -.-. .... .- .-.. .-.. . -. --. . ... / - --- -.. .- -.--"));
            Console.WriteLine(translator.ToMorseCode("HELLO DAILY (PROGRAMMER) GOOD LUCK ON THE CHALLENGES TODAY"));
        }
    }
}