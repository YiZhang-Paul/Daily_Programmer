using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace walkaroundRasterizer {
    class Grid {

        public int Row { get; private set; }
        public int Column { get; private set; }

        public Grid() { 
        }
        /// <param name="row">row on grid</param>
        /// <param name="column">column on grid</param>
        public Grid(int row, int column) {

            Row = row;
            Column = column;
        }
    }
}