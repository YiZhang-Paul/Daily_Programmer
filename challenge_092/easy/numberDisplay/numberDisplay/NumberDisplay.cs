using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace numberDisplay {
    class NumberDisplay {

        private string _patternZero = "abcdef";
        private string _patternOne = "bc";
        private string _patternTwo = "abdeg";
        private string _patternThree = "abcdg";
        private string _patternFour = "bcfg";
        private string _patternFive = "acdfg";
        private string _patternSix = "acdefg";
        private string _patternSeven = "abc";
        private string _patternEight = "abcdefg";
        private string _patternNine = "abcdfg";

        public string[] Patterns { get; private set; }

        public NumberDisplay() {

            Patterns = new string[] { 
                _patternZero, _patternOne, _patternTwo, _patternThree, _patternFour, 
                _patternFive, _patternSix, _patternSeven, _patternEight, _patternNine 
            };
        }
        /// <summary>
        /// retrieve a grid-like structure to hold all number display
        /// </summary>
        /// <param name="scale">display scale</param>
        /// <returns>number display grids</returns>
        public char[,] GetGrids(int scale) { 
        
            return new char[scale * 2 + 3, scale + 2];
        }
        /// <summary>
        /// show content on grids
        /// </summary>
        /// <param name="grids">display grids</param>
        /// <returns>grids content</returns>
        public string ShowGrids(char[,] grids) {

            var content = new StringBuilder();

            for(int i = 0; i < grids.GetLength(0); i++) {

                for(int j = 0; j < grids.GetLength(1); j++) {

                    content.Append(grids[i, j]);
                }

                content.Append("\n");
            }

            return content.ToString();
        }
        /// <summary>
        /// display a digit on console
        /// </summary>
        /// <param name="digit">digit to display</param>
        /// <param name="scale">display scale</param>
        public void DisplayDigit(int digit, int scale) { 
        
            char[,] grids = GetGrids(scale);
            string pattern = Patterns[digit];

            foreach(char segment in pattern) {

                ActivateSegment(segment, grids);                
            }

            Console.Write(ShowGrids(grids));
        }
        /// <summary>
        /// display number on console
        /// </summary>
        /// <param name="number">number to display</param>
        /// <param name="scale">display scale</param>
        public void DisplayNumber(int number, int scale = 2) { 

            do {
                //retrieve every digit
                int digit = number % 10;
                DisplayDigit(digit, scale);
                number = (number - digit) / 10;

            } while(number != 0);
        }
        /// <summary>
        /// fill a horizontal segment on display grids
        /// </summary>
        /// <param name="row">row on grids</param>
        /// <param name="grids">display grids</param>
        public void FillRowSegment(int row, char[,] grids) {

            grids[row, 0] = '+';
            grids[row, grids.GetLength(1) - 1] = '+';

            for(int i = 1; i < grids.GetLength(1) - 1; i++) {

                grids[row, i] = '-';
            }
        }
        /// <summary>
        /// fill a vertical segment on display grids
        /// </summary>
        /// <param name="column">column on grids</param>
        /// <param name="upper">upper/lower half on grids</param>
        /// <param name="grids">display grids</param>
        public void FillColumnSegment(int column, bool upper, char[,] grids) {

            grids[(grids.GetLength(0) - 1) / 2, column] = '+';
            grids[upper ? 0 : grids.GetLength(0) - 1, column] = '+';

            int start = upper ? 1 : (grids.GetLength(0) + 1) / 2;
            int end = upper ? (grids.GetLength(0) - 1) / 2 - 1 : grids.GetLength(0) - 2;

            for(int i = start; i <= end; i++) {

                grids[i, column] = '|';
            }
        }
        /// <summary>
        /// activate a segment on number display
        /// </summary>
        /// <param name="segment">segment to activate</param>
        /// <param name="grids">grids containing all segments</param>
        public void ActivateSegment(char segment, char[,] grids) { 
        
            switch(segment) {
            
                case 'a' :

                    FillRowSegment(0, grids);
                    break;

                case 'b':

                    FillColumnSegment(grids.GetLength(1) - 1, true, grids);
                    break;

                case 'c':

                    FillColumnSegment(grids.GetLength(1) - 1, false, grids);
                    break;

                case 'd':

                    FillRowSegment(grids.GetLength(0) - 1, grids);
                    break;

                case 'e':

                    FillColumnSegment(0, false, grids);
                    break;

                case 'f':

                    FillColumnSegment(0, true, grids);
                    break;

                case 'g':

                    FillRowSegment((grids.GetLength(0) - 1) / 2, grids);
                    break;
            }
        }
    }
}