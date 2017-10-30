using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace countingSteps {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine("==> " + "[" + string.Join(", ", GetSteps(18.75f, -22.00f, 5)) + "]");
            Console.WriteLine("==> " + "[" + string.Join(", ", GetSteps(-5.75f, 12.00f, 5)) + "]");
            Console.WriteLine("==> " + "[" + string.Join(", ", GetSteps(13.50f, -20.75f, 3)) + "]");
            Console.WriteLine("==> " + "[" + string.Join(", ", GetSteps(9.75f, 3.00f, 9)) + "]");
        }
        /// <summary>
        /// print all steps from start number to end number
        /// </summary>
        public static float[] GetSteps(float start, float end, int step) {

            float interval = Math.Abs(start - end) / (step - 1) * (start > end ? -1 : 1);
            float[] steps = new float[step];

            for(int i = 0; i < step; i++) {

                steps[i] = start + i * interval;
            }

            return steps;
        }
    }
}