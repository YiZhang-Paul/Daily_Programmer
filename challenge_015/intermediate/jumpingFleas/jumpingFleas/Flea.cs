using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace jumpingFleas {
    class Flea {

        private Random Random { get; set; }

        public Tuple<int, int> Location { get; private set; }

        public Flea(int row, int column, Random random) {

            Location = new Tuple<int, int>(row, column);
            Random = random;
        }

        private Tuple<int, int>[] GetDestinations(int maxRow, int maxColumn) {

            int row = Location.Item1;
            int column = Location.Item2;
            var destinations = new List<Tuple<int, int>>();

            if(row > 0) destinations.Add(new Tuple<int, int>(row - 1, column));
            if(row < maxRow - 1) destinations.Add(new Tuple<int, int>(row + 1, column));
            if(column > 0) destinations.Add(new Tuple<int, int>(row, column - 1));
            if(column < maxColumn - 1) destinations.Add(new Tuple<int, int>(row, column + 1));

            return destinations.ToArray();
        }

        public void Jump(int maxRow, int maxColumn) {

            var destinations = GetDestinations(maxRow, maxColumn);
            Location = destinations[Random.Next(0, destinations.Length)];
        }
    }
}