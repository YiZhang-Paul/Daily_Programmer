using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tysonEquations {
    class Equation {

        public int Sum { get; private set; }
        public Tuple<int, int> Left { get; private set; }
        public Tuple<int, int> Right { get; private set; }

        public bool HasSameOperands {

            get { 
            
                if(Left.Equals(Right)) {

                    return true;
                }

                return Left.Equals(new Tuple<int, int>(Right.Item2, Right.Item1));
            }
        }

        public Equation(int sum, Tuple<int, int> left, Tuple<int, int> right) {

            Sum = sum;
            Left = left;
            Right = right;
        }

        public override string ToString() {

            return Left.Item1 + " + " + Left.Item2 + " = " + Right.Item1 + " + " + Right.Item2;
        }
    }
}