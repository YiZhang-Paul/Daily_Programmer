using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace searchingTextAdventure {
    class Program {
        static void Main(string[] args) {

            var game = new TextSearchGame(10, 10);
            game.Run();
        }
    }
}