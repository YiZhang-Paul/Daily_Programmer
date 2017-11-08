using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace roulette {
    class Layout {

        private string[] _redPockets = new string[] { 
        
            "1", "3", "5", "7", "9", "12", "14", "16", "18", "19", 
            "21", "23", "25", "27", "30", "32", "34", "36"
        };
        private string[] _blackPockets = new string[] { 
        
            "2", "4", "6", "8", "10", "11", "13", "15", "17", "20", 
            "22", "24", "26", "28", "29", "31", "33", "35"
        };

        public int RowLength { get; private set; }
        public string[][] Table { get; private set; }
        public HashSet<string> RedPockets { get; private set; }
        public HashSet<string> BlackPockets { get; private set; }

        public Layout() {

            RowLength = 3;
            Table = GetLayoutTable();
            RedPockets = new HashSet<string>(_redPockets);
            BlackPockets = new HashSet<string>(_blackPockets);
        }
        /// <summary>
        /// record numbers on layout
        /// </summary>
        public string[][] GetLayoutTable() {

            var table = new List<string[]>();
            var row = new List<string>();

            for(int i = 1; i <= 36; i++) {

                row.Add(i.ToString());

                if(row.Count == RowLength) {

                    table.Add(row.ToArray());
                    row = new List<string>();
                }
            }

            return table.ToArray();
        }
        /// <summary>
        /// retrieve a given column of numbers on layout
        /// </summary>
        public string[] GetColumn(int index) {

            return Table.Select(row => row[index]).ToArray();
        }
        /// <summary>
        /// retrieve all neighbors for a given pocket
        /// </summary>
        public string[] GetNeighbor(string pocket) {

            var neighbor = new List<string>();
            int pocketValue = Int32.Parse(pocket);
            int row = (int)Math.Ceiling((double)pocketValue / 3) - 1;
            int column = pocketValue % 3 + (pocketValue % 3 == 0 ? 2 : -1);
            //add all neighbors
            if(row > 0) neighbor.Add(Table[row - 1][column]);
            if(row < Table.Length - 1) neighbor.Add(Table[row + 1][column]);
            if(column > 0) neighbor.Add(Table[row][column - 1]);
            if(column < Table[row].Length - 1) neighbor.Add(Table[row][column + 1]);

            return neighbor.ToArray();
        }
        /// <summary>
        /// check if two pockets are adjacent on layout table
        /// </summary>
        public bool IsAdjacent(string pocket1, string pocket2) {

            return new HashSet<string>(GetNeighbor(pocket1)).Contains(pocket2);
        }
        /// <summary>
        /// check if given number on layout is in red pocket
        /// </summary>
        public bool IsRed(string spin) {

            return RedPockets.Contains(spin);
        }
        /// <summary>
        /// check if given number on layout is in black pocket
        /// </summary>
        public bool IsBlack(string spin) {

            return BlackPockets.Contains(spin);
        }
    }
}