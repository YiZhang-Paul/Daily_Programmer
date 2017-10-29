using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace numericalCalculus {
    class Program {
        static void Main(string[] args) {
            
            double[] yCords = new double[] { -1.0, -0.5, 0, 0.5, 1.0 };
            //challenge input
            Console.WriteLine(string.Join(" ", GetDerivatives(-1, 1, yCords)));
            //bonus 1 input
            Console.WriteLine(string.Join(" ", GetRiemannSum(-1, 1, yCords)));
            //bonus 2 input
            Func<double, double> GetDerivativeByX = GetDerivativeFunc(GetDerivatives, -1, 1, yCords);
            Console.WriteLine(GetDerivativeByX(-2));
            Console.WriteLine(GetDerivativeByX(-1));
            Console.WriteLine(GetDerivativeByX(-0.5));
            Console.WriteLine(GetDerivativeByX(0));
            Console.WriteLine(GetDerivativeByX(0.5));
            Console.WriteLine(GetDerivativeByX(1));
            Console.WriteLine(GetDerivativeByX(2));
        }
        /// <summary>
        /// calculate derivatives of a series of given points
        /// </summary>
        /// <param name="xMin">minimum X-Coordinate of interval</param>
        /// <param name="xMax">maximum X-Coordinate of interval</param>
        /// <param name="yCords">Y-Coordinate of each point</param>
        /// <returns></returns>
        public static double[] GetDerivatives(double xMin, double xMax, double[] yCords) {

            double interval = (xMax - xMin) / (yCords.Length - 1);
            double[] derivatives = new double[yCords.Length - 1];

            for(int i = 1; i < yCords.Length; i++) {

                derivatives[i - 1] = (yCords[i] - yCords[i - 1]) / interval;
            }

            return derivatives;
        }
        /// <summary>
        /// calculate definite integral of a given antiderivative
        /// </summary>
        /// <param name="xMin">minimum X-Coordinate of interval</param>
        /// <param name="xMax">maximum X-Coordinate of interval</param>
        /// <param name="yCords">Y-Coordinate of each point</param>
        /// <returns>Riemann sum</returns>
        public static double GetRiemannSum(double xMin, double xMax, double[] yCords) { 
        
            double interval = (xMax - xMin) / (yCords.Length - 1);
            double riemannSum = 0;

            for(int i = 0; i < yCords.Length - 1; i++) {

                riemannSum += Math.Abs(yCords[i]) * interval;
            }

            return riemannSum;
        }
        /// <summary>
        /// retrieve a function which will calculate derivative base on given X-Coordinate only
        /// </summary>
        /// <param name="function">function to calculate derivatives of all points</param>
        /// <param name="xMin">minimum X-Coordinate of interval</param>
        /// <param name="xMax">maximum X-Coordinate of interval</param>
        /// <param name="yValues">Y-Coordinate of each point</param>
        /// <returns>function to calculate derivative base on X-Coordinate only</returns>
        public static Func<double, double> GetDerivativeFunc(Func<double, double, double[], double[]> function, double xMin, double xMax, double[] yCords) {

            double[] derivatives = GetDerivatives(xMin, xMax, yCords);
            double interval = (xMax - xMin) / (yCords.Length - 1);

            Func<double, double> newFunction = x => {

                if(x < xMin || x > xMax) {

                    return 0;
                }
                //return derivative base on current located interval
                return derivatives[(int)Math.Max(0, Math.Ceiling((x - xMin) / interval) - 1)];
            };

            return newFunction;
        }
    }
}