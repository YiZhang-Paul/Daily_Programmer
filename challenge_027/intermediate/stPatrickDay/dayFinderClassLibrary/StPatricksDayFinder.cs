using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dayFinderClassLibrary {
    public class StPatricksDayFinder {

        private const int _month = 3;
        private const int _dayInMonth = 17;

        private IDayFinder DayFinder { get; set; }

        public StPatricksDayFinder(IDayFinder dayFinder) {

            DayFinder = dayFinder;
        }

        public string GetDayOfWeek(int year) {

            return DayFinder.GetDayOfWeek(_month, _dayInMonth, year);
        }

        public bool IsDayOfWeek(string dayOfWeek, int year) {

            return dayOfWeek == DayFinder.GetDayOfWeek(_month, _dayInMonth, year);
        }

        private IEnumerable<int> GetYearsInCentury(int year) {

            return Enumerable.Range(year / 100 * 100, 100);
        }

        public int TotalDayOfWeeksInCentury(string dayOfWeek, int yearInCentury) {

            var years = GetYearsInCentury(yearInCentury);

            return years.Where(year => IsDayOfWeek(dayOfWeek, year)).Count();
        }
    }
}