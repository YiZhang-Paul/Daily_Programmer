using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ageCheckerClassLibrary {
    public class MonthChecker : IMonthChecker {

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

        private IYearChecker YearChecker { get; set; }

        public MonthChecker(IYearChecker yearChecker) {

            YearChecker = yearChecker;
        }

        public int GetDaysInMonth(int month, int year) {

            if(month == 2) {

                return YearChecker.IsLeapYear(year) ? 29 : 28;
            }

            return _daysInMonth[month];
        }
    }
}