using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace morseCodeTranslator {
    class Program {
        static void Main(string[] args) {

            //challenge input
            var translator = new MorseCodeTranslator();
            Console.WriteLine(translator.Translate("SOS (SOS)"));
            Console.WriteLine(translator.Translate("... --- ...  -.--.- ... --- ... -.--.-"));
        }
    }
}