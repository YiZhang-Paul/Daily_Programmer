using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace numberDisplay {
    class Program {
        static void Main(string[] args) {

            //challenge & bonus input
            var display = new NumberDisplay();
            //display.DisplayNumber(5362);
            //display.DisplayNumber(5362, 3);
            //display.DisplayNumber(5362, 4);
            //display.DisplayNumber(5362, 5);
            display.DisplayDigit(0, 2);
            display.DisplayDigit(1, 2);
            display.DisplayDigit(2, 2);
            display.DisplayDigit(3, 2);
            display.DisplayDigit(4, 2);
            display.DisplayDigit(5, 2);
            display.DisplayDigit(6, 2);
            display.DisplayDigit(7, 2);
            display.DisplayDigit(8, 2);
            display.DisplayDigit(9, 2);
        }
    }
}