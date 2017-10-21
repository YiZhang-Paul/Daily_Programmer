using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace sleepCycleEstimator {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(string.Join(" ", GetBedTime("6:15 AM", 4, 0)));
            //bonus input
            Console.WriteLine(string.Join(" ", GetBedTime("6:15 AM")));
            //Console.WriteLine(GetWakeUpTime());
        }
        /*
         * estimate time to go to sleep
         * @param {string} [wake] - time to wake up
         * @param {int} [duration] - total sleep time (in hours)
         * @param {int} [asleep] - time used to fall asleep (in minutes)
         *
         * @return {string[]} [possible bed times]
         */
        public static string[] GetBedTime(string wake, int duration = 4, int asleep = 40) {

            DateTime wakeUpTime;

            if(DateTime.TryParse(wake, out wakeUpTime)) {

                wakeUpTime = wakeUpTime.AddHours(Math.Floor(duration / 1.5) * -1.5);
                string[] bedTimes = new string[4];

                for(int i = 0; i < 4; i++) {

                    double totalDuration = (i + 1) * -1.5 - (double)asleep / 60;
                    bedTimes[i] = wakeUpTime.AddHours(totalDuration).ToShortTimeString();
                }

                return bedTimes.Reverse().ToArray();
            }

            return new string[] { "NULL" };
        }
    }
}