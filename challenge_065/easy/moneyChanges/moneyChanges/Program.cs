using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moneyChanges {
    class Program {
        static void Main(string[] args) {

            var calculator = new ChangeCalculator();
            
            //challenge input
            Console.WriteLine(calculator.GetChange(12.333m));
        }
    }
}