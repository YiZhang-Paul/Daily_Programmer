using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace enumerateMorseCode {
    class Program {
        static void Main(string[] args) {

            var watch = new Stopwatch();
            var generator = new MorseCodeGenerator();

            //default input
            string[] codeSet1 = generator.GetMorseCodes(5);
            Console.WriteLine("Total Codes: " + codeSet1.Length + ";\n" + string.Join(" ", codeSet1));
            //challenge input
            string[] codeSet2 = generator.GetMorseCodes(10);
            Console.WriteLine("Total Codes: " + codeSet2.Length + ";\n" + string.Join(" ", codeSet2));
            //bonus input -> average time: ~18000ms (~1.8 seconds)
            watch.Start();
            string[] codeSet3 = generator.GetMorseCodes(35);
            watch.Stop();
            Console.WriteLine("Total Codes: " + codeSet3.Length + ";\nTotal Time: " + watch.ElapsedMilliseconds + "ms");
        }  
    }
}