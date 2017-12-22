using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace incomingAircraft {
    class IntersectionFinder {

        public Point FindIntersection(Line line1, Line line2) {
            //when two lines are parallel to each other
            if(line1.Slope == line2.Slope) {

                throw new Exception("Intersection Does not Exist.");
            }
            //when one of the lines is vertical line
            if(line1.Slope == null || line2.Slope == null) {

                var vertical = (VerticalLine)(line1.Slope == null ? line1 : line2);
                var nonVertical = (NonVerticalLine)(line1.Slope == null ? line2 : line1);

                return new Point(vertical.X, nonVertical.GetY(vertical.X));
            }
            //when both lines are non vertical lines
            double x = (line2.Constant - line1.Constant) / ((double)line1.Slope - (double)line2.Slope);

            return new Point(x, ((NonVerticalLine)line1).GetY(x));
        }
    }
}