using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace allDecodings {
    class Program {
        static void Main(string[] args) {
        
            //challenge input
            var decoder = new Decoder();
            Console.WriteLine(string.Join("\n", decoder.GetAllDecoding("123")));
        }
    }
}