using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ageCheckerClassLibrary {
    public class TimeConverter : ITimeConverter {

        public int DayToHour(int days) {

            return days * 24;
        }

        public int HourToMinutes(int hours) {

            return hours * 60;
        }
    }
}