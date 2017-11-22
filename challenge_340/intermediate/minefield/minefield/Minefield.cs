using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;

namespace minefield {
    class Minefield {

        private Random _random = new Random();

        public char[][] Layout { get; private set; }

        public Minefield(int dimension, int mines) {

            Layout = GetField(dimension, mines);
        }
        /// <summary>
        /// calculate total number of 3x3 blocks on minefield
        /// </summary>
        public static int GetBlockCount(int dimension) {

            return (int)Math.Pow(Math.Ceiling((double)dimension / 3), 2);
        }

        public char GetSquare(Point position) {

            return Layout[position.Y][position.X];
        }

        public void SetSquare(Point position, char content) { 
        
            Layout[position.Y][position.X] = content;
        }
        /// <summary>
        /// retrieve top-left coordinate of all 3x3 blocks
        /// </summary>
        public LinkedList<Point> GetBlocks(int dimension, int total) { 
        
            var blocks = new LinkedList<Point>();

            for(int i = 0, row = 0, column = 0; i < total; i++) {

                blocks.AddLast(new Point(column, row));
                column += 3;

                if(column > dimension - 1) {

                    column = 0;
                    row += 3;
                }
            }

            return blocks;
        }
        /// <summary>
        /// randomly pick a given number of blocks to place mines
        /// </summary>
        public LinkedList<Point> PickBlocks(int dimension, int mines) {

            int blockCount = GetBlockCount(dimension);
            var blocks = GetBlocks(dimension, blockCount);

            for(int i = 0; i < blockCount - mines; i++) {

                int index = _random.Next(0, blocks.Count);
                blocks.Remove(blocks.ElementAt(index));
            }

            return blocks;
        }

        public void PlaceMines(char[][] field, int mines) {

            int dimension = field.Length;
            var start = new Point(dimension - 1, 0);
            var end = new Point(0, dimension - 1);

            foreach(var block in PickBlocks(dimension, mines)) {

                Point minePosition;

                do {

                    int row = Math.Min(block.Y + _random.Next(0, 3), dimension - 1);
                    int column = Math.Min(block.X + _random.Next(0, 3), dimension - 1);
                    minePosition = new Point(column, row);

                } while(minePosition == start || minePosition == end);

                field[minePosition.Y][minePosition.X] = '*';
            }
        }
        
        public char[][] AddBorder(char[][] field) {

            var newField = new List<char[]> { Enumerable.Repeat('+', field.Length + 2).ToArray() };

            for(int i = 0; i < field.Length; i++) {

                char[] left = new char[] { i == field.Length - 1 ? 'M' : '+' };
                char[] right = new char[] { i == 0 ? '0' : '+' };
                newField.Add(left.Concat(field[i]).Concat(right).ToArray());
            }

            return newField.Concat(new List<char[]> { newField.First().ToArray() }).ToArray();
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

            return AddBorder(field);
        }

        public string Show() {

            return string.Join("\n", Layout.Select(row => string.Join("", row)));
        }
    }
}