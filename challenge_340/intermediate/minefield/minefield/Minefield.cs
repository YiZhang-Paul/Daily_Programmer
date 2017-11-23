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

            Layout = GetField(dimension);
            PopulateField(mines);
        }
        /// <summary>
        /// calculate total number of 3x3 blocks on minefield
        /// </summary>
        public static int GetBlockCount(int dimension) {

            return (int)Math.Pow(Math.Ceiling((double)dimension / 3), 2);
        }

        public bool IsValidRow(int row) {

            return row >= 0 && row < Layout.Length;
        }

        public bool IsValidColumn(int column) {

            return column >= 0 && column < Layout.Length;
        }

        public bool IsValidPosition(Point position) {

            return IsValidRow(position.Y) && IsValidColumn(position.X);
        }

        public char GetSquare(Point position) { 
        
            if(!IsValidPosition(position)) {

                return '\0';
            }

            return Layout[position.Y][position.X];
        }

        public void SetSquare(Point position, char content) { 
        
            if(IsValidPosition(position)) {

                Layout[position.Y][position.X] = content;
            }
        }

        public char[][] AddBorders(char[][] field) {

            var newField = new List<char[]> { Enumerable.Repeat('+', field.Length + 2).ToArray() };

            for(int i = 0; i < field.Length; i++) {

                char[] left = new char[] { i == field.Length - 1 ? 'M' : '+' };
                char[] right = new char[] { i == 0 ? '0' : '+' };
                newField.Add(left.Concat(field[i]).Concat(right).ToArray());
            }

            newField.Add(newField.First());

            return newField.ToArray();
        }
        /// <summary>
        /// generate empty minefield of given dimension wrapped in borders
        /// </summary>
        public char[][] GetField(int dimension) { 
        
            var field = new char[dimension][];

            for(int i = 0; i < field.Length; i++) {

                field[i] = Enumerable.Repeat('0', dimension).ToArray();
            }

            return AddBorders(field);
        }
        /// <summary>
        /// retrieve top-left square coordinates of all 3x3 blocks
        /// </summary>
        public LinkedList<Point> GetBlocks(int total) { 
        
            var blocks = new LinkedList<Point>();

            for(int i = 0, row = 1, column = 1; i < total; i++) {

                blocks.AddLast(new Point(column, row));
                column += 3;

                if(column >= Layout.Length - 1) {
                
                    column = 1;
                    row += 3;
                }
            }

            return blocks;
        }
        /// <summary>
        /// randomly pick a given number of blocks to place mines
        /// </summary>
        public LinkedList<Point> PickBlocks(int mines) {

            int blockCount = GetBlockCount(Layout.Length - 2);
            var blocks = GetBlocks(blockCount);

            for(int i = 0; i < blockCount - mines; i++) {

                int index = _random.Next(0, blocks.Count);
                blocks.Remove(blocks.ElementAt(index));
            }

            return blocks;
        }
        /// <summary>
        /// place one mine in random position of a given block
        /// </summary>
        public void PlaceMine(Point block, Point start, Point end) {

            Point position;

            do {

                int row = Math.Min(block.Y + _random.Next(0, 3), Layout.Length - 2);
                int column = Math.Min(block.X + _random.Next(0, 3), Layout.Length - 2);
                position = new Point(column, row);

            } while(position == start || position == end);

            SetSquare(position, '*');
        }
        /// <summary>
        /// populate minefield with given number of mines
        /// </summary>
        public void PopulateField(int mines) {

            var start = new Point(Layout.Length - 2, 1);
            var end = new Point(1, Layout.Length - 2);

            foreach(var block in PickBlocks(mines)) {

                PlaceMine(block, start, end);
            }
        }

        public string Show() {

            return string.Join("\n", Layout.Select(row => string.Join("", row)));
        }
    }
}