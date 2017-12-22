using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace incomingAircraft {
    class LinearEquation {

        public double A { get; private set; }
        public double B { get; private set; }

        public LinearEquation(double a, double b) {

            A = a;
            B = b;
        }
    }
}