using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace polynomialDivision {
    class PolynomialExpression {

        public List<Term> Terms { get; private set; }

        public Term MaxOrder {

            get { 
            
                if(Terms.Count == 0) {

                    return null;
                }

                int maxOrder = Terms.Max(term => term.Variable.Power);

                return Terms.Find(term => term.Variable.Power == maxOrder);
            }
        }
        
        public PolynomialExpression(List<Term> terms) {

            Terms = terms;
        }

        public PolynomialExpression(string expression) {

            ReadExpression(expression);
        }

        public static PolynomialExpression operator -(PolynomialExpression expression, Term term) {

            var copy = new PolynomialExpression(expression.ToString());
            var sameOrderIndex = copy.FindTerm(term.Order);

            if(sameOrderIndex != -1) {

                if(copy.Terms[sameOrderIndex].ToString() == term.ToString()) {

                    copy.Terms.RemoveAt(sameOrderIndex);
                }
                else {

                    copy.Terms[sameOrderIndex] -= term;
                }
            }
            else {

                copy.Terms.Add(term * -1);
            }

            return copy;
        }

        public static PolynomialExpression operator -(PolynomialExpression expression1, PolynomialExpression expression2) {

            var copy = new PolynomialExpression(expression1.ToString());

            foreach(var term in expression2.Terms) {

                copy -= term;
            }

            return copy;
        }

        public static PolynomialExpression operator *(PolynomialExpression expression, Term term) {

            return new PolynomialExpression(expression.Terms.Select(curTerm => curTerm * term).ToList());
        }

        private int FindTerm(int order) {

            return Terms.FindIndex(term => term.Variable.Power == order);
        }

        private void ReadExpression(string expression) {

            Terms = new List<Term>();

            foreach(var term in GetTermString(expression)) {

                Terms.Add(ReadTermString(term));
            }
        }

        private string[] GetTermString(string expression) {

            return Regex.Matches(expression.ToLower(), @"\s*[+-]?\s*\S+\s*")
                        .Cast<Match>()
                        .Select(match => Regex.Replace(match.Value, @"\s", ""))
                        .ToArray();
        }

        private Term ReadTermString(string term) {

            string coefficient = Regex.Match(term, @"(?<!\^)[+-]?\d*\.?\d*").Value.Trim();
            string variable = Regex.Match(term, "[a-zA-Z]").Value;
            string power = Regex.Match(term, @"(?<=\^)\d+").Value;

            return new Term(

                decimal.Parse(Regex.IsMatch(coefficient, @"\d") ? coefficient : coefficient + 1),
                new Variable(variable == "" ? '\0' : variable[0], power == "" ? (variable == "" ? 0 : 1) : int.Parse(power))
            );
        }

        public override string ToString() {

            var expressions = Terms.OrderByDescending(term => term.Order);
            string result = string.Join("", expressions.Select(term => term.ToString()));
            result = Regex.Replace(result, @"(?<!\^)[+-]", match => " " + match.Value + " ");
            result = Regex.Replace(result, @"^\s\+\s", "");
            result = Regex.Replace(result, @"^\s\-\s", "-");
            result = Regex.Replace(result, @"\^1(?!\d)", "");
            result = Regex.Replace(result, @".\^0", "");

            return result == "-0" ? "0" : result;
        }
    }
}