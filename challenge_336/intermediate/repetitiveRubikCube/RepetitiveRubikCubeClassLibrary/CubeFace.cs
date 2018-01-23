using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepetitiveRubikCubeClassLibrary {
    public class CubeFace {

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

            char[] column1 = GetColumn(0);
            char[] column2 = GetColumn(1);
            char[] column3 = GetColumn(2);

            ChangeRow(0, column1);
            ChangeRow(1, column2);
            ChangeRow(2, column3);
        }

        public void RotateCounterClockwise() {

            char[] column1 = GetColumn(0);
            char[] column2 = GetColumn(1);
            char[] column3 = GetColumn(2);

            ChangeRow(0, column3);
            ChangeRow(1, column2);
            ChangeRow(2, column1);
        }
    }
}