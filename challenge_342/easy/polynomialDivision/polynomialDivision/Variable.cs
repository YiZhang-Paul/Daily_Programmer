using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace polynomialDivision {
    class Variable {

        public char Letter { get; private set; }
        public int Power { get; private set; }

        public Variable(char letter, int power) {

            Letter = letter;
            Power = power;
        }
    }
}