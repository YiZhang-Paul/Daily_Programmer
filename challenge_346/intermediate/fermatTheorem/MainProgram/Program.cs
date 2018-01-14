using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;
using FermatPrimalityTesterClassLibrary;

namespace MainProgram {
    class Program {
        static void Main(string[] args) {

            var tester = new FermatPrimalityTester();

            //challenge input
            Console.WriteLine(tester.IsPrime(BigInteger.Parse("29497513910652490397"), 0.9));
            Console.WriteLine(tester.IsPrime(BigInteger.Parse("29497513910652490399"), 0.9));
            Console.WriteLine(tester.IsPrime(BigInteger.Parse("95647806479275528135733781266203904794419584591201"), 0.99));
            Console.WriteLine(tester.IsPrime(BigInteger.Parse("95647806479275528135733781266203904794419563064407"), 0.99));
            Console.WriteLine(tester.IsPrime(BigInteger.Parse("2367495770217142995264827948666809233066409497699870112003149352380375124855230064891220101264893169"), 0.999));
            Console.WriteLine(tester.IsPrime(BigInteger.Parse("2367495770217142995264827948666809233066409497699870112003149352380375124855230068487109373226251983"), 0.999));
        }
    }
}