using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace drawCheckeredGrid {
    class Program {
        static void Main(string[] args) {

            var grid = new CheckeredGrid();

            //challenge input
            Console.WriteLine(grid.DrawGrid(3, 8)); ;
            //bonus input
            Console.WriteLine(grid.DrawGrid(2, 5, 5)); ;
        }
    }
}