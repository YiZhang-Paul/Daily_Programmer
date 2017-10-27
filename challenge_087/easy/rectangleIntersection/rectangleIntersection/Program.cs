using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rectangleIntersection {
    class Program {
        static void Main(string[] args) {

            //challenge input
            var rectangle = new Rectangle(3, 3, 10, 10);
            rectangle.GetIntersects(new Rectangle(6, 6, 12, 12));
        }
    }
}