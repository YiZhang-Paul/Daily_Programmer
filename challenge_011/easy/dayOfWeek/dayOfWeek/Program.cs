using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dayOfWeek {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(DayOfWeek(2017, 10, 30));
            Console.WriteLine(DayOfWeek(2016, 2, 29));
            Console.WriteLine(DayOfWeek(2015, 2, 28));
            Console.WriteLine(DayOfWeek(29, 4, 12));
            Console.WriteLine(DayOfWeek(570, 11, 30));
            Console.WriteLine(DayOfWeek(1066, 9, 25));
            Console.WriteLine(DayOfWeek(1776, 7, 4));
            Console.WriteLine(DayOfWeek(1933, 1, 30));
            Console.WriteLine(DayOfWeek(1953, 3, 6));
            Console.WriteLine(DayOfWeek(2100, 1, 9));
            Console.WriteLine(DayOfWeek(2202, 12, 15));
            Console.WriteLine(DayOfWeek(7032, 3, 26));
        }
        /// <summary>
        /// calculate day of week for a given date
        /// </summary>
        public static string DayOfWeek(int year, int month, int day) {

            year -= month <= 2 ? 1 : 0;
            month += month <= 2 ? 12 : 0;

            return new string[] {
            
                "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
            
            }[(day + 13 * (month + 1) / 5 + year + year / 4 + year / 400 - year / 100) % 7];
        }
    }
}