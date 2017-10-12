using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pangrams {
    class Program {
        static void Main(string[] args) {
            //default & challenge & bonus input
            string[] sentences = new string[] { 
                "The quick brown fox jumps over the lazy dog",
                "The quick brown fox jumps over the lazy dog.",
                "Pack my box with five dozen liquor jugs",
                "Saxophones quickly blew over my jazzy hair"
            };

            PangramChecker checker = new PangramChecker();

            foreach(string sentence in sentences) {
                Console.WriteLine(checker.IsPangram(sentence, new Dictionary<char,int>()));
            }
        }
    }
}
