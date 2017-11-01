using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace emirp {
    class Program {
        static void Main(string[] args) {

            var generator = new EmirpGenerator();

            //challenge input
            Console.WriteLine(string.Join("\n", generator.GetEmirp(100)) + "\n");
            Console.WriteLine(string.Join("\n", generator.GetEmirp(1000)) + "\n");
            Console.WriteLine(string.Join("\n", generator.GetEmirp(1000000)));
        }
    }
}