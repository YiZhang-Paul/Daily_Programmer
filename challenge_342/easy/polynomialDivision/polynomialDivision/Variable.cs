﻿using System;
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

        public static Variable operator *(Variable variable1, Variable variable2) {

            char letter = variable1.Letter == '\0' ? variable2.Letter : variable1.Letter;

            return new Variable(letter, variable1.Power + variable2.Power);
        }

        public static Variable operator /(Variable variable1, Variable variable2) {

            char letter = variable1.Letter == '\0' ? variable2.Letter : variable1.Letter;

            return new Variable(letter, variable1.Power - variable2.Power);
        }

        public override string ToString() {
            
            return Letter + "^" + Power;
        }
    }
}