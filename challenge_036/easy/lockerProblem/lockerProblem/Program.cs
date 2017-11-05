using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lockerProblem {
    class Program {
        static void Main(string[] args) {

            //challenge input
            int[] opening = GetOpenLocker1(1000);
            Console.WriteLine("Lockers Open: " + string.Join(" ", opening));
            Console.WriteLine("Total Open: " + opening.Length);
            opening = GetOpenLocker2(1000);
            Console.WriteLine("Lockers Open: " + string.Join(" ", opening));
            Console.WriteLine("Total Open: " + opening.Length);
        }
        /// <summary>
        /// find all lockers that are open in the end
        /// </summary>
        public static int[] GetOpenLocker1(int total) { 
        
            bool[] lockers = new bool[total];

            for(int i = 1; i <= total; i++) {

                for(int j = i; j <= total; j += i) {

                    lockers[j - 1] = !lockers[j - 1];
                }
            }

            return lockers.Select((locker, index) => new { State = locker, Number = index + 1 })
                          .Where(locker => locker.State)
                          .Select(locker => locker.Number)
                          .ToArray();
        }
        /// <summary>
        /// find all lockers that are open in the end
        /// </summary>
        public static int[] GetOpenLocker2(int total) {

            var open = new List<int>();
            int locker = 1;

            while(Math.Pow(locker, 2) <= total) {

                open.Add((int)Math.Pow(locker++, 2));
            }

            return open.ToArray();
        }
    }
}