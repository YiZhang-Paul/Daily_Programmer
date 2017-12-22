using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace incomingAircraft {
    class VerticalLine : LinearEquation {

        public double X { get; private set; }

        public VerticalLine(double x) {

            X = x;
        }
    }
}