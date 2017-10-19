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
    }
}