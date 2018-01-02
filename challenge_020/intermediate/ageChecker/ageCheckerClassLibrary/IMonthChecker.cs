using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ageCheckerClassLibrary {
    public interface IMonthChecker {

        int GetDaysInMonth(int month, int year);
        int GetElapsedMonths(DateTime start, DateTime end);
    }
}