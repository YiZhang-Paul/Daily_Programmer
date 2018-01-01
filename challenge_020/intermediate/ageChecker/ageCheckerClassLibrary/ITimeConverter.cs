using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ageCheckerClassLibrary {
    public interface ITimeConverter {

        int DayToHour(int days);
        int HourToMinutes(int hours);
    }
}