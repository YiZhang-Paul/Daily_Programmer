using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace wordUnscrambler {
    class Program {
        static void Main(string[] args) {

            var unscrambler = new Unscrambler();
            //challenge input
            Console.WriteLine("papel -> ");
            Console.WriteLine(string.Join("\n", unscrambler.Unscramble("papel")));
            Console.WriteLine("\ntulbn -> ");
            Console.WriteLine(string.Join("\n", unscrambler.Unscramble("tulbn")));
            Console.WriteLine("\nstutmensnir -> ");
            Console.WriteLine(string.Join("\n", unscrambler.Unscramble("stutmensnir")));
            Console.WriteLine("\nnrgseevtodi -> ");
            Console.WriteLine(string.Join("\n", unscrambler.Unscramble("nrgseevtodi")));
            Console.WriteLine("\ngdo -> ");
            Console.WriteLine(string.Join("\n", unscrambler.Unscramble("gdo")));
        }
    }
}