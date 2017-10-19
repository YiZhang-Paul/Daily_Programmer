using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repetitiveRubikCube {
    class Face {

        public char Color { get; private set; }
        public int[,] Content { get; set; }

        public Face() {
        }
        /*
         * @param {char} [color] - default face color
         */
        public Face(char color) {

            Color = color;
            Content = new int[,] { 
                { color, color, color }, 
                { color, color, color }, 
                { color, color, color } 
            };
        }
        /*
         * check if the face is on default state
         *
         * @return {bool} [test result]
         */
        public bool OnDefaultState() {

            return Content.Cast<int>().All(color => color == Color);
        }
        /*
         * rotate face 90 degrees
         * @param {string} [direction] - direction of rotation
         */
        public void Rotate(string direction = "aclockwise") {

            int[,] rotated = new int[Content.GetLength(1), Content.GetLength(0)];

            for(int i = 0; i < Content.GetLength(0); i++) {

                for(int j = 0; j < Content.GetLength(1); j++) {

                    if(direction == "clockwise") {
                        //rotate 90 degrees clockwise
                        rotated[j, Content.GetLength(1) - i - 1] = Content[i, j];
                    }
                    else { 
                        //rotate 90 degrees counter-clockwise
                        rotated[Content.GetLength(0) - j - 1, i] = Content[i, j];
                    }
                }
            }

            Content = rotated;
        }
    }
}