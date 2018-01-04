using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using dayFinderClassLibrary;

namespace program {
    class Program {
        static void Main(string[] args) {

            //challenge & bonus input
            var finder = new StPatricksDayFinder(new DayFinder());
            Console.WriteLine(2012 + " " + finder.GetDayOfWeek(2012));
            Console.WriteLine(2010 + " " + finder.GetDayOfWeek(2010));
            Console.WriteLine(2018 + " " + finder.GetDayOfWeek(2018));
            Console.WriteLine("Total Patrick's Days on Saturday in This Century: " + finder.TotalDayOfWeeksInCentury("Saturday", 2018));
        }
    }
}