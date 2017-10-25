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
            display.DisplayNumber(5362);
            display.DisplayNumber(5362, 3);
            display.DisplayNumber(5362, 4);
            display.DisplayNumber(5362, 5);
            display.DisplayNumber(4097);
            display.DisplayNumber(4097, 3);
            display.DisplayNumber(4097, 4);
            display.DisplayNumber(4097, 5);
        }
    }
}