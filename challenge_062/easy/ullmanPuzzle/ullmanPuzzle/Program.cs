using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ullmanPuzzle {
    class Program {
        static void Main(string[] args) {

            double[] input = new double[] { 18.1, 55.1, 91.2, 74.6, 73.0, 85.9, 73.9, 81.4, 87.1, 49.3, 88.8, 5.7, 26.3, 7.1, 58.2, 31.7, 5.8, 76.9, 16.5, 8.1, 48.3, 6.8, 92.4, 83.0, 19.6 };
            Console.WriteLine(HasSubset(input, 98.2, 3));
        }
        /// <summary>
        /// check if there exists a subset of given size whose sum is smaller than given limit
        /// </summary>
        /// <param name="limit">maximum sum limit</param>
        /// <param name="size">size of subset</param>
        public static bool HasSubset(double[] list, double limit, int size) { 

            if(list.Length < size) {

                return false;
            }

            return list.OrderBy(number => number).Take(size).Sum() < limit;
        }
    }
}