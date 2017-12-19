using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace musicalDice {
    class Program {
        static void Main(string[] args) {

            var game = new MozartDiceGame();
            Console.WriteLine(game.BuildComposition());
        }
    }
}