using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zeckendorfRepresentation {
    class Program {
        static void Main(string[] args) {

            //default input
            Console.WriteLine(GetZeckendorfForm(100));
            Console.WriteLine(GetZeckendorfForm(1234));
            //challenge input
            Console.WriteLine(GetZeckendorfForm((int)Math.Pow(3, 15)));
        }
        /// <summary>
        /// retrieve Fibonacci sequence up until given limit
        /// </summary>
        public static int[] GetSequence(int limit) { 
        
            if(limit <= 1) {

                return limit == 1 ? new int[] { 0, 1 } : new int[] { 0 };
            }

            var sequence = new List<int> { 0, 1 };
            //generate sequence up until given limit
            while(sequence.Last() + sequence[sequence.Count - 2] <= limit) {

                sequence.Add(sequence.Last() + sequence[sequence.Count - 2]);
            }

            return sequence.ToArray();
        }
        /// <summary>
        /// find Zeckendorf representation of a given number
        /// </summary>
        public static string GetZeckendorfForm(int target) {

            var sequence = GetSequence(target);
            var result = new List<int>();

            while(target != 0) {

                int curMax = sequence.Last(number => number <= target);
                result.Add(curMax);
                target -= curMax;
            }

            return string.Join(" + ", result);
        }
    }
}