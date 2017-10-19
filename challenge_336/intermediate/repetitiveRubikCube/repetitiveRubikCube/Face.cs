using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repetitiveRubikCube {
    class Face {

        public char Color { get; private set; }
        public char[,] Content { get; set; }

        public Face() {
        }
        /*
         * @param {char} [color] - default face color
         */
        public Face(char color) {

            Color = color;
            Content = new char[,] { 
                { color, color, color }, 
                { color, color, color }, 
                { color, color, color } 
            };
        }
        /*
         * retrieve a given row from the face
         * @param {int} [rowIndex] - index of row to retrieve
         *
         * @return {char[]} [target row]
         */
        public char[] GetRow(int rowIndex) {

            int rowLength = Content.GetLength(1);

            return Content.Cast<char>().Skip(rowIndex * rowLength).Take(rowLength).ToArray();
        }
        /*
         * retrieve a given column from the face
         * @param {int} [colIndex] - index of column to retrieve
         *
         * @return {char[]} [target column]
         */
        public char[] GetColumn(int colIndex) {

            char[] column = new char[Content.GetLength(0)];

            for(int i = 0; i < Content.GetLength(0); i++) {

                column[i] = Content[i, colIndex];
            }

            return column;
        }
        /*
         * check if the face is on default state
         *
         * @return {bool} [test result]
         */
        public bool OnDefaultState() {

            return Content.Cast<char>().All(color => color == Color);
        }
        /*
         * rotate face 90 degrees
         * @param {string} [direction] - direction of rotation
         */
        public void Rotate(string direction = "aclockwise") {

            char[,] rotated = new char[Content.GetLength(1), Content.GetLength(0)];

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