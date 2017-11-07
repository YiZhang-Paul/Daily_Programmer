using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dayOfYear {
    class Program {
        static void Main(string[] args) {

            //challenge & bonus input
            Console.WriteLine(GetDayOfYear(2017, 1, 1));
            Console.WriteLine(GetDayOfYear(2017, 12, 31));
            Console.WriteLine(GetDayOfYear(2016, 12, 31));
        }
        /// <summary>
        /// check if a year is leap year
        /// </summary>
        public static bool IsLeapYear(int year) { 
        
            if(year % 4 != 0) {

                return false;
            }
            //divisible by 4 but not 100, or by all 4, 100 and 400
            return year % 100 != 0 || year % 400 == 0;
        }
        /// <summary>
        /// retrieve total number of days in a given month
        /// </summary>
        public static int GetDaysInMonth(int month, int year) { 
        
            if(month == 2) {

                return IsLeapYear(year) ? 29 : 28;
            }

            return new Dictionary<int, int> {
            
                {1, 31}, {3, 31}, {4, 30}, {5, 31}, 
                {6, 30}, {7, 31}, {8, 31}, {9, 30}, 
                {10, 31}, {11, 30}, {12, 31}
                
            }[month];
        }
        /// <summary>
        /// calculate day of year for a given date
        /// </summary>
        public static int GetDayOfYear(int year, int month, int day) {

            int dayOfYear = day;

            for(int i = 1; i < month; i++) {

                dayOfYear += GetDaysInMonth(i, year);
            }

            return dayOfYear;
        }
    }
}