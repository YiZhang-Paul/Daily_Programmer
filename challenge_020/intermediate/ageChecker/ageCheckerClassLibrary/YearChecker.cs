using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ageCheckerClassLibrary {
    public class YearChecker : IYearChecker {

        public bool IsLeapYear(int year) {

            if(year % 4 != 0) {

                return false;
            }

            return year % 100 != 0 || year % 400 == 0;
        }

        public int GetDaysInYear(int year) {

            return IsLeapYear(year) ? 366 : 365;
        }
    }
}