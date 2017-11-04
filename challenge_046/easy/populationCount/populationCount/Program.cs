using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace populationCount {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(GetPopulation(23));
        }
        /// <summary>
        /// calculate population count of a number
        /// </summary>
        public static int GetPopulation(int number) {

            return Convert.ToString(number, 2).Count(digit => digit == '1');
        }
    }
}