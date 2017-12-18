using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace polynomialDivision {
    class Program {
        static void Main(string[] args) {

            //challenge input
            var expression1 = new PolynomialExpression("4x^3 + 2x^2 - 6x^1 + 3");
            var expression2 = new PolynomialExpression("x^1 - 3");

            Console.WriteLine(LongDivision(expression1, expression2));

            expression1 = new PolynomialExpression("2x^4 - 9x^3 + 21x^2 - 26x^1 + 12");
            expression2 = new PolynomialExpression("2x^1 - 3");

            Console.WriteLine(LongDivision(expression1, expression2));

            expression1 = new PolynomialExpression("10x^4 - 7x^2 - 1");
            expression2 = new PolynomialExpression("x^2 - x^1 + 3");

            Console.WriteLine(LongDivision(expression1, expression2));
        }

        private static string LongDivision(PolynomialExpression expression1, PolynomialExpression expression2) {

            var result = new List<Term>();
            var steps = new StringBuilder();
            var maxTerm = expression2.MaxOrder;
            string divisor = expression2.ToString();

            while(expression1.Terms.Count > 0 && expression1.MaxOrder.Order >= maxTerm.Order) {

                result.Add(expression1.MaxOrder / maxTerm);
                var intermediate = expression2 * result.Last();
                steps.Append("Step " + result.Count + " ->\n\n");
                steps.Append("Dividend: " + expression1 + "\n");
                steps.Append("Divisor: " + intermediate + "\n");
                steps.Append("Quotient: " + new PolynomialExpression(result) + "\n");
                expression1 -= intermediate;
                steps.Append("Remainder: " + expression1 + "\n\n");
            }

            string finalResult = new PolynomialExpression(result).ToString();

            return steps.ToString() + "Result -> Quotient: " + finalResult +"; Remainder: " + expression1 + "\n";
        }
    }
}