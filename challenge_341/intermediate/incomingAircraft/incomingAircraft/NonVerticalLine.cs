using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace incomingAircraft {
    class NonVerticalLine : ILine {

        public double Slope { get; private set; }
        public double Constant { get; private set; }

        public NonVerticalLine(double slope, double constant) {

            Slope = slope;
            Constant = constant;
        }

        public double GetY(double x) {

            return Slope * x + Constant;
        }
    }
}