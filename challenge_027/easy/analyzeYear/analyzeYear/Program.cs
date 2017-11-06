using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace analyzeYear {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(AnalyzeYear(1996) + "\n");
            Console.WriteLine(AnalyzeYear(1900));
        }
        /// <summary>
        /// check if a year is a leap year
        /// </summary>
        public static bool IsLeapYear(int year) { 
        
            if(year % 4 != 0) {

                return false;
            }
            //divided by 4 but not 100, or by all 4, 100 and 400
            return year % 100 != 0 || year % 400 == 0; 
        }
        /// <summary>
        /// find century in which the year is included
        /// </summary>
        public static int GetCentury(int year) {

            int century = (year - year % 100) / 100;

            return year == century * 100 ? century : century + 1;
        }
        /// <summary>
        /// find out century in which the year is included
        /// and determine if the year is a leap year
        /// </summary>
        public static string AnalyzeYear(int year) {

            return string.Join("\n", new string[] {
            
                "Enter Year: " + year,
                "Century: " + GetCentury(year),
                "Leap Year: " + (IsLeapYear(year) ? "Yes" : "No")
            });
        }
    }
}