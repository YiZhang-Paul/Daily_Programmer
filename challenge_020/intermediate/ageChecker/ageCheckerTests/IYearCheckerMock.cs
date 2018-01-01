using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ageCheckerClassLibrary;

namespace ageCheckerTests {
    public interface IYearCheckerMock : IYearChecker {

        int LeapYear { get; set; }
        int NonLeapYear { get; set; }
    }
}