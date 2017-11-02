using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace slidingWindow {
    class Program {
        static void Main(string[] args) {

            int[] input = new int[] { 1, 5, 2, 81, 22, 113, 10, 11, 5 };

            //challenge input
            Console.WriteLine(string.Join(" ", SlidingWindowMinMax(input, 3, true)));
            Console.WriteLine(string.Join(" ", SlidingWindowMinMax(input, 3)));
        }
        /// <summary>
        /// find minimum value in each window slide
        /// </summary>
        /// <param name="size">window size</param>
        /// <param name="getMin">find minimum value when true, maximum value otherwise</param>
        public static int[] SlidingWindowMinMax(int[] sequence, int size, bool getMin = false) { 
        
            var window = new Deque<int>();
            var output = new List<int>();

            for(int i = 0; i < sequence.Length; i++) {

                if(i >= size) {
                    //record minimum value for previous window
                    output.Add(sequence[window.PeekStart()]);
                    //remove elements out of window
                    while(!window.IsEmpty && window.PeekStart() <= i - size) {

                        window.PopStart();
                    }
                }
                //remove useless elements
                while(!window.IsEmpty && getMin == sequence[i] < sequence[window.PeekEnd()]) {

                    window.PopEnd();
                }

                window.PushEnd(i);
            }
            
            output.Add(sequence[window.PeekStart()]);

            return output.ToArray();
        }
    }
}