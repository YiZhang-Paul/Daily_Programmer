using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repetitiveRubikCube {
    class Program {
        static void Main(string[] args) {

            var cube = new RubikCube();
            cube.RotateUpDown("up", "a");
            cube.RotateLeftRight("left", "a");
            cube.RotateFrontBack("front", "a");
        }
    }
}