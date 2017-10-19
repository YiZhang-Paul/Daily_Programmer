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
         * rotate front or back face
         * @param {string} [face] - face to rotate
         * @param {string} [direction] - direction of rotation
         */
        public void RotateFrontBack(string face, string direction = "clockwise") {

            string[] affected = GetAffected(face, direction);
            string[] affectedType = new string[] { "row", "col", "row", "col" };
            int[] affectedIndex;
            //determine index of row/column on each affected face
            if(direction == "clockwise") {

                affectedIndex = face == "front" ? 
                    new int[] { Faces["up"].Content.GetLength(0) - 1, 0, 0, Faces["left"].Content.GetLength(1) - 1 } :
                    new int[] { 0, 0, Faces["down"].Content.GetLength(0) - 1, Faces["right"].Content.GetLength(1) - 1 };
            }
            else { 
            
                affectedIndex = face == "front" ? 
                    new int[] { Faces["up"].Content.GetLength(0) - 1, Faces["left"].Content.GetLength(1) - 1, 0, 0 } :
                    new int[] { 0, Faces["right"].Content.GetLength(1) - 1, Faces["down"].Content.GetLength(0) - 1, 0 }; 
            }
            //u, r, d, l - clockwise
            //u, l, d, r           
            char[] shift = affectedType.Last() == "row" ? 
                Faces[affected.Last()].GetRow(affectedIndex.Last()) : Faces[affected.Last()].GetColumn(affectedIndex.Last());

            for(int i = 0; i < affected.Length; i++) {
                //change blocks on given column
                char[] newShift = affectedType[i] == "row" ?
                    Faces[affected[i]].GetRow(affectedIndex[i]) : Faces[affected[i]].GetColumn(affectedIndex[i]);
                
                if(affectedType[i] == "row") {

                    Faces[affected[i]].ChangeRow(affectedIndex[i], shift);
                }
                else {

                    Faces[affected[i]].ChangeColumn(affectedIndex[i], shift);
                }

                shift = newShift;
            }
            //rotate face
            Faces[face].Rotate(direction);   
        }
        /*
         * retrieve all affected faces due to rotation
         * @param {string} [face] - face to rotate
         * @param {string} [direction] - direction of rotation
         *
         * @return {string[]} [names of affected faces in affected order]
         */
        public string[] GetAffected(string face, string direction = "clockwise") {

            switch(face) {
            
                case "up" :

                    return direction == "clockwise" ?
                        new string[] { "front", "left", "back", "right" } :
                        new string[] { "front", "right", "back", "left" };

                case "down" :

                    return direction == "clockwise" ?
                        new string[] { "front", "right", "back", "left" } :
                        new string[] { "front", "left", "back", "right" };

                case "left" :

                    return direction == "clockwise" ?
                        new string[] { "front", "down", "back", "up" } :
                        new string[] { "front", "up", "back", "down" };

                case "right" :
        
                    return direction == "clockwise" ?
                        new string[] { "front", "up", "back", "down" } :
                        new string[] { "front", "down", "back", "up" };

                case "front" :

                    return direction == "clockwise" ?
                        new string[] { "up", "right", "down", "left" } :
                        new string[] { "up", "left", "down", "right" };

                case "back" :

                    return direction == "clockwise" ?
                        new string[] { "up", "left", "down", "right" } :
                        new string[] { "up", "right", "down", "left" };
            }

            return null;
        }
    }
}