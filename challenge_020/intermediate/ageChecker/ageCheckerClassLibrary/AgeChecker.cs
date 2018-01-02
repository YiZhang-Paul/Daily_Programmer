using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ageCheckerClassLibrary {
    public class AgeChecker {

        private IDateChecker DateChecker { get; set; }
        private IMonthChecker MonthChecker { get; set; }
        private ITimeConverter TimeConverter { get; set; }

        public AgeChecker(IDateChecker dateChecker, IMonthChecker monthChecker, ITimeConverter timeConverter) {

            DateChecker = dateChecker;
            MonthChecker = monthChecker;
            TimeConverter = timeConverter;
        }

        private string FormatResult(int months, int days, int hours, int minutes) {

            return string.Join("", new string[] { 
            
                "Months : " + months,
                ", Days : " + days,
                ", Hours : " + hours,
                ", and Minutes : " + minutes + "."
            });
        }

        public string GetResult(string input) {

            DateTime date;

            try {

                date = DateChecker.ParseDate(input);
            }
            catch(Exception) {

                return "Invalid Date String.";
            }

            int months = MonthChecker.GetElapsedMonths(date, DateTime.Today);
            int days = DateChecker.GetElapsedDays(date, DateTime.Today);
            int hours = TimeConverter.DayToHour(days);
            int minutes = TimeConverter.HourToMinutes(hours);

            return FormatResult(months, days, hours, minutes);
        }
    }
}