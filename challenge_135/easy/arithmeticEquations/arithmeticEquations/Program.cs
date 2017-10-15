using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace arithmeticEquations {
    class Program {
        static void Main(string[] args) {
            ArithmeticGame game = new ArithmeticGame();
            game.StartGame(0, 10);
        }
    }
}