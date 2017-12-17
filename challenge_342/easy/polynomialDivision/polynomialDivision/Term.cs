using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace polynomialDivision {
    class Term {

        public decimal Coefficient { get; private set; }
        public Variable Variable { get; private set; }

        public Term(decimal coefficient, Variable variable) {

            Coefficient = coefficient;
            Variable = variable;
        }
    }
}