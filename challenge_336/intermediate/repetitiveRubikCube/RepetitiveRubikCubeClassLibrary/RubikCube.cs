using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepetitiveRubikCubeClassLibrary {
    public class RubikCube {

        private char[] _color = { 'r', 'b', 'y', 'g', 'w', 'o' };
        private string[] _face = { "front", "top", "right", "back", "bottom", "left" };

        public Dictionary<string, ICubeFace> Faces { get; private set; }

        public bool OnDefault {

            get {

                return Faces.All(pair => pair.Value.OnDefault);
            }
        }

        public RubikCube() {

            Faces = CreateFaces();
        }

        private Dictionary<string, ICubeFace> CreateFaces() {

            var faces = new Dictionary<string, ICubeFace>();

            for(int i = 0; i < _face.Length; i++) {

                faces[_face[i]] = new CubeFace(_color[i]);
            }

            return faces;
        }

        public void RotateLeftClockwise() {

            char[] topColumn = Faces["top"].GetColumn(0);
            char[] frontColumn = Faces["front"].GetColumn(0);
            char[] bottomColumn = Faces["bottom"].GetColumn(0);
            char[] backColumn = Faces["back"].GetColumn(0);

            Faces["top"].ChangeColumn(0, backColumn);
            Faces["front"].ChangeColumn(0, topColumn);
            Faces["bottom"].ChangeColumn(0, frontColumn);
            Faces["back"].ChangeColumn(0, bottomColumn);
            Faces["left"].RotateClockwise();
        }

        public void RotateLeftCounterClockwise() {

            for(int i = 0; i < 3; i++) {

                RotateLeftClockwise();
            }
        }

        public void RotateRightClockwise() {

            char[] topColumn = Faces["top"].GetColumn(2);
            char[] frontColumn = Faces["front"].GetColumn(2);
            char[] bottomColumn = Faces["bottom"].GetColumn(2);
            char[] backColumn = Faces["back"].GetColumn(2);

            Faces["top"].ChangeColumn(2, frontColumn);
            Faces["front"].ChangeColumn(2, bottomColumn);
            Faces["bottom"].ChangeColumn(2, backColumn);
            Faces["back"].ChangeColumn(2, topColumn);
            Faces["right"].RotateClockwise();
        }

        public void RotateRightCounterClockwise() {

            for(int i = 0; i < 3; i++) {

                RotateRightClockwise();
            }
        }

        public void RotateFrontClockwise() { 
        
            char[] topRow = Faces["top"].GetRow(2);
            char[] rightColumn = Faces["right"].GetColumn(0);
            char[] bottomRow = Faces["bottom"].GetRow(0);
            char[] leftColumn = Faces["left"].GetColumn(2);
            leftColumn.Reverse();
            rightColumn.Reverse();

            Faces["top"].ChangeRow(2, leftColumn);
            Faces["right"].ChangeColumn(0, topRow);
            Faces["bottom"].ChangeRow(0, rightColumn);
            Faces["left"].ChangeColumn(2, bottomRow);
            Faces["front"].RotateClockwise();
        }

        public void RotateFrontCounterClockwise() {

            for(int i = 0; i < 3; i++) {

                RotateFrontClockwise();
            }
        }

        public void RotateTopClockwise() {

            char[] backRow = Faces["back"].GetRow(2);
            char[] rightRow = Faces["right"].GetRow(0);
            char[] frontRow = Faces["front"].GetRow(0);
            char[] leftRow = Faces["left"].GetRow(0);
            leftRow.Reverse();
            backRow.Reverse();

            Faces["back"].ChangeRow(2, leftRow);
            Faces["right"].ChangeRow(0, backRow);
            Faces["front"].ChangeRow(0, rightRow);
            Faces["left"].ChangeRow(0, frontRow);
            Faces["top"].RotateClockwise();
        }

        public void RotateTopCounterClockwise() {

            for(int i = 0; i < 3; i++) {

                RotateTopClockwise();
            }
        }

        public void RotateBottomClockwise() {

            char[] frontRow = Faces["front"].GetRow(2);
            char[] rightRow = Faces["right"].GetRow(2);
            char[] backRow = Faces["back"].GetRow(0);
            char[] leftRow = Faces["left"].GetRow(2);
            rightRow.Reverse();
            backRow.Reverse();

            Faces["front"].ChangeRow(2, leftRow);
            Faces["right"].ChangeRow(2, frontRow);
            Faces["back"].ChangeRow(0, rightRow);
            Faces["left"].ChangeRow(2, backRow);
            Faces["bottom"].RotateClockwise();
        }

        public void RotateBottomCounterClockwise() {

            for(int i = 0; i < 3; i++) {

                RotateBottomClockwise();
            }
        }
    }
}