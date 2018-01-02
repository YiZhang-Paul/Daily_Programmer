using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace binaryConverterClassLibrary {
    public class BinaryConverter {

        public string ToBinary(int number) {

            string binary = "";
            string sign = number < 0 ? "-" : "";
            int absouluteValue = Math.Abs(number);

            while(absouluteValue != 0) {

                binary = absouluteValue % 2 + binary;
                absouluteValue /= 2;
            }

            return sign + binary;
        }
    }
}