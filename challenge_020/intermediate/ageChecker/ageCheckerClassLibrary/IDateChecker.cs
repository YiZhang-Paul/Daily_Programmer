using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ageCheckerClassLibrary {
    public interface IDateChecker {

        DateTime ParseDate(string date);
        int GetElapsedDaysInCurrentYear(DateTime date);
        int GetRemainingDaysInCurrentYear(DateTime date);
        int GetElapsedDays(DateTime start, DateTime end);
    }
}