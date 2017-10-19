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
         * @param {} [] - default face color
         */
        public Face(char color) {

            Color = color;
            Content = new int[,] { 
                { color, color, color }, 
                { color, color, color }, 
                { color, color, color } 
            }; 
        }
    }

    class RubikCube {

        public Dictionary<string, Face> Faces { get; private set; }

        public RubikCube() {

            Faces = new Dictionary<string, Face>();
            char[] colors = new char[] { 'r', 'b', 'y', 'g', 'w', 'o' };
            string[] names = new string[] { "up", "down", "left", "right", "front", "back" };
            //create faces
            for(int i = 0; i < names.Length; i++) {

                Faces.Add(names[i], new Face(colors[i]));
            }
        }
    }
}