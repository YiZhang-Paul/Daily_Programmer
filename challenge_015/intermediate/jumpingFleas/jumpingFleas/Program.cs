using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace jumpingFleas {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(CountAverageUnoccupiedGrids(100, 50, 30, 30));
        }

        private static Flea[] PutFleas(int row, int column, Random random) { 
        
            var fleas = new List<Flea>();

            for(int i = 0; i < row; i++) {

                for(int j = 0; j < column; j++) {

                    fleas.Add(new Flea(i, j, random));
                }
            }

            return fleas.ToArray();
        }

        private static void FleasJump(Flea[] fleas, int row, int column) { 
        
            foreach(var flea in fleas) {

                flea.Jump(row, column);
            }
        }

        private static int CountEmptyGrids(Flea[] fleas, int row, int column) {

            var occupied = new HashSet<string>();

            foreach(var flea in fleas) {

                occupied.Add(flea.Location.Item1 + "," + flea.Location.Item2);
            }

            return row * column - occupied.Count;
        }

        private static double CountAverageUnoccupiedGrids(int simulations, int bellRings, int row, int column) {

            var unoccupied = 0;
            var random = new Random();

            for(int i = 0; i < simulations; i++) {

                var fleas = PutFleas(row, column, random);

                for(int j = 0; j < bellRings; j++) {

                    FleasJump(fleas, row, column);
                }

                unoccupied += CountEmptyGrids(fleas, row, column);
            }

            return (double)unoccupied / simulations;
        }
    }
}