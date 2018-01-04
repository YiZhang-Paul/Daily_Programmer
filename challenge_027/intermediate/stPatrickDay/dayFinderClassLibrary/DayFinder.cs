using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dayFinderClassLibrary {
    public class DayFinder : IDayFinder {

        private string[] _daysOfWeek = { 
                                       
            "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
        };

        public int GetDayOfWeekIndex(int month, int day, int year) {

            year -= month <= 2 ? 1 : 0;
            month += month <= 2 ? 12 : 0;

            return (day + 13 * (month + 1) / 5 + year + year / 4 + year / 400 - year / 100) % 7;
        }
        /// <summary>
        /// Zeller's congruence implementation
        /// </summary>
        public string GetDayOfWeek(int month, int day, int year) {

            return _daysOfWeek[GetDayOfWeekIndex(month, day, year)];
        }
    }
}