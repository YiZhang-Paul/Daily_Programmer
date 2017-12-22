using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace incomingAircraft {
    class VerticalLine : Line {

        public override double? Slope { get; protected set; }
        public override double Constant { get; protected set; }
        public double X { get; private set; }

        public VerticalLine(double x) {

            X = x;
        }
    }
}