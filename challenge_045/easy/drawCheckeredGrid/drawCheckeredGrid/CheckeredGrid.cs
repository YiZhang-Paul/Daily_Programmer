using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace drawCheckeredGrid {
    class CheckeredGrid {
        /// <summary>
        /// draw checkered grid
        /// </summary>
        /// <param name="width">grid width</param>
        public string DrawGrid(int row, int column, int width = 3) {

            string lineSplit = "".PadLeft((width + 1) * column + 1, '*');
            string evenRow = GetEvenRow(column, width);
            string oddRow = GetOddRow(column, width);
            var grid = new StringBuilder(lineSplit + "\n");

            for(int i = 0; i < row; i++) {

                grid.Append((i % 2 == 0 ? evenRow : oddRow) + "\n" + lineSplit + "\n");
            }

            return grid.ToString();
        }
        /// <summary>
        /// retrieve even numbered row
        /// </summary>
        public string GetEvenRow(int column, int width) {

            string row = Enumerable.Range(1, column)
                                   .Select(value => "*".PadRight(width + 1, value % 2 == 0 ? '#' : ' '))
                                   .Aggregate("", (acc, val) => acc + val) + "*";

            return string.Join("\n", new string[width].Select(index => row));
        }
        /// <summary>
        /// retrieve odd numbered row
        /// </summary>
        public string GetOddRow(int column, int width) {

            string row = Enumerable.Range(1, column)
                                   .Select(value => "*".PadRight(width + 1, value % 2 == 0 ? ' ' : '#'))
                                   .Aggregate("", (acc, val) => acc + val) + "*";

            return string.Join("\n", new string[width].Select(index => row));
        }
    }
}