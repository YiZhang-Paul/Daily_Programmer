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

            return Faces.All(pair => pair.Value.OnDefaultState());
        }
        /*
         * rotate up or down face
         * @param {string} [face] - face to rotate
         * @param {string} [direction] - direction of rotation
         */
        public void RotateUpDown(string face, string direction = "clockwise") {

            string[] affected = GetAffected(face, direction);
            int targetRow = face == "up" ? 0 : Faces[face].Content.GetLength(0) - 1;
            char[] rowShift = Faces[affected.Last()].GetRow(targetRow);

            for(int i = 0; i < affected.Length; i++) {
                //change blocks on given row
                char[] newRowShift = Faces[affected[i]].GetRow(targetRow);
                Faces[affected[i]].ChangeRow(targetRow, rowShift);
                rowShift = newRowShift;
            }
            //rotate face
            Faces[face].Rotate(direction);
        }
        /*
         * rotate left or right face
         * @param {string} [face] - face to rotate
         * @param {string} [direction] - direction of rotation
         */
        public void RotateLeftRight(string face, string direction = "clockwise") {

            string[] affected = GetAffected(face, direction);
            int targetCol = face == "left" ? 0 : Faces[face].Content.GetLength(1) - 1;
            char[] colShift = Faces[affected.Last()].GetColumn(targetCol);

            for(int i = 0; i < affected.Length; i++) {
                //change blocks on given column
                char[] newColShift = Faces[affected[i]].GetColumn(targetCol);
                Faces[affected[i]].ChangeColumn(targetCol, colShift);
                colShift = newColShift;
            }
            //rotate face
            Faces[face].Rotate(direction);
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
         * rotate front face
         * @param {string} [direction] - direction of rotation
         */
        public void RotateFront(string direction = "clockwise") {

            string[] affected = GetAffected("front", direction);
            //rotate face
            Faces["front"].Rotate(direction); 
        }
        /*
         * rotate back face
         * @param {string} [direction] - direction of rotation
         */
        public void RotateBack(string direction = "clockwise") {

            string[] affected = GetAffected("back", direction);
            //rotate face
            Faces["back"].Rotate(direction);
        }
        /*
         * retrieve opposite face of a given face
         * @param {string} [name] - name of current face
         *
         * @return {string} [name of opposite face]
         */
        public string GetOpposite(string name) { 
        
            switch(name) {
            
                case "right" : case "left" :

                    return name == "right" ? "left" : "right";

                case "up" : case "down" :

                    return name == "up" ? "down" : "up";

                case "front" : case "back" :

                    return name == "front" ? "back" : "front";
            }

            return "";
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