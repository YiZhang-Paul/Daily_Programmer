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
            var overlap = rectangle.GetOverlapRectangle(new Rectangle(6, 6, 12, 12));
            Console.WriteLine(Rectangle.ShowRectangle(overlap));

            rectangle = new Rectangle(4, 4, 5, 5);
            overlap = rectangle.GetOverlapRectangle(new Rectangle(6, 6, 10, 10));
            Console.WriteLine(Rectangle.ShowRectangle(overlap));
        }
    }
}