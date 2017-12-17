using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace polynomialDivision {
    class Term {

        public decimal Coefficient { get; private set; }
        public Variable Variable { get; private set; }

        public Term(decimal coefficient, Variable variable) {

            Coefficient = coefficient;
            Variable = variable;
        }

        public static Term operator +(Term term1, Term term2) {

            return new Term(term1.Coefficient + term2.Coefficient, term1.Variable);
        }

        public static Term operator -(Term term1, Term term2) {

            return new Term(term1.Coefficient - term2.Coefficient, term1.Variable);
        }

        public static Term operator *(Term term1, Term term2) {

            return new Term(term1.Coefficient * term2.Coefficient, term1.Variable * term2.Variable);
        }

        public static Term operator /(Term term1, Term term2) {

            return new Term(term1.Coefficient / term2.Coefficient, term1.Variable / term2.Variable);
        }

        public override string ToString() {

            string coefficient = Math.Abs(Coefficient) == 1 ? "" : Math.Abs(Coefficient).ToString();

            return (Coefficient > 0 ? "+" : "-") + coefficient + Variable.ToString();
        }
    }
}