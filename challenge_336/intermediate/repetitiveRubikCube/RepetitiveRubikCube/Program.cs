using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RepetitiveRubikCubeClassLibrary;

namespace RepetitiveRubikCube {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string input1 = "R";
            string input2 = "R F2 L' U D B2";
            string input3 = "R' F2 B F B F2 L' U F2 D R2 L R' B L B2 R U";
            string input4 = "R D";

            Console.WriteLine(GetTotalRotate(input1));
            Console.WriteLine(GetTotalRotate(input2));
            Console.WriteLine(GetTotalRotate(input3));
            Console.WriteLine(GetTotalRotate(input4));
        }

        private static void Process(string instruction, RubikCube cube) {

            int total = Char.IsDigit(instruction.Last()) ? 2 : 1;
            bool clockwise = instruction.Last() != '\'';

            for(int i = 0; i < total; i++) {

                switch(instruction[0]) {

                    case 'L':

                        if(clockwise) cube.RotateLeftClockwise();
                        else cube.RotateLeftCounterClockwise();

                        break;
                
                    case 'R' :

                        if(clockwise) cube.RotateRightClockwise();
                        else cube.RotateRightCounterClockwise();

                        break;

                    case 'F' :

                        if(clockwise) cube.RotateFrontClockwise();
                        else cube.RotateFrontCounterClockwise();

                        break;

                    case 'B':

                        if(clockwise) cube.RotateBackClockwise();
                        else cube.RotateBackCounterClockwise();

                        break;

                    case 'U':

                        if(clockwise) cube.RotateTopClockwise();
                        else cube.RotateTopCounterClockwise();

                        break;

                    case 'D':

                        if(clockwise) cube.RotateBottomClockwise();
                        else cube.RotateBottomCounterClockwise();

                        break;
                }
            }
        }

        private static int GetTotalRotate(string instructions) {

            int total = 0;
            var cube = new RubikCube();

            do {

                total++;

                foreach(string instruction in instructions.Split(' ')) {

                    Process(instruction, cube);
                }

            } while(!cube.OnDefault);

            return total;
        }
    }
}