using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repetitiveRubikCube {
    class RubikCube {

        private char[] _colors = new char[] { 'r', 'b', 'y', 'g', 'w', 'o' };
        private string[] _names = new string[] { "up", "down", "left", "right", "front", "back" };

        public Dictionary<string, Face> Faces { get; private set; }

        public RubikCube() {

            CreateFace();
        }
        /*
         * create all faces of the cube
         */
        public void CreateFace() {

            Faces = new Dictionary<string, Face>();

            for(int i = 0; i < _names.Length; i++) {

                Faces.Add(_names[i], new Face(_colors[i]));
            }
        }
        /*
         * check if the cube is on default state
         *
         * @return {bool} [test result]
         */
        public bool OnDefaultState() {

            return _names.All(name => Faces[name].OnDefaultState());
        }
    }
}