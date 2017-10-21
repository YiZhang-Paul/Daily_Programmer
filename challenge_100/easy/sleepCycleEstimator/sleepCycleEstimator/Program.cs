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
            Console.WriteLine(string.Join(" ", GetWakeUpTime("9:15 PM")));
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

                var bedTime = wakeUpTime.AddHours(Math.Floor(duration / 1.5) * -1.5);
                string[] bedTimes = new string[4];

                for(int i = 0; i < 4; i++) {

                    double totalDuration = (i + 1) * 1.5 + (double)asleep / 60;
                    bedTimes[i] = bedTime.AddHours(totalDuration * -1).ToShortTimeString();
                }

                return bedTimes.Reverse().ToArray();
            }

            return new string[] { "NULL" };
        }
        /*
         * estimate wake up time
         * @param {string} [bed] - time to go to sleep
         * @param {int} [duration] - total sleep time (in hours)
         * @param {int} [asleep] - time used to fall asleep (in minutes)
         *
         * @return {string[]} [possible wake up times]
         */
        public static string[] GetWakeUpTime(string bed, int duration = 4, int asleep = 40) {

            DateTime bedTime;

            if(DateTime.TryParse(bed, out bedTime)) {

                var wakeUpTime = bedTime.AddHours(Math.Floor(duration / 1.5) * 1.5);
                string[] wakeUpTimes = new string[4];

                for(int i = 0; i < 4; i++) {

                    double totalDuration = (i + 1) * 1.5 + (double)asleep / 60;
                    wakeUpTimes[i] = wakeUpTime.AddHours(totalDuration).ToShortTimeString();
                }

                return wakeUpTimes;
            }

            return new string[] { "NULL" };
        }
    }
}