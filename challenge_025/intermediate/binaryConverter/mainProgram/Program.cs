using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using binaryConverterClassLibrary;

namespace mainProgram {
    class Program {
        static void Main(string[] args) {

            //challenge input
            var converter = new BinaryConverter();
            Console.WriteLine(converter.ToBinary(156));
        }
    }
}