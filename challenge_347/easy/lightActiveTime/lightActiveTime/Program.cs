using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LightTrackerClassLibrary;

namespace lightActiveTime {
    class Program {
        static void Main(string[] args) {

            var tracker = new LightTracker();

            //default input
            string intervals = @"1 3
                                 2 3
                                 4 5";
            Console.WriteLine(tracker.GetActiveTime(intervals));

            //challenge input
            intervals = @"2 4  
                          3 6  
                          1 3  
                          6 8";
            Console.WriteLine(tracker.GetActiveTime(intervals));
            intervals = @"6 8
                          5 8
                          8 9
                          5 7
                          4 7";
            Console.WriteLine(tracker.GetActiveTime(intervals));

            //bonus input
            intervals = @"15 18
                          13 16
                          9 12
                          3 4
                          17 20
                          9 11
                          17 18
                          4 5
                          5 6
                          4 5
                          5 6
                          13 16
                          2 3
                          15 17
                          13 14";
            Console.WriteLine(tracker.GetActiveTime(intervals));
        }
    }
}