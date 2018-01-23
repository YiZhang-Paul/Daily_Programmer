using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepetitiveRubikCubeClassLibrary {
    public class CubeFace : ICubeFace {

        public char Color { get; private set; }
        public char[][] Content { get; private set; }
        
        public bool OnDefault {

            get {

                return Content.All(row => {

                    return row.All(column => column == Color);
                });
            }
        }

        public CubeFace(char color) {

            Color = color;
            Content = FillColor(color);
        }

        public CubeFace(char[][] content) {

            Content = content;
        }

        private char[][] FillColor(char color) {

            var content = new List<char[]>();

            for(int i = 0; i < 3; i++) {

                content.Add(new char[] { color, color, color });
            }

            return content.ToArray();
        }

        public char[] GetRow(int row) {

            return Content[row];
        }

        public char[] GetColumn(int column) {

            return Content.Select(row => row[column]).ToArray();
        }

        public void ChangeRow(int row, char[] changes) {

            char[] toChange = GetRow(row);

            if(toChange.Length != changes.Length) {

                throw new ArgumentException("Row Length Cannot be Changed.");
            }

            Content[row] = changes;
        }

        public void ChangeColumn(int column, char[] changes) {

            if(Content.Length != changes.Length) {

                throw new ArgumentException("Column Length Cannot be Changed.");
            }

            for(int i = 0; i < Content.Length; i++) {

                Content[i][column] = changes[i];
            }
        }

        public void RotateClockwise() {

            char[] columnOne = GetColumn(0);
            char[] columnTwo = GetColumn(1);
            char[] columnThree = GetColumn(2);

            ChangeRow(0, columnOne);
            ChangeRow(1, columnTwo);
            ChangeRow(2, columnThree);
        }
    }
}