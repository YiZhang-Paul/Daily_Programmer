using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace minMax {
    class Program {
        static void Main(string[] args) {
            
            //challenge input
            Console.WriteLine(GetAngle(100, 5));
            Console.WriteLine(GetPosition(20, 30, 100, 5));
        }
        /// <summary>
        /// find angle that maximize circle sector area formed by a piece of wire
        /// </summary>
        /// <param name="length">wire length</param>
        /// <param name="decimals">result precision</param>
        /// 
        /// <returns>result angle</returns>
        /// 
        public static double GetAngle(int length, int decimals = 2) {

            double angle = 0;

            for(int i = 0; i <= decimals; i++) {

                double precision = 1 / Math.Pow(10, i);
                double minAngle = i == 0 ? 0 : angle - 10 * precision;
                double maxAngle = i == 0 ? 360 : angle + 10 * precision;
                double maxArea = 0;

                for(double j = minAngle; j <= maxAngle; j += precision) {

                    double newArea = Math.PI * Math.Pow(length / 2 / (1 + Math.PI * j / 360), 2) / 360 * j;
                    
                    if(newArea > maxArea) {

                        maxArea = newArea;
                        angle = j;
                    }
                }

            }

            return Math.Round(angle, decimals);
        }
        /// <summary>
        /// find water pump position such that the distance between the pump, town A and town B is minimum
        /// </summary>
        /// <param name="townA">distance between town A and river</param>
        /// <param name="townB">distance between town B and river</param>
        /// <param name="length">total river length</param>
        /// <param name="decimals">result precision</param>
        /// 
        /// <returns>water pump position</returns>
        /// 
        public static double GetPosition(int townA, int townB, int length, int decimals = 2) {

            double position = 0;

            for(int i = 0; i <= decimals; i++) {

                double precision = 1 / Math.Pow(10, i);
                double minPosition = i == 0 ? 0 : position - 10 * precision;
                double maxPosition = i == 0 ? length : position + 10 * precision;
                double minDistance = 0;

                for(double j = minPosition; j <= maxPosition; j += precision) {

                    double newDistance = Math.Sqrt(Math.Pow(townA, 2) + Math.Pow(j, 2)) + Math.Sqrt(Math.Pow(townB, 2) + Math.Pow(length - j, 2));

                    if(newDistance < minDistance || minDistance == 0) {

                        minDistance = newDistance;
                        position = j;
                    }
                }
            }

            return Math.Round(position, decimals);
        }
    }
}