using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace upsideUpNumber {
    class Program {
        static void Main(string[] args) {

            var watch = new Stopwatch();
            var rotator = new NumberRotator();
            //challenge input
            watch.Start();
            var finder = new UpsideUpNumberFinder(rotator);
            Console.WriteLine(finder.NextUpsideUpNumber(689));
            Console.WriteLine(finder.NextUpsideUpNumber(1961));
            Console.WriteLine(finder.CountUpsideUpNumbersInRange(10000));
            watch.Stop();
            Console.WriteLine("Time Used: " + watch.ElapsedMilliseconds + "ms");

            watch.Restart();
            var efficientFinder = new EfficientUpsideUpNumberFinder(rotator);
            Console.WriteLine(efficientFinder.NextUpsideUpNumber(689));
            Console.WriteLine(efficientFinder.NextUpsideUpNumber(1961));
            Console.WriteLine(efficientFinder.CountUpsideUpNumbersInRange(10000));
            watch.Stop();
            Console.WriteLine("Time Used: " + watch.ElapsedMilliseconds + "ms");
        }
    }
}