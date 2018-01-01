using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ageCheckerClassLibrary;

namespace mainProgram {
    public class AgeChecker {

        private IDateChecker DateChecker { get; set; }
        private ITimeConverter TimeConverter { get; set; }

        public AgeChecker(IDateChecker dateChecker, ITimeConverter timeConverter) {

            DateChecker = dateChecker;
            TimeConverter = timeConverter;
        }

        public string GetResult(string dateString) {

            DateTime date;

            try {

                date = DateChecker.ParseDate(dateString);
            }
            catch(Exception) {

                return "Invalid Date String.";
            }

            int elapsedMonths = DateChecker.GetElapsedMonthsBetweenDates(date, DateTime.Today);
            int elapsedDays = DateChecker.GetElapsedDaysBetweenDates(date, DateTime.Today);
            int hours = TimeConverter.DayToHour(elapsedDays);
            int minutes = TimeConverter.HourToMinutes(hours);

            return "Months : " + elapsedMonths + ", Days : " + elapsedDays + ", Hours : " + hours + ", and Minutes : " + minutes + ".";
        }
    }
}