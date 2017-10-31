using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reversePolishNotation {
    class Program {
        static void Main(string[] args) {

            var calculator = new Calculator();
            
            //challenge input
            Console.WriteLine(calculator.Calculate("3 4 * 6 2 - +"));
            Console.WriteLine(calculator.Calculate("3 4 / 6 2 * +"));
            //bonus input
            Console.WriteLine(calculator.Calculate("3 4 ^"));
            Console.WriteLine(calculator.Calculate("3 4 ^ 5 / 3 4 - +"));
        }
    }
}