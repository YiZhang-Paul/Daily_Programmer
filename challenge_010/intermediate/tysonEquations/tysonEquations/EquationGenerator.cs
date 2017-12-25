using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tysonEquations {
    class EquationGenerator {

        private List<Tuple<int, int>> FindOperands(int number) {

            var operands = new List<Tuple<int, int>>();

            for(int i = 1; i <= number - i; i++) {

                operands.Add(new Tuple<int, int>(i, number - i));
            }

            return operands;
        }

        public virtual Equation[] Generate(int number) {

            var operands = FindOperands(number);
            var equations = new List<Equation>();

            for(int i = 0; i < operands.Count - 1; i++) {

                for(int j = i + 1; j < operands.Count; j++) {

                    equations.Add(new Equation(number, operands[i], operands[j]));
                }
            }

            return equations.ToArray();
        }
    }
}