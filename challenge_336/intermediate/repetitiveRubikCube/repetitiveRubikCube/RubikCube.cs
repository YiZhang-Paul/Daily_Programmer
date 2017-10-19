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

            string[] affected = GetAffected("up", direction);
        }
        /*
         * rotate front face
         * @param {string} [direction] - direction of rotation
         */
        public void RotateFront(string direction = "clockwise") {

            string[] affected = GetAffected("front", direction);
        }
        /*
         * rotate right face
         * @param {string} [direction] - direction of rotation
         */
        public void RotateRight(string direction = "clockwise") {

            string[] affected = GetAffected("right", direction);
            //rotate face
            Faces["right"].Rotate(direction);

                
        }
        /*
         * retrieve opposite face of a given face
         * @param {string} [name] - name of current face
         *
         * @return {string} [name of opposite face]
         */
        public string GetOpposite(string name) { 
        
            string opposite = "";

            switch(name) {
            
                case "right" : case "left" :

                    opposite = name == "right" ? "left" : "right";
                    break;

                case "up" : case "down" :

                    opposite = name == "up" ? "down" : "up";
                    break;

                case "front" : case "back" :

                    opposite = name == "front" ? "back" : "front";
                    break;
            }

            return opposite;
        }
        /*
         * retrieve all affected faces due to rotation
         * @param {string} [face] - face to rotate
         * @param {string} [direction] - direction of rotation
         *
         * @return {string[]} [names of affected faces in affected order]
         */
        public string[] GetAffected(string face, string direction = "clockwise") {

            string[] affected = _names.Where(name => name != face && name != GetOpposite(face)).ToArray();
            //determine order of affected faces base on rotation direction
            if(direction == "clockwise") {

                if(face == "up" || face == "down") {

                    affected = affected.Reverse().ToArray();
                }
            }
            else if(face != "up" && face != "down") {

                affected = affected.Reverse().ToArray();
            }

            return affected;
        }
    }
}