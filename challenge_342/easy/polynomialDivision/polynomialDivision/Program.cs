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

            expression1 = new PolynomialExpression("10x^4 - 7x^2 -1");
            expression2 = new PolynomialExpression("x^2 - x^1 + 3");

            Console.WriteLine(LongDivision(expression1, expression2));
        }

        private static string LongDivision(PolynomialExpression expression1, PolynomialExpression expression2) {

            var result = new List<Term>();
            var maxTerm = expression2.MaxOrder;

            while(expression1.Terms.Count > 0 && expression1.MaxOrder.Order >= maxTerm.Order) {

                result.Add(expression1.MaxOrder / maxTerm);
                var intermediate = expression2 * result.Last();
                expression1 -= intermediate;
            }

            return "Quotient: " + new PolynomialExpression(result).ToString() + " " + "Remainder: " + expression1.ToString();
        }
    }
}