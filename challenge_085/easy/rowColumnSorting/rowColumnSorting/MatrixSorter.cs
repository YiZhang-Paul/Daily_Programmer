using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rowColumnSorting {
    class MatrixSorter {

        public int[][] Matrix { get; private set; }
        public int MaxNumber { get { return Matrix.Max(row => row.Max()); } }

        public MatrixSorter() {
        }
        /// <param name="matrix">matrix layout</param>
        public MatrixSorter(string matrix) {

            Matrix = GetMatrix(matrix);
        }
        /// <summary>
        /// create matrix base on input layout
        /// </summary>
        /// <param name="matrix">matrix layout</param>
        /// <returns>matrix to sort</returns>
        public int[][] GetMatrix(string matrix) {

            string[] rows = matrix.Split('\n').Select(row => row.Trim()).ToArray();
            int[][] output = new int[rows.Length][];

            for(int i = 0; i < rows.Length; i++) {

                output[i] = rows[i].Split(' ').Select(number => Int32.Parse(number)).ToArray();
            }

            return output;
        }
        /// <summary>
        /// retrieve a given row of matrix
        /// </summary>
        /// <param name="row">index of target row</param>
        /// <param name="matrix">target matrix</param>
        /// <returns>target row on matrix</returns>
        public int[] GetRow(int row, int[][] matrix) {

            return matrix[row];
        }
        /// <summary>
        /// retrieve a given column of matrix
        /// </summary>
        /// <param name="column">index of target column</param>
        /// <param name="matrix">target matrix</param>
        /// <returns>target column on matrix</returns>
        public int[] GetColumn(int column, int[][] matrix) {

            return matrix.Select(row => row[column]).ToArray();
        }
        /// <summary>
        /// retrieve all rows on matrix
        /// </summary>
        /// <param name="matrix">target matrix</param>
        /// <returns>all rows on matrix</returns>
        public List<int[]> GetAllRows(int[][] matrix) {

            return new int[matrix.Length].Select((row, index) => GetRow(index, matrix)).ToList();
        }
        /// <summary>
        /// retrieve all columns on matrix
        /// </summary>
        /// <param name="matrix">target matrix</param>
        /// <returns>all columns on matrix</returns>
        public List<int[]> GetAllColumns(int[][] matrix) {

            return new int[matrix[0].Length].Select((column, index) => GetColumn(index, matrix)).ToList();
        }
        /// <summary>
        /// sort matrix by row sum
        /// </summary>
        /// <param name="matrix">target matrix</param>
        /// <returns>sorted matrix</returns>
        public int[][] SortByRow(int[][] matrix) {

            return GetAllRows(matrix).OrderBy(row => row.Sum()).ToArray();
        }
        /// <summary>
        /// sort matrix by column sum
        /// </summary>
        /// <param name="matrix">target matrix</param>
        /// <returns>sorted matrix</returns>
        public int[][] SortByColumn(int[][] matrix) {

            var sorted = GetAllColumns(matrix).OrderBy(column => column.Sum());

            return GetAllColumns(sorted.ToArray()).ToArray();
        }
        /// <summary>
        /// display matrix in console
        /// </summary>
        /// <param name="matrix">matrix to display</param>
        public void DisplayMatrix(int[][] matrix) {

            int columnWidth = MaxNumber.ToString().Length;
            string lineBreak = "".PadLeft((columnWidth + 3) * matrix[0].Length + 1, '-');
            var rows = matrix.Select(row => row.Select(number => number.ToString().PadLeft(columnWidth, ' ')))
                             .Select(row => "| " + string.Join(" | ", row) + " |");
            Console.WriteLine(lineBreak + "\n" + string.Join("\n" + lineBreak + "\n", rows) + "\n" + lineBreak);
        }
        /// <summary>
        /// sort matrix by row and by column
        /// </summary>
        /// <param name="matrix">matrix to display</param>
        public void SortByRowColumn(int[][] matrix) {

            DisplayMatrix(SortByRow(matrix));
            DisplayMatrix(SortByColumn(matrix));
        }
    }
}