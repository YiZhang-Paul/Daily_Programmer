using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace sleepSort {
    class Program {
        static void Main(string[] args) {

            //challenge input
            SleepSort(new int[] { 3, 1, 4, 1, 5, 9 });
            //bonus input
            /* the actual time complexity of algorithm depends on 
             * the sorting algorithm used by OS when scheduling 
             * threads' execution. e.g. heap sort (O(nlogn)) maybe 
             * used or insertion sort (O(n^2)) may be used by OS.
             */
        }
        /// <summary>
        /// log a number in console after [number] amount of seconds
        /// </summary>
        /// <param name="data">number to log</param>
        public static void LogNumber(Object data) {

            Thread.Sleep((int)data * 1000);
            Console.WriteLine(data);
        }
        /// <summary>
        /// sort (log) an array in ascending order
        /// </summary>
        /// <param name="array">array to sort</param>
        public static void SleepSort(int[] array) { 
        
            foreach(int number in array) {

                new Thread(LogNumber).Start(number);
            }
        }
    }
}