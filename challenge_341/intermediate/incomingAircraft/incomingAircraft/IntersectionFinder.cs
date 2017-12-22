using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace incomingAircraft {
    class IntersectionFinder {

        public Point FindIntersection(ILine line1, ILine line2) {

            var line1Type = line1.GetType();
            var line2Type = line2.GetType();

            if(line1Type == line2Type) {

                if(line1Type == typeof(VerticalLine)) {

                    throw new Exception("Intersection Does not Exist.");
                }

                return FindIntersection((NonVerticalLine)line1, (NonVerticalLine)line2);
            }
            
            return line1Type == typeof(VerticalLine) ? 
                FindIntersection((VerticalLine)line1, (NonVerticalLine)line2) :
                FindIntersection((NonVerticalLine)line1, (VerticalLine)line2);
        }

        public Point FindIntersection(NonVerticalLine line1, VerticalLine line2) {

            return FindIntersection(line2, line1);
        }

        public Point FindIntersection(VerticalLine line1, NonVerticalLine line2) {

            return new Point(line1.X, line2.GetY(line1.X));
        }

        public Point FindIntersection(NonVerticalLine line1, NonVerticalLine line2) {

            if(line1.Slope == line2.Slope) {

                throw new Exception("Intersection Does not Exist.");
            }
            //X-Coordinate of intersection
            double x = (line2.Constant - line1.Constant) / (line1.Slope - line2.Slope);

            return new Point(x, line1.GetY(x));
        }
    }
}