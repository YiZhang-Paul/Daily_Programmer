using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace minefield {
    class Minefield {

        private Random _random = new Random();

        public char[][] Field { get; private set; }

        public Minefield(int dimension, int mines) {

            Field = GetField(dimension, mines);
        }
        /// <summary>
        /// calculate maximum number of mines allowed on minefield
        /// </summary>
        public static int GetMaxMines(int dimension) {

            return (int)Math.Pow(Math.Ceiling((double)dimension / 3), 2);
        }
        /// <summary>
        /// generate minefield of given dimension
        /// </summary>
        public char[][] GetField(int dimension, int mines) { 
        
            var field = new char[dimension][];

            for(int i = 0; i < field.Length; i++) {

                field[i] = Enumerable.Repeat('0', dimension).ToArray();
            }

            PlaceMines(field, mines);

            return field;
        }

        public LinkedList<Tuple<int, int>> GetSubArea(int dimension) { 
        
            int totalArea = GetMaxMines(dimension);
            var areas = new LinkedList<Tuple<int, int>>();

            for(int i = 0, row = 0, column = 0; i < totalArea; i++) {

                areas.AddLast(new Tuple<int, int>(row, column));
                column += 3;

                if(column > dimension - 1) {

                    column = 0;
                    row += 3;
                }
            }

            return areas;
        }

        public string Show() {

            return string.Join("\n", Field.Select(row => string.Join("", row)));
        }
    }
}