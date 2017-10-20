using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace scientificNotationTranslator {
    class Program {
        static void Main(string[] args) {

            var generator = new NumberGenerator();
            Console.WriteLine(generator.GetRandom());
            Console.WriteLine(generator.GetRandomScientificNotation());
        }
    }
}