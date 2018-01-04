using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dayFinderClassLibrary {
    public interface IDayFinder {

        int GetDayOfWeekIndex(int month, int day, int year);
        string GetDayOfWeek(int month, int day, int year);
    }
}