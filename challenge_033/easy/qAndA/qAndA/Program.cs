using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace qAndA {
    class Program {
        static void Main(string[] args) {

            //challenge & bonus input
            var game = new QAGame("text.txt");
            game.Run();
        }
    }
}