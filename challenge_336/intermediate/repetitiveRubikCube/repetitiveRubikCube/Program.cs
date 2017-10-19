using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repetitiveRubikCube {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string input1 = "R";
            string input2 = "R F2 L' U D B2";
            string input3 = "R' F2 B F B F2 L' U F2 D R2 L R' B L B2 R U";

            Console.WriteLine(GetTotalTime(input1));
            Console.WriteLine(GetTotalTime(input2));
            Console.WriteLine(GetTotalTime(input3));
        }
        /*
         * process Rubik Cube instructions
         * @param {string} [instruction] - instruction to process
         * @param {RubikCube} [cube] - cube used to process instructions
         */
        public static void ProcessInstruction(string instruction, RubikCube cube) {

            int totalRotate = Char.IsDigit(instruction[instruction.Length - 1]) ? 2 : 1;
            string direction = instruction[instruction.Length - 1] == '\'' ? "counterClockwise" : "clockwise";

            for(int i = 0; i < totalRotate; i++) {

                switch(instruction[0]) {

                    case 'R' : case 'L' :

                        cube.RotateLeftRight(instruction[0] == 'R' ? "right" : "left", direction);
                        break;

                    case 'F' : case 'B' :

                        cube.RotateFrontBack(instruction[0] == 'F' ? "front" : "back", direction);
                        break;

                    case 'U' : case 'D' :

                        cube.RotateUpDown(instruction[0] == 'U' ? "up" : "down", direction);
                        break;
                }
            }
        }
        /*
         * find total times needed to process a series of instructions 
         * for the Rubik Cube to go back to its default state
         * @param {string} [instructions] - all instructions to process
         *
         * @return {int} [total time needed to go back to default state]
         */
        public static int GetTotalTime(string instructions) {

            int totalTime = 0;
            var cube = new RubikCube();
            string[] allInstruction = instructions.Split(' ');

            do {

                totalTime++;
                //process all instructions in the instruction set
                foreach(string instruction in allInstruction) {

                    ProcessInstruction(instruction, cube);
                }
            //process instructions until cube return to default state
            } while(!cube.OnDefaultState());

            return totalTime;
        }
    }
}