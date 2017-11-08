using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace roulette {
    class Program {
        static void Main(string[] args) {

            var roulette = new Roulette();

            //challenge input
            Console.WriteLine(roulette.PlayGame(1.2m, "six line", "31-32-33-34-35-36"));
        }
    }
}