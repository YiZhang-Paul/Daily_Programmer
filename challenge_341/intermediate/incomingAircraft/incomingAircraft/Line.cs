using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace incomingAircraft {
    abstract class Line {

        public abstract double? Slope { get; protected set; }
        public abstract double Constant { get; protected set; }
    }
}