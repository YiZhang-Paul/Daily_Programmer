using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mcNuggetNumbers {
    class Program {
        static void Main(string[] args) {

            //challenge input
            var finder = new McNuggetNumberFinder();
            Console.WriteLine(string.Join(", ", finder.FindNonMcNuggetNumbers(100)));
        }
    }
}