using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace incomingAircraft {
    class EquationFinder {

        public ILine GetEquation(string lineString) {

            var numbers = Utility.ToNumbers(lineString);

            if(numbers[2] % 90 == 0 && (int)numbers[2] / 90 % 2 == 0) {

                return new VerticalLine(numbers[0]);
            }

            return GetNonVerticalLineEquation(new Point(numbers[0], numbers[1]), numbers[2]);
        }

        public NonVerticalLine GetNonVerticalLineEquation(Point point, double degree) {

            int quadrant = (int)Math.Ceiling(degree / 90);
            double angle = degree - (quadrant - 1) * 90;

            if(quadrant % 2 == 0) {

                angle = 90 - angle;
            }

            double slope = 1 / Math.Tan(Utility.ToRadian(angle)) * (quadrant % 2 == 0 ? -1 : 1);
            double constant = point.Y - slope * point.X;

            return new NonVerticalLine(slope, constant);
        }
    }
}