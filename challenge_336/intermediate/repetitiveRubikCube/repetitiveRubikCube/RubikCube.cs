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
         * @param {string} [direction] - rotate direction
         */
        public void RotateUpDown(string face, string direction) {

            if(direction == "clockwise") {

                RotateUpDownClockwise(face);
            }
            else {

                RotateUpDownCounterClockwise(face);
            }
        }
        /*
         * rotate up or down face clockwise
         * @param {string} [face] - face to rotate
         */
        public void RotateUpDownClockwise(string face) {

            string[] affected = GetAffected(face);
            int shiftIndex = face == "up" ? 0 : 2;
            char[] shift = Faces[affected.Last()].GetRow(shiftIndex);

            for(int i = 0; i < affected.Length; i++) {
                //change affected rows on affected faces
                char[] newShift = Faces[affected[i]].GetRow(shiftIndex);
                Faces[affected[i]].ChangeRow(shiftIndex, shift);
                shift = newShift;
            }
            //rotate face
            Faces[face].Rotate();
        }
        /*
         * rotate up or down face counter-clockwise
         * @param {string} [face] - face to rotate
         */
        public void RotateUpDownCounterClockwise(string face) {

            for(int i = 0; i < 3; i++) {

                RotateUpDownClockwise(face);
            }
        }
        /*
         * rotate left or right face
         * @param {string} [face] - face to rotate
         * @param {string} [direction] - rotate direction
         */
        public void RotateLeftRight(string face, string direction) {

            if(direction == "clockwise") {

                RotateLeftRightClockwise(face);
            }
            else {

                RotateLeftRightCounterClockwise(face);
            }
        }
        /*
         * rotate left or right face clockwise
         * @param {string} [face] - face to rotate
         */
        public void RotateLeftRightClockwise(string face) {

            string[] affected = GetAffected(face);
            int[] shiftIndex = face == "right" ? new int[] { 2, 0, 2, 2 } : new int[] { 0, 0, 0, 2 };
            char[] shift = Faces[affected.Last()].GetColumn(shiftIndex.Last());

            for(int i = 0; i < affected.Length; i++) {

                char[] newShift = Faces[affected[i]].GetColumn(shiftIndex[i]);
                //reverse shifting column when necessary
                if(affected[i] == "back" || (i > 0 && affected[i - 1] == "back")) {

                    shift = shift.Reverse().ToArray();
                }
                //change affected columns on affected faces
                Faces[affected[i]].ChangeColumn(shiftIndex[i], shift);
                shift = newShift;
            }
            //rotate face
            Faces[face].Rotate();
        }
        /*
         * rotate left or right face counter-clockwise
         * @param {string} [face] - face to rotate
         */
        public void RotateLeftRightCounterClockwise(string face) {

            for(int i = 0; i < 3; i++) {

                RotateLeftRightClockwise(face);
            }
        }
        /*
         * rotate front or back face
         * @param {string} [face] - face to rotate
         * @param {string} [direction] - rotate direction
         */
        public void RotateFrontBack(string face, string direction) {

            if(direction == "clockwise") {

                RotateFrontBackClockwise(face);
            }
            else {

                RotateFrontBackCounterClockwise(face);
            }
        }
        /*
         * rotate front or back face clockwise
         * @param {string} [face] - face to rotate
         */
        public void RotateFrontBackClockwise(string face) {

            string[] affected = GetAffected(face);
            string[] affectedType = new string[] { "row", "col", "row", "col" };
            int[] shiftIndex = face == "front" ? new int[] { 2, 0, 0, 2 } : new int[] { 0, 0, 2, 2 };
            char[] shift = affectedType.Last() == "row" ? 
                Faces[affected.Last()].GetRow(shiftIndex.Last()) : Faces[affected.Last()].GetColumn(shiftIndex.Last());

            for(int i = 0; i < affected.Length; i++) {
            
                char[] newShift = affectedType[i] == "row" ? 
                    Faces[affected[i]].GetRow(shiftIndex[i]) : Faces[affected[i]].GetColumn(shiftIndex[i]);
                //reverse shifting row/column when necessary
                if((face == "front" && (affected[i] == "down" || (i > 0 && affected[i - 1] == "left"))) ||
                   (face == "back" && (affected[i] == "left" || (i > 0 && affected[i - 1] == "down")))) {
                
                    shift = shift.Reverse().ToArray();
                }
                //change affected row/column on affected faces
                if(affectedType[i] == "row") {
                
                    Faces[affected[i]].ChangeRow(shiftIndex[i], shift);
                }
                else {
                
                    Faces[affected[i]].ChangeColumn(shiftIndex[i], shift);
                }

                shift = newShift;
            }
            //rotate face
            Faces[face].Rotate();
        }
        /*
         * rotate front or back face counter-clockwise
         * @param {string} [face] - face to rotate
         */
        public void RotateFrontBackCounterClockwise(string face) {

            for(int i = 0; i < 3; i++) {

                RotateFrontBackClockwise(face);
            }
        }
        /*
         * retrieve all affected faces in affected order 
         * @param {string} [face] - face to rotate
         */
        public string[] GetAffected(string face) {

            switch(face) {

                case "left":
                case "right":

                    return face == "left" ?
                        new string[] { "up", "front", "down", "back" } :
                        new string[] { "up", "back", "down", "front" };

                case "up":
                case "down":

                    return face == "up" ?
                        new string[] { "front", "left", "back", "right" } :
                        new string[] { "front", "right", "back", "left" };

                case "front":
                case "back":

                    return face == "front" ?
                        new string[] { "up", "right", "down", "left" } :
                        new string[] { "up", "left", "down", "right" };
            }

            return null;
        }
    }
}