using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace powerplantSimulation {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(OperationalDays(10));
            Console.WriteLine(OperationalDays(14));
            Console.WriteLine(OperationalDays(100));
            Console.WriteLine(OperationalDays(10000000));
        }
        /*
         * find total number of days the powerplant is operational
         * @param {int} [days] - days to simulate
         *
         * @return {int} [total number of days the powerplant is operational]
         */
        public static int OperationalDays(int days) {

            var maintenance = new int[days / 100].Select((day, index) => (index + 1) * 100);
            var refuel = new int[days / 14].Select((day, index) => (index + 1) * 14);
            var demand = new int[days / 3].Select((day, index) => (index + 1) * 3);

            return days - maintenance.Count(day => day % 14 != 0 && day % 3 != 0) - refuel.Count(day => day % 3 != 0) - demand.Count();
        }
    }
}