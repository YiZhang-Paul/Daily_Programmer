using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ageCheckerClassLibrary {
    public class MonthChecker {

        private Dictionary<int, int> _daysInMonth = new Dictionary<int, int>() { 
                                     
            { 1, 31 },
            { 3, 31 },
            { 4, 30 },
            { 5, 31 },
            { 6, 30 },
            { 7, 31 },
            { 8, 31 },
            { 9, 30 },
            { 10, 31 },
            { 11, 30 },
            { 12, 31 }
        };

        private bool IsLeapYear(int year) { 
        
            if(year % 4 != 0) {

                return false;
            }

            return year % 100 != 0 || year % 400 == 0;
        }

        public int GetDaysInMonth(int month, int year) {

            if(month == 2) {

                return IsLeapYear(year) ? 29 : 28;
            }

            return _daysInMonth[month];
        }
    }
}