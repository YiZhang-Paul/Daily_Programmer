using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace numberDisplay {
    class NumberDisplay {

        public string[] Patterns { get; private set; }
        public int Scale { get; private set; }

        public NumberDisplay() {

            Patterns = new string[] { 
                "abcdef",   //0
                "bc",       //1
                "abdeg",    //2
                "abcdg",    //3
                "bcfg",     //4
                "acdfg",    //5
                "acdefg",   //6
                "abc",      //7
                "abcdefg",  //8
                "abcdfg"    //9
            };
        }
        /// <summary>
        /// set scale of number display
        /// </summary>
        /// <param name="scale">display scale</param>
        public void SetScale(int scale) {

            Scale = scale;
        }
        /// <summary>
        /// retrieve a grid-like structure to hold all number display 
        /// </summary>
        /// <param name="digits">total number of digits to display</param>
        /// <returns>number display grids</returns>
        public char[,] GetGrids(int digits) {

            return new char[Scale * 2 + 3, digits * (Scale + 3) - 1];
        }
        /// <summary>
        /// show content on display grids
        /// </summary>
        /// <param name="grids">display grids</param>
        public void ShowGrids(char[,] grids) {

            var content = new StringBuilder();

            for(int i = 0; i < grids.GetLength(0); i++) {

                for(int j = 0; j < grids.GetLength(1); j++) {

                    content.Append(grids[i, j]);
                }

                content.Append("\n");
            }

            Console.WriteLine(content.ToString());
        }
        /// <summary>
        /// get all digits in a number
        /// </summary>
        /// <param name="number">number to check</param>
        /// <returns>all digits in the given number</returns>
        public int[] GetDigits(int number) { 
        
            var digits = new List<int>();

            while(number != 0) {

                digits.Add(number % 10);
                number = (number - number % 10) / 10;
            }

            digits.Reverse();

            return digits.ToArray();
        }
        /// <summary>
        /// display number on console
        /// </summary>
        /// <param name="number">number to display</param>
        /// <param name="scale">display scale</param>
        public void DisplayNumber(int number, int scale = 2) {

            SetScale(scale);
            int column = 0; //current column
            char[,] grids = GetGrids(number.ToString().Length);
            
            foreach(int digit in GetDigits(number)) {
                //display digits on display grids
                foreach(char segment in Patterns[digit]) {

                    ActivateSegment(segment, column, grids);
                }
                //move current position on display grids
                column += Scale + 3;
            }

            ShowGrids(grids);
        }
        /// <summary>
        /// fill a horizontal segment on display grids
        /// </summary>
        /// <param name="row">row on grids</param>
        /// <param name="column">current column on display grids</param>
        /// <param name="grids">display grids</param>
        public void FillRowSegment(int row, int column, char[,] grids) {

            for(int i = column; i <= column + Scale + 1; i++) {

                grids[row, i] = i == column || i == column + Scale + 1 ? '+' : '-';
            }
        }
        /// <summary>
        /// fill a vertical segment on display grids
        /// </summary>
        /// <param name="column">current column on display grids</param>
        /// <param name="offset">total columns to the right of current column</param>
        /// <param name="upper">upper/lower half on grids</param>
        /// <param name="grids">display grids</param>
        public void FillColumnSegment(int column, int offset, bool upper, char[,] grids) {

            int start = upper ? 0 : (grids.GetLength(0) - 1) / 2;
            int end = upper ? (grids.GetLength(0) - 1) / 2 : grids.GetLength(0) - 1;

            for(int i = start; i <= end; i++) {

                grids[i, column + offset] = i == start || i == end ? '+' : '|';
            }
        }
        /// <summary>
        /// activate a segment on number display
        /// </summary>
        /// <param name="segment">segment to activate</param>
        /// <param name="column">current column on display grids</param>
        /// <param name="grids">grids containing all segments</param>
        public void ActivateSegment(char segment, int column, char[,] grids) { 
        
            switch(segment) {
            
                case 'a' :

                    FillRowSegment(0, column, grids);
                    break;

                case 'b':

                    FillColumnSegment(column, Scale + 1, true, grids);
                    break;

                case 'c':

                    FillColumnSegment(column, Scale + 1, false, grids);
                    break;

                case 'd':

                    FillRowSegment(grids.GetLength(0) - 1, column, grids);
                    break;

                case 'e':

                    FillColumnSegment(column, 0, false, grids);
                    break;

                case 'f':

                    FillColumnSegment(column, 0, true, grids);
                    break;

                case 'g':

                    FillRowSegment((grids.GetLength(0) - 1) / 2, column, grids);
                    break;
            }
        }
    }
}