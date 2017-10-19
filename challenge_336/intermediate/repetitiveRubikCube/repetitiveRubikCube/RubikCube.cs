using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repetitiveRubikCube {
    class RubikCube {

        private char[] _colors = new char[] { 'r', 'b', 'y', 'g', 'w', 'o' };
        private string[] _names = new string[] { "front", "up", "right", "back", "down", "left" };

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
        /*
         * rotate up face
         * @param {string} [direction] - direction of rotation
         */
        public void RotateUp(string direction = "clockwise") {

            string[] affected = _names.Where(name => name != "up" && name != "down").ToArray();
            //determine order of affected faces base on rotation direction
            if(direction != "clockwise") affected.Reverse(); 
        }
        /*
         * rotate front face
         * @param {string} [direction] - direction of rotation
         */
        public void RotateFront(string direction = "clockwise") {

            string[] affected = _names.Where(name => name != "front" && name != "back").ToArray();
            //determine order of affected faces base on rotation direction
            if(direction == "clockwise") affected.Reverse(); 
        }
        /*
         * rotate right face
         * @param {string} [direction] - direction of rotation
         */
        public void RotateRight(string direction = "clockwise") {

            string[] affected = _names.Where(name => name != "right" && name != "left").ToArray();
            //determine order of affected faces base on rotation direction
            if(direction == "clockwise") affected.Reverse();

            Faces["right"].RotateClockwise();
                
        }
    }
}