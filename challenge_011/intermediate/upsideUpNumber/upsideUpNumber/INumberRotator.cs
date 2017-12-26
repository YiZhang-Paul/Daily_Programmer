using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace upsideUpNumber {
    interface INumberRotator {

        HashSet<int> RotatableDigits { get; }

        int RotateNumber(int number);
        int NextRotatableNumber(int number);
    }
}