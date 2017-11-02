using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace largestSumSubarray {
    class Program {
        static void Main(string[] args) {

            int[] sequence1 = new int[] { -2, -3, 4, -1, -2, 1, 5, -3 };
            int[] sequence2 = new int[] { -2, -3, 4, -1, -3, 1, 5, -3 };
            int[] sequence3 = new int[] { -2, -3, 4, -1, -4, 1, 5, -3 };
            
            //challenge input
            int[] result = MaxSumSubarray(sequence1);
            Console.WriteLine(string.Join(" ", result) + " Sum: " + result.Sum());
            result = MaxSumSubarray(sequence2);
            Console.WriteLine(string.Join(" ", result) + " Sum: " + result.Sum());
            result = MaxSumSubarray(sequence3);
            Console.WriteLine(string.Join(" ", result) + " Sum: " + result.Sum());
        }
        /// <summary>
        /// find contiguous subarray with maximum sum
        /// </summary>
        public static int[] MaxSumSubarray(int[] array) { 
        
            int maxSoFar = 0;
            int maxHere = 0;
            int start = 0;
            int end = 0;

            for(int i = 0; i < array.Length; i++) {

                if(maxHere + array[i] < 0) {
                    //reset start and end index of subarray
                    maxHere = 0;
                    start = 0;
                    end = 0;
                    continue;
                }
                //track maximum sum up to current index
                maxHere += array[i];
                maxSoFar = Math.Max(maxSoFar, maxHere);
                start = start == 0 ? i : start; 
                end = i;
            }

            return array.Skip(start).Take(end - start).ToArray();
        }
    }
}