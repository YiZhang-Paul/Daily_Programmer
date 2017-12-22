using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace incomingAircraft {
    class Program {
        static void Main(string[] args) {

            var equation = GetEquation(10, 0, 0);
        }

        private static double ToRadian(double degree) {

            return degree * Math.PI / 180;
        }

        private static LinearEquation GetEquation(double x, double y, double degree) {

            int quadrant = 1;

            if(degree % 90 == 0 && (int)degree / 90 % 2 == 0) {

                return new VerticalLine(x);
            }

            quadrant = (int)Math.Ceiling(degree / 90);
            bool isEvenQuadrant = quadrant % 2 == 0;
            double angle = degree - (quadrant - 1) * 90;

            if(isEvenQuadrant) {
            
                angle = 90 - angle;
            }

            double slope = 1 / Math.Tan(ToRadian(angle)) * (isEvenQuadrant ? -1 : 1);
            double constant = y - slope * x;

            return new LinearEquation(slope, constant);
        }
    }
}