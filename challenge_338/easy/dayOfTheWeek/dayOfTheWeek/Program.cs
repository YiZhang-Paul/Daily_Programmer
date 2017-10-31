using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dayOfTheWeek {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(GetDayInWeek("2017 10 30"));
            Console.WriteLine(GetDayInWeek("2016 2 29"));
            Console.WriteLine(GetDayInWeek("2015 2 28"));
            Console.WriteLine(GetDayInWeek("29 4 12"));
            Console.WriteLine(GetDayInWeek("570 11 30"));
            Console.WriteLine(GetDayInWeek("1066 9 25"));
            Console.WriteLine(GetDayInWeek("1776 7 4"));
            Console.WriteLine(GetDayInWeek("1933 1 30"));
            Console.WriteLine(GetDayInWeek("1953 3 6"));
            Console.WriteLine(GetDayInWeek("2100 1 9"));
            Console.WriteLine(GetDayInWeek("2202 12 15"));
            Console.WriteLine(GetDayInWeek("7032 3 26"));
        }
        /// <summary>
        /// retrieve total days in a month, in a given year
        /// </summary>
        public static int GetDaysInMonth(int year, int month) { 
        
            var daysInMonth = new Dictionary<int, int> {
            
                {1, 31}, {2, IsLeapYear(year) ? 29 : 28}, {3, 31}, {4, 30}, {5, 31},
                {6, 30}, {7, 31}, {8, 31}, {9, 30}, {10, 31}, {11, 30}, {12, 31}
            };

            return daysInMonth[month];
        }
        /// <summary>
        /// check if a year is leap year
        /// </summary>
        public static bool IsLeapYear(int year) { 
        
            if(year % 4 != 0) {

                return false;
            }
            //leap year if divisible by 4 but not 100, or by all 4, 100 and 400
            return year % 100 != 0 || year % 400 == 0;
        }
        /// <summary>
        /// calculate total elapsed days in a given year
        /// </summary>
        public static int ElapsedDayInYear(int year, int month, int day) {

            int elapsed = 0;

            for(int i = 1; i < month; i++) {

                elapsed += GetDaysInMonth(year, i);
            }

            return elapsed + day;
        }
        /// <summary>
        /// calculate total remaining days in a given year
        /// </summary>
        public static int RestDayInYear(int year, int month, int day) {

            return (IsLeapYear(year) ? 366 : 365) - ElapsedDayInYear(year, month, day);
        }
        /// <summary>
        /// calculate total day passed/prior to 1970 January 1st
        /// </summary>
        public static int TotalElapsedDay(int year, int month, int day) {

            int elapsed = year >= 1970 ? ElapsedDayInYear(year, month, day) : RestDayInYear(year, month, day);
            int start = year >= 1970 ? 1970 : year + 1;
            int end = year >= 1970 ? year - 1 : 1969;
 
            for(int i = start; i <= end; i++) {
            
                elapsed += IsLeapYear(i) ? 366 : 365;
            }
            
            return elapsed;
        }
        /// <summary>
        /// determine day in the week for a given date string
        /// </summary>
        public static string GetDayInWeek(string dateString) {
        
            int[] dates = dateString.Split(' ').Select(Int32.Parse).ToArray();
            int elapsed = TotalElapsedDay(dates[0], dates[1], dates[2]);
            var daysInWeek = new string[] { 
                
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            };
            
            return daysInWeek[(dates[0] < 1970 ? (10 - elapsed % 7) % 7 : (3 + elapsed % 7) % 7) - 1];
        }
    }
}