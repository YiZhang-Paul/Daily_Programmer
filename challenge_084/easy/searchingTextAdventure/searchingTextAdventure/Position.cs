using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace searchingTextAdventure {
    class Position {

        public int Row { get; set; }
        public int Column { get; set; }

        public Position(int row, int column) {

            Row = row;
            Column = column;
        }
        /// <summary>
        /// check if two positions are the same
        /// </summary>
        public bool IsSame(Position target) {

            return this.Row == target.Row && this.Column == target.Column;
        }
    }
}