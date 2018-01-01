using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ageCheckerClassLibrary {
    public interface IYearChecker {

        bool IsLeapYear(int year);
    }
}