using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ageCheckerClassLibrary {
    public interface IDateChecker {

        DateTime ParseDate(string date);
        int GetElapsedMonthsBetweenDates(DateTime start, DateTime end);
        int GetElapsedDaysInCurrentYear(DateTime date);
        int GetRemainingDaysInCurrentYear(DateTime date);
        int GetElapsedDaysBetweenDates(DateTime start, DateTime end);
    }
}