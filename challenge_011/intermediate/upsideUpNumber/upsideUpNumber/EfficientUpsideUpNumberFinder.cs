using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace upsideUpNumber {
    class EfficientUpsideUpNumberFinder : UpsideUpNumberFinder {

        public EfficientUpsideUpNumberFinder(INumberRotator rotator) : base(rotator) {}

        private int CountUpsideUpNumbersWithLength(int length) {

            var rotatable = Rotator.RotatableDigits;
        
            if(length <= 1) {

                return length == 1 ? rotatable.Count : 0;
            }

            return rotatable.Count(digit => digit != 0) * (int)Math.Pow(rotatable.Count, length - 1);
        }

        public override int CountUpsideUpNumbersInRange(int limit) {

            var total = 0;

            for(int i = 1; i <= limit.ToString().Length - 1; i++) {

                total += CountUpsideUpNumbersWithLength(i);
            }

            return total;
        }

        public override int NextUpsideUpNumber(int number) {

            return 1;
        }
    }
}