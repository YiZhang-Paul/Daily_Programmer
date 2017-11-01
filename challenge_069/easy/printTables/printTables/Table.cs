using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace printTables {
    class Table {
        /// <summary>
        /// construct tables
        /// </summary>
        /// <param name="titles">column titles</param>
        /// <param name="inputs">inputs for each column</param>
        public string MakeTable(string[] titles, string[][] inputs) {

            inputs = titles.Length > 1 ? ShiftInputs(inputs) : inputs;
            var columns = new List<string[]>();

            for(int i = 0; i < titles.Length; i++) {

                columns.Add(GetColumn(titles[i], inputs[i], titles.Length != 1).Split('\n'));
            }

            return JoinColumns(columns.ToArray());
        }
        /// <summary>
        /// join columns together to form a table
        /// </summary>
        public string JoinColumns(string[][] columns) {

            var table = new StringBuilder();

            for(int i = 0; i < columns[0].Length; i++) {

                for(int j = 0; j < columns.Length; j++) {

                    table.Append(columns[j][i].Remove(0, j == 0 ? 0 : 1));
                }

                table.Append("\n");
            }

            return table.ToString();
        }
        /// <summary>
        /// shift input columns to rows
        /// </summary>
        public string[][] ShiftInputs(string[][] inputs) {

            string[][] shifted = new string[inputs[0].Length][];

            for(int i = 0; i < shifted.Length; i++) {

                shifted[i] = new string[inputs.Length];

                for(int j = 0; j < inputs.Length; j++) {

                    shifted[i][j] = inputs[j][i];
                }
            }

            return shifted;
        }
        /// <summary>
        /// create column header
        /// </summary>
        public string GetColumnHead(string title, int columnWidth, string lineSplit) {

            string padding = "".PadLeft((columnWidth - title.Length) / 2, ' ');
            
            return lineSplit + "\n|" + padding + title + padding + "|\n" + lineSplit;
        }
        /// <summary>
        /// create column body
        /// </summary>
        public string GetColumnBody(string[] inputs, int columnWidth, string lineSplit, bool rowSplit) {

            string body = inputs.Aggregate("", (result, input) => {

                string row = "| " + input.PadRight(columnWidth - 1, ' ') + "|\n";

                return result + row + (rowSplit ? lineSplit + "\n" : ""); 
            }); 

            return body.Remove(body.Length - 1) + (!rowSplit ? "\n" + lineSplit : "");
        }
        /// <summary>
        /// construct column
        /// </summary>
        public string GetColumn(string title, string[] inputs, bool rowSplit) {

            int width = GetColumnWidth(title, inputs);
            string split = GetLineSplit(width);

            return GetColumnHead(title, width, split) + "\n" + GetColumnBody(inputs, width, split, rowSplit);
        }
        /// <summary>
        /// calculate column width
        /// </summary>
        public int GetColumnWidth(string title, string[] inputs) {

            int maxLength = Math.Max(title.Length, inputs.Max(input => input.Length));

            return maxLength + 2 + (maxLength + 2 - title.Length) % 2;
        }
        /// <summary>
        /// create line split in table
        /// </summary>
        public string GetLineSplit(int columnWidth) {

            return "+" + "".PadLeft(columnWidth, '-') + "+";
        }
    }
}