using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace studentManagement {
    class Program {
        static void Main(string[] args) {
            //challenge input
            string grades1 = @"JON 19 14 15 15 16
                               JEREMY 15 11 10 15 16
                               JESSE 19 17 20 19 18";
            string grades2 = @"ABIGAIL 11 3 5 20 4 2 8 17 4 5
                               ALEXANDER 2 12 20 0 6 10 3 4 9 7
                               AVA 11 15 2 19 14 5 16 18 15 19
                               ETHAN 6 12 0 0 5 11 0 11 12 15
                               ISABELLA 16 0 10 7 20 20 7 2 0 1
                               JACOB 2 14 17 7 1 11 16 14 14 7
                               JAYDEN 10 10 3 16 15 16 8 17 15 3
                               MADISON 10 11 19 4 12 15 7 4 18 13
                               SOPHIA 5 17 14 7 1 17 18 8 1 2
                               WILLIAM 12 12 19 9 4 3 0 4 13 14";

            GradeManager manager = new GradeManager();
            manager.ReadGrades(grades1);
            Console.WriteLine(manager.GetClassAverage());
        }
    }
}