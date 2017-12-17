using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace polynomialDivision {
    class PolynomialExpression {

        public Term[] Terms { get; private set; }
        public decimal Constant { get; private set; }

        public PolynomialExpression(Term[] terms, int constant) {

            Terms = terms;
            Constant = constant;
        }

        public PolynomialExpression(string expression) {

            ReadExpression(expression);
        }

        private void ReadExpression(string expression) {

            var blocks = Regex.Matches(expression, @"[+-]?\s*\S+\s*")
                              .Cast<Match>()
                              .Select(match => Regex.Replace(match.Value, @"\s", ""))
                              .ToArray();
            var terms = new List<Term>();

            foreach(var block in blocks) {
            
                if(!Regex.IsMatch(block, @"[a-zA-Z]")) {

                    Constant = decimal.Parse(block);
                    continue;
                }

                terms.Add(ReadTerm(block));
            }

            Terms = terms.ToArray();
        }

        private Term ReadTerm(string block) {

            string coefficient = Regex.Match(block, @"[+-]?\d*\.?\d+").Value;
            string variable = Regex.Match(block, "[a-zA-Z]").Value;
            string power = Regex.Match(block, @"(?<=\^)\d+").Value;

            return new Term(
            
                coefficient == "" ? 1 : decimal.Parse(coefficient),
                new Variable(variable[0], power == "" ? 1 : int.Parse(power))
            );
        }
    }
}