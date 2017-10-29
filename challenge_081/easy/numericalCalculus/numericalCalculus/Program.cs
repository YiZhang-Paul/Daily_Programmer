using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace numericalCalculus {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(string.Join(" ", GetDerivatives(-1, 1, new double[] { -1.0, -0.5, 0, 0.5, 1.0 })));
        }
        /// <summary>
        /// calculate derivatives of a series of given points
        /// </summary>
        /// <param name="xMin"></param>
        /// <param name="xMax"></param>
        /// <param name="yValues"></param>
        /// <returns></returns>
        public static double[] GetDerivatives(double xMin, double xMax, double[] yValues) {

            double interval = (xMax - xMin) / (yValues.Length - 1);
            double[] derivatives = new double[yValues.Length - 1];

            for(int i = 1; i < yValues.Length; i++) {

                derivatives[i - 1] = (yValues[i] - yValues[i - 1]) / interval;
            }

            return derivatives;
        }
    }
}