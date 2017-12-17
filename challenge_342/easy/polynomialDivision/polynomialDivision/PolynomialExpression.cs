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

            var terms = new List<Term>();

            foreach(var term in GetTermString(expression)) {

                if(Regex.IsMatch(term, @"[a-zA-Z]")) {

                    terms.Add(ReadTermString(term));
                }
                else {

                    Constant = decimal.Parse(term);
                }
            }

            Terms = terms.ToArray();
        }

        private string[] GetTermString(string expression) {

            return Regex.Matches(expression.ToLower(), @"[+-]?\s*\S+\s*")
                        .Cast<Match>()
                        .Select(match => Regex.Replace(match.Value, @"\s", ""))
                        .ToArray();
        }

        private Term ReadTermString(string expression) {

            string coefficient = Regex.Match(expression, @"[+-]?\d*\.?\d+").Value;
            string variable = Regex.Match(expression, "[a-zA-Z]").Value;
            string power = Regex.Match(expression, @"(?<=\^)\d+").Value;

            return new Term(
            
                coefficient == "" ? 1 : decimal.Parse(coefficient),
                new Variable(variable[0], power == "" ? 1 : int.Parse(power))
            );
        }

        public override string ToString() {

            string constant = Constant == 0 ? 
                "" : ((Constant > 0 ? "+" : "-") + " " + Math.Abs(Constant));

            return string.Join(" ", Terms.Select(term => term.ToString())).Substring(2) + " " + constant;
        }
    }
}