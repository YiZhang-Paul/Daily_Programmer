using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace incomingAircraft {
    class NonVerticalLine : Line {

        public override double? Slope { get; protected set; }
        public override double Constant { get; protected set; }

        public NonVerticalLine(double slope, double constant) {

            Slope = slope;
            Constant = constant;
        }

        public double GetY(double x) {

            return (double)Slope * x + Constant;
        }
    }
}