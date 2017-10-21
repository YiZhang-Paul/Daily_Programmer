using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace nonRepeatingYears {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(string.Join(" ", NonRepeatDigitYears(1980, 1987)));
        }
        /*
         * check if a year has repeating digits
         * @param {int} [year] - year to check
         *
         * @return {bool} [test result]
         */
        public static bool HasRepeatDigits(int year) {

            var digits = new HashSet<int>();
            int total = 0;

            while(year != 0) {
            
                digits.Add(year % 10);
                year = (year - year % 10) / 10;
                total++;
            }

            return digits.Count != total;
        }
        /*
         * find all years without repeating digits within a given range of years
         * @param {int} [start] - start year
         * @param {int} [end] - end year
         *
         * @return {int[]} [all years without repeating digits]
         */
        public static int[] NonRepeatDigitYears(int start, int end) {

            return new int[end - start + 1].Select((year, index) => start + index)
                                           .Where(year => !HasRepeatDigits(year))
                                           .ToArray();
        }
    }
}