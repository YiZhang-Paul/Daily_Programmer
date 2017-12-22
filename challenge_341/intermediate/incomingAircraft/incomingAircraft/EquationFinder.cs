using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace incomingAircraft {
    class EquationFinder {

        public Line GetEquation(string lineString) {

            var numbers = Utility.ToNumbers(lineString);
            //check for degree 0, 180 and 360
            if(numbers[2] % 90 == 0 && (int)numbers[2] / 90 % 2 == 0) {

                return new VerticalLine(numbers[0]);
            }

            return GetNonVerticalLineEquation(numbers[0], numbers[1], numbers[2]);
        }

        public NonVerticalLine GetNonVerticalLineEquation(double x, double y, double degree) {

            int quadrant = (int)Math.Ceiling(degree / 90);
            double angle = degree - (quadrant - 1) * 90;
            bool isEvenQuadrant = quadrant % 2 == 0;

            if(isEvenQuadrant) {

                angle = 90 - angle;
            }

            double slope = 1 / Math.Tan(Utility.ToRadian(angle)) * (isEvenQuadrant ? -1 : 1);
            double constant = y - slope * x;

            return new NonVerticalLine(slope, constant);
        }
    }
}