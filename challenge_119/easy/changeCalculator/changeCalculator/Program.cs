using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace changeCalculator {
    class Program {
        static void Main(string[] args) {
 
            //default & bonus input
            decimal input1 = 4.17m;
            decimal input2 = 1.23m;
            //challenge & bonus input
            decimal input3 = 10.24m;
            decimal input4 = 0.99m;
            decimal input5 = 5m;
            decimal input6 = 00.06m;

            Console.WriteLine(GetChange(input1));
            Console.WriteLine(GetChange(input2));
            Console.WriteLine(GetChange(input3));
            Console.WriteLine(GetChange(input4));
            Console.WriteLine(GetChange(input5));
            Console.WriteLine(GetChange(input6));
        }
        /*
         * calculate changes
         * @param {decimal} [money] - total amount of money to change
         *
         * @return {string} [total changes]
         */
        public static string GetChange(decimal money) {

            int totalCents = (int)Math.Truncate(Math.Round(money * 100));
            //available coins to use
            int[] values = new int[] { 25, 10, 5, 1 };
            //total number of each coin for the change
            int[] changes = new int[values.Length];

            for(int i = 0; i < values.Length; i++) {

                int curChange = totalCents / values[i];
                totalCents -= curChange * values[i];
                changes[i] = curChange;
            }

            return ShowChange(changes);
        }
        /*
         * display changes
         * @param {int[]} [changes] - number of each coin for the change
         *
         * @return {string} [all changes]
         */
        public static string ShowChange(int[] changes) {
            //coin names
            string[] name = new string[] { "Quarters", "Dimes", "Nickels", "Pennies" };
            //only display coin used
            return changes.Select((change, index) => name[index] + " : " + change + "\n")
                          .Where((change, index) => changes[index] != 0)
                          .Aggregate("", (result, next) => result + next);
        }
    }
}