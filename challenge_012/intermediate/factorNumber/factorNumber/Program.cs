using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using printPrimes;

namespace factorNumber {
    class Program {
        static void Main(string[] args) {

            var primeFinder = new PrimeFinder(new PrimalityTester());
            var factorer = new NumberFactorer(primeFinder);
            //challenge input
            int number = 12;
            Console.WriteLine(number + " = " + string.Join(" * ", factorer.Factor(number)));
            number = 14;
            Console.WriteLine(number + " = " + string.Join(" * ", factorer.Factor(number)));
            number = 20;
            Console.WriteLine(number + " = " + string.Join(" * ", factorer.Factor(number)));
        }
    }
}