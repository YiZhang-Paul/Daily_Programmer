using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;

namespace walkaroundRasterizer {
    class Program {
        static void Main(string[] args) {

            //challenge input
            var rasterizer = new Rasterizer();
            rasterizer.Rasterize(5, 5, "PESPESPESPESPNNNNPWSPWSPWSPWSP");
            //bonus input
            var derasterizer = new Derasterizer();
            string result = derasterizer.Derasterize("testRasterizer.png", 5, 5);
            Console.WriteLine(result);
            //test bonus
            rasterizer.Rasterize(5, 5, result, "testDerasterizer.png");
        }
    }
}