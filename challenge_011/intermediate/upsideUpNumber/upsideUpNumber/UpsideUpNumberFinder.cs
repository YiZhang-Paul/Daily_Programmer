using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace upsideUpNumber {
    class UpsideUpNumberFinder {

        protected INumberRotator Rotator { get; set; }

        public UpsideUpNumberFinder(INumberRotator rotator) {

            Rotator = rotator;
        }

        protected bool IsUpsideUpNumber(int number) {

            try {

                return Rotator.RotateNumber(number) == number;
            }
            catch(Exception) {

                return false;
            }
        }

        public virtual int CountUpsideUpNumbersInRange(int limit) {

            return Enumerable.Range(0, limit + 1).Count(IsUpsideUpNumber);
        }

        public virtual int NextUpsideUpNumber(int number) {

            while(!IsUpsideUpNumber(number + 1)) {

                number++; 
            }

            return number + 1;
        }
    }
}