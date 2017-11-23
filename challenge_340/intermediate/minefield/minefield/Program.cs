using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace minefield {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine(new Minefield(5, 5).Show());
            //prompt for minefield dimension and total number of mines
            int dimension = GetDimension();
            int mineLimit = Minefield.GetBlockCount(dimension);
            int totalMines = GetTotalMines(mineLimit); 
            //generate minfield
            Console.WriteLine("Generating Minefield of Dimension {0} with {1} Mines:", dimension, totalMines);
            var minefield = new Minefield(dimension, totalMines);
            Console.WriteLine(minefield.Show());
            //prompt for robot commands
            string command = GetCommand();
            //get result
            Console.WriteLine("\n" + new Robot().GetResult(minefield, command));
        }
        /// <summary>
        /// retrieve minefield dimension
        /// </summary>
        private static int GetDimension() {

            int dimension;
            Console.WriteLine("Please Enter Desired Minefield Dimension: (2 - 10 Inclusive)");

            if(Int32.TryParse(Console.ReadLine().Trim(), out dimension)) {

                return dimension > 1 && dimension < 11 ? dimension : GetDimension();
            }

            return GetDimension();
        }
        /// <summary>
        /// retrieve total number of mines on minefield
        /// </summary>
        private static int GetTotalMines(int limit) {

            int total;
            Console.WriteLine("Please Enter Desired Number of Mines: (1 - {0} Inclusive)", limit);

            if(Int32.TryParse(Console.ReadLine().Trim(), out total)) {

                return total > 0 && total <= limit ? total : GetTotalMines(limit);
            }

            return GetTotalMines(limit);
        }
        /// <summary>
        /// retrieve robot command
        /// </summary>
        private static string GetCommand() {

            Console.WriteLine("Please Enter Desired Robot Command:");
            string command = Console.ReadLine().Trim();

            return command != "" ? command : GetCommand();
        }
    }
}