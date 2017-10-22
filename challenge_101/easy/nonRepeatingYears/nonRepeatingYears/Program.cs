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
            //bonus input
            Console.WriteLine(string.Join("\n", MaxYearRuns(1000, 2013, true).Select(run => "Length: " + run.Length + "\n" + string.Join(" ", run))));
            Console.WriteLine(string.Join("\n", MaxYearRuns(1000, 2013).Select(run => "Length: " + run.Length + "\n" + string.Join(" ", run))));
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
        /*
         * find longest runs of years with/without repeating digits
         * @param {int} [start] - start year
         * @param {int} [end] - end year
         * @param {bool} [repeat] - indicate type of run to find
         *
         * @return {List<int[]>} [longest runs of years with/without non-repeating digits]
         */
        public static List<int[]> MaxYearRuns(int start, int end, bool repeat = false) {

            var allRun = new List<int[]>();
            var curRun = new List<int>();

            for(int i = start; i <= end; i++) {

                if(repeat ? HasRepeatDigits(i) : !HasRepeatDigits(i)) {

                    curRun.Add(i);
                }
                else if(curRun.Count > 0) {
                    //keep record of current run and start recording next run
                    allRun.Add(curRun.ToArray());
                    curRun = new List<int>();
                }
            }
            //find length of longest runs
            int maxRun = allRun.Max(run => run.Length);

            return allRun.Where(run => run.Length == maxRun).ToList();
        }
    }
}