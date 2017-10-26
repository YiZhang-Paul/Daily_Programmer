using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rowColumnSorting {
    class MatrixSorter {

        public int[][] Matrix { get; private set; }

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
        /// <returns>target row on matrix</returns>
        public int[] GetRow(int row) { 
        
            return Matrix[row];
        }
        /// <summary>
        /// retrieve a given column of matrix
        /// </summary>
        /// <param name="column">index of target column</param>
        /// <returns>target column on matrix</returns>
        public int[] GetColumn(int column) {

            return Matrix.Select(row => row[column]).ToArray();
        }
        /// <summary>
        /// sort matrix by row sum
        /// </summary>
        /// <returns>sorted matrix</returns>
        public int[][] SortByRow() { 
        
            int[][] output = new int[Matrix.Length][];
            var sums = new Dictionary<int, List<int>>();

            for(int i = 0; i < Matrix.Length; i++) {

                int sum = GetRow(i).Sum();
                sums[sum] = sums.ContainsKey(sum) ? sums[sum] : new List<int>();
                sums[sum].Add(i);
            }

            int curRow = 0;

            foreach(var pair in sums.OrderBy(pair => pair.Key)) {
            
                foreach(int index in pair.Value) {
                
                    output[curRow++] = GetRow(index);
                }
            }

            return output;
        }
        /// <summary>
        /// sort matrix by column sum
        /// </summary>
        /// <returns>sorted matrix</returns>
        public int[][] SortByColumn() { 
        
            int[][] output = new int[Matrix.Length][];

            for(int i = 0; i < Matrix.Length; i++) {

                output[i] = new int[Matrix[0].Length];
            }

            var sums = new Dictionary<int, List<int>>();

            for(int i = 0; i < Matrix[0].Length; i++) {

                int sum = GetColumn(i).Sum();
                sums[sum] = sums.ContainsKey(sum) ? sums[sum] : new List<int>();
                sums[sum].Add(i);
            }

            int curColumn = 0;

            foreach(var pair in sums.OrderBy(pair => pair.Key)) {
            
                foreach(int index in pair.Value) {

                    int[] column = GetColumn(index);

                    for(int i = 0; i < column.Length; i++) {

                        output[i][curColumn] = column[i];
                    }

                    curColumn++;
                }
            }

            return output;
        }
        /// <summary>
        /// display matrix in console
        /// </summary>
        /// <param name="matrix">matrix to display</param>
        public void DisplayMatrix(int[][] matrix) {

            Console.WriteLine(string.Join("\n", matrix.Select(row => string.Join(" ", row))) + "\n");
        }
        /// <summary>
        /// sort matrix by row and by column
        /// </summary>
        public void SortByRowColumn() {

            DisplayMatrix(SortByRow());
            DisplayMatrix(SortByColumn());
        }
    }
}