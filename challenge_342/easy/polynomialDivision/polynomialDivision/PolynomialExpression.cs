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

        private Term ReadTermString(string term) {

            string coefficient = Regex.Match(term, @"(?<!\^)[+-]?\d*\.?\d*").Value.Trim();
            char variable = Regex.Match(term, "[a-zA-Z]").Value[0];
            string power = Regex.Match(term, @"(?<=\^)\d+").Value;

            return new Term(

                decimal.Parse(Regex.IsMatch(coefficient, @"\d") ? coefficient : coefficient + 1),
                new Variable(variable, power == "" ? 1 : int.Parse(power))
            );
        }

        public override string ToString() {

            string terms = string.Join("", Terms.Select(term => term.ToString())).Substring(1);
            string constant = Constant == 0 ? "" : (Constant > 0 ? "+" : "-") + Math.Abs(Constant);

            return Regex.Replace(terms + constant, @"(?<!\^)[+-]", match => " " + match.Value + " ");
        }
    }
}