using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace diceRoller {
    class Program {
        static void Main(string[] args) {

            var dice = new Dice();

            //challenge input
            Console.WriteLine(dice.ProcessNotation("d8"));
            Console.WriteLine(dice.ProcessNotation("10d6-2"));
            Console.WriteLine(dice.ProcessNotation("d20+7"));
        }
    }
}