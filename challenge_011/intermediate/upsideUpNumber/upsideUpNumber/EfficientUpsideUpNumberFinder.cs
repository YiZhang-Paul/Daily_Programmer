using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace upsideUpNumber {
    class EfficientUpsideUpNumberFinder : UpsideUpNumberFinder {

        private HashSet<int> UpsideUpDigits { get; set; }
        private int MinUpsideUpDigit { get { return UpsideUpDigits.Min(); } }
        private int MaxUpsideUpDigit { get { return UpsideUpDigits.Max(); } }
        
        public EfficientUpsideUpNumberFinder(INumberRotator rotator) : base(rotator) {

            UpsideUpDigits = GetUpsideUpDigits();
        }

        private HashSet<int> GetUpsideUpDigits() {

            return new HashSet<int>(Rotator.RotatableDigits.Where(IsUpsideUpNumber));
        }

        private int NextUpsideUpDigit(int digit) {

            if(digit >= MaxUpsideUpDigit) {

                return MinUpsideUpDigit;
            }

            return UpsideUpDigits.Where(upsideUp => upsideUp > digit).Min();
        }

        public override int CountUpsideUpNumbersInRange(int limit) {

            int upsideUpNumber = MinUpsideUpDigit;
            int total = 0;

            while(upsideUpNumber <= limit) {

                total++;
                upsideUpNumber = NextUpsideUpNumber(upsideUpNumber);
            }

            return total;
        }

        public override int NextUpsideUpNumber(int number) {

            if(number < 10) {
            
                return base.NextUpsideUpNumber(number);
            }

            string digits = number.ToString();
            int centerIndex = (digits.Length - digits.Length % 2) / 2;
            int centerDigit = int.Parse(digits[centerIndex].ToString());
            string leftHalf = digits.Substring(0, centerIndex);
            string rightHalf = "";

            if(digits.Length % 2 == 1) {
            
                leftHalf = centerDigit < MaxUpsideUpDigit ? leftHalf : Rotator.NextRotatableNumber(int.Parse(leftHalf)).ToString();
                rightHalf = Rotator.RotateNumber(int.Parse(leftHalf)).ToString().PadLeft(leftHalf.Length, '0');
                centerDigit = NextUpsideUpDigit(centerDigit);

                if(centerDigit.ToString()[0] == leftHalf.Last() && centerDigit.ToString()[0] == rightHalf[0] && leftHalf.Length * 2 > digits.Length) {

                    rightHalf = rightHalf.Substring(1);
                }

                return int.Parse(leftHalf + centerDigit + rightHalf);
            }

            leftHalf = Rotator.NextRotatableNumber(int.Parse(leftHalf)).ToString();
            rightHalf = Rotator.RotateNumber(int.Parse(leftHalf)).ToString().PadLeft(leftHalf.Length, '0');

            if(leftHalf.Last() == rightHalf[0] && leftHalf.Length * 2 > digits.Length) {
            
                rightHalf = rightHalf.Substring(1);
            }

            return int.Parse(leftHalf + rightHalf);
        }
    }
}