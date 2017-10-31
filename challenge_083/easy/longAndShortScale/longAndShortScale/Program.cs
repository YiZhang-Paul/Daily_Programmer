using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace longAndShortScale {
    class Program {
        static void Main(string[] args) {

            var translator = new NumberTranslator();

            //challenge & bonus input
            Console.WriteLine(translator.Translate(1234567891111));
        }
    }
}