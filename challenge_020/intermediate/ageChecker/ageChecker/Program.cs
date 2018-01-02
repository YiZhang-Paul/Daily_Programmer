using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ageCheckerClassLibrary;

namespace ageChecker {
    class Program {
        static void Main(string[] args) {

            //challenge input
            var yearChecker = new YearChecker();
            var monthChecker = new MonthChecker(yearChecker);
            var dateChecker = new DateChecker(monthChecker, yearChecker);
            var timeConverter = new TimeConverter();
            var ageChecker = new AgeChecker(dateChecker, monthChecker, timeConverter);
            Console.WriteLine(ageChecker.GetResult("2016/06/20"));
            Console.WriteLine(ageChecker.GetResult("1992/06/20"));
        }
    }
}