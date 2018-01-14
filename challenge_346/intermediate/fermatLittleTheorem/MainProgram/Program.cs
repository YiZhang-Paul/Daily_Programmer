using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;
using PrimalityTesterClassLibrary;

namespace MainProgram {
    class Program {
        static void Main(string[] args) {

            var basicTester = new PrimalityTester();

            //challenge input
            var fermatTester = new FermatPrimalityTester(basicTester);
            Console.WriteLine(fermatTester.IsPrime(BigInteger.Parse("29497513910652490397"), 0.9));
            Console.WriteLine(fermatTester.IsPrime(BigInteger.Parse("29497513910652490399"), 0.9));
            Console.WriteLine(fermatTester.IsPrime(BigInteger.Parse("95647806479275528135733781266203904794419584591201"), 0.99));
            Console.WriteLine(fermatTester.IsPrime(BigInteger.Parse("95647806479275528135733781266203904794419563064407"), 0.99));
            Console.WriteLine(fermatTester.IsPrime(BigInteger.Parse("2367495770217142995264827948666809233066409497699870112003149352380375124855230064891220101264893169"), 0.999));
            Console.WriteLine(fermatTester.IsPrime(BigInteger.Parse("2367495770217142995264827948666809233066409497699870112003149352380375124855230068487109373226251983"), 0.999) + "\n");

            //bonus input
            var millerRabinTester = new MillerRabinPrimalityTester(basicTester, "testBase.txt");
            Console.WriteLine(millerRabinTester.IsPrime(BigInteger.Parse("29497513910652490397")));
            Console.WriteLine(millerRabinTester.IsPrime(BigInteger.Parse("29497513910652490399")));
            Console.WriteLine(millerRabinTester.IsPrime(BigInteger.Parse("95647806479275528135733781266203904794419584591201")));
            Console.WriteLine(millerRabinTester.IsPrime(BigInteger.Parse("95647806479275528135733781266203904794419563064407")));
            Console.WriteLine(millerRabinTester.IsPrime(BigInteger.Parse("2367495770217142995264827948666809233066409497699870112003149352380375124855230064891220101264893169")));
            Console.WriteLine(millerRabinTester.IsPrime(BigInteger.Parse("2367495770217142995264827948666809233066409497699870112003149352380375124855230068487109373226251983")));
            Console.WriteLine(millerRabinTester.IsPrime(BigInteger.Parse("2887")));
            Console.WriteLine(millerRabinTester.IsPrime(BigInteger.Parse("2821")));
        }
    }
}