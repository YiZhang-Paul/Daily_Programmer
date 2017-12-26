using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace upsideUpNumber {
    class NumberRotator : INumberRotator {

        private Tuple<int, int>[] _rotations = {
        
            new Tuple<int, int>(0, 0),
            new Tuple<int, int>(1, 1),
            new Tuple<int, int>(2, 5),
            new Tuple<int, int>(6, 9),
            new Tuple<int, int>(8, 8)
        };

        private Dictionary<int, int> RotationLookup { get; set; }

        public HashSet<int> RotatableDigits { get; private set; }

        public NumberRotator() {

            RotationLookup = GetRotationLookup();
            RotatableDigits = GetRotatableDigits();
        }

        private Dictionary<int, int> GetRotationLookup() { 
        
            var lookup = new Dictionary<int, int>();

            foreach(var pair in _rotations) {

                lookup[pair.Item1] = pair.Item2;
                lookup[pair.Item2] = pair.Item1;
            }

            return lookup;
        }

        private HashSet<int> GetRotatableDigits() {

            var numbers = new HashSet<int>();

            foreach(var pair in _rotations) {

                numbers.Add(pair.Item1);
                numbers.Add(pair.Item2);
            }

            return numbers;
        }

        private int[] GetDigits(int number) { 
        
            var digits = new List<int>();

            while(number != 0) {

                digits.Add(number % 10);
                number = (number - digits.Last()) / 10;
            }

            digits.Reverse();

            return digits.ToArray();
        }

        private bool CanRotate(int number) {

            return GetDigits(number).All(digit => RotatableDigits.Contains(digit));
        }

        public int NextRotatableNumber(int number) {

            var digits = new int[] { 0 }.Concat(GetDigits(number)).ToArray();

            for(int i = digits.Length - 1; i >= 0; i--) {

                var rotatableDigits = RotatableDigits.Where(digit => digit > digits[i]);

                if(rotatableDigits.Count() > 0) {

                    digits[i] = rotatableDigits.Min();

                    for(int j = i + 1; j < digits.Length; j++) {

                        digits[j] = 0;
                    }

                    break;
                }
            }

            return int.Parse(string.Join("", digits));
        }

        public int RotateNumber(int number) {

            if(!CanRotate(number)) {

                throw new Exception("Cannot Rotate Number");
            }

            if(number < 10) {
            
                return RotationLookup[number];
            }

            var rotated = GetDigits(number).Select(digit => RotationLookup[digit]).Reverse();

            return int.Parse(string.Join("", rotated));
        }
    }
}