using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace simpleCalculator {
    /// <summary>
    /// gamma function implementation
    /// taken from url:
    /// https://rosettacode.org/wiki/Gamma_function#C.23
    /// content managed under GNU Free Documentation License 1.2
    /// </summary>
    class GammaFunction {

        private int _g = 7;
        private double[] _p = {
        
            0.99999999999980993, 676.5203681218851, -1259.1392167224028,
	        771.32342877765313, -176.61502916214059, 12.507343278686905,
	        -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
        };

        public Complex Gamma(Complex number) {
            // Reflection formula
            if(number.Real < 0.5) {

                return Math.PI / (Complex.Sin(Math.PI * number) * Gamma(1 - number));
            }
            else {

                number -= 1;
                Complex x = _p[0];

                for(var i = 1; i < _g + 2; i++) {
                
                    x += _p[i] / (number + i);
                }

                Complex t = number + _g + 0.5;

                return Complex.Sqrt(2 * Math.PI) * (Complex.Pow(t, number + 0.5)) * Complex.Exp(-t) * x;
            }
        }  
    }
}