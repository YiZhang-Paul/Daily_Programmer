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

        static int g = 7;
        static double[] p = {
        
            0.99999999999980993, 676.5203681218851, -1259.1392167224028,
	        771.32342877765313, -176.61502916214059, 12.507343278686905,
	        -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
        };

        public Complex Gamma(Complex z) {
            // Reflection formula
            if(z.Real < 0.5) {

                return Math.PI / (Complex.Sin(Math.PI * z) * Gamma(1 - z));
            }
            else {

                z -= 1;
                Complex x = p[0];

                for(var i = 1; i < g + 2; i++) {
                
                    x += p[i] / (z + i);
                }

                Complex t = z + g + 0.5;

                return Complex.Sqrt(2 * Math.PI) * (Complex.Pow(t, z + 0.5)) * Complex.Exp(-t) * x;
            }
        }  
    }
}