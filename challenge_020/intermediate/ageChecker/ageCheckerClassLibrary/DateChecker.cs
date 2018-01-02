using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace ageCheckerClassLibrary {
    public class DateChecker : IDateChecker {

        private IMonthChecker MonthChecker { get; set; }
        private IYearChecker YearChecker { get; set; }

        public DateChecker(IMonthChecker monthChecker, IYearChecker yearChecker) {

            MonthChecker = monthChecker;
            YearChecker = yearChecker;
        }

        private int[] ParseNumbers(string date) {

            if(!Regex.IsMatch(date, @"\d")) {
            
                return new int[0];
            }

            return Regex.Matches(date, @"\d+")
                        .Cast<Match>()
                        .Select(number => int.Parse(number.Value))
                        .ToArray();
        }

        public DateTime ParseDate(string date) {

            int[] numbers = ParseNumbers(date);
            
            if(numbers.Length != 3 || numbers.Any(number => number <= 0)) {

                throw new ArgumentException("Invalid Date String.");
            }

            try {

                return new DateTime(numbers[0], numbers[1], numbers[2]);
            }
            catch(ArgumentOutOfRangeException) {

                throw new ArgumentOutOfRangeException("Date Value Out of Range.");
            }
        }

        public int GetElapsedDaysInCurrentYear(DateTime date) {

            if(date.Month == 1) {

                return date.Day;
            }

            int elapsedDays = date.Day;

            foreach(int month in Enumerable.Range(1, date.Month - 1)) {

                elapsedDays += MonthChecker.GetDaysInMonth(month, date.Year);
            }

            return elapsedDays;
        }

        public int GetRemainingDaysInCurrentYear(DateTime date) {

            return YearChecker.GetDaysInYear(date.Year) - GetElapsedDaysInCurrentYear(date) + 1;
        }

        public int GetElapsedDays(DateTime start, DateTime end) {

            if(start > end) {

                throw new ArgumentException("Start Date Should Precede End Date");
            }

            if(start.Year == end.Year) {

                return start == end ? 0 : GetElapsedDaysInCurrentYear(end) - GetElapsedDaysInCurrentYear(start);
            }

            int elapsedDays = GetRemainingDaysInCurrentYear(start) + GetElapsedDaysInCurrentYear(end);

            foreach(int year in Enumerable.Range(start.Year + 1, end.Year - start.Year - 1)) {

                elapsedDays += YearChecker.GetDaysInYear(year);
            }

            return elapsedDays;
        }
    }
}