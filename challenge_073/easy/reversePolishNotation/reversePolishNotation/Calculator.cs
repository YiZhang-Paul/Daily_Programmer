using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace reversePolishNotation {
    class Calculator {
        /// <summary>
        /// evaluate arithmetic expressions
        /// </summary>
        /// <param name="second">second operand</param>
        /// <param name="first">first operand</param>
        public double Evaluate(string operators, double second, double first) { 
        
            switch(operators) {
            
                case "+" : case "-" :

                    return first + second * (operators == "+" ? 1 : -1);

                case "*" : case "/" :

                    return first * Math.Pow(second, operators == "*" ? 1 : -1);

                case "^" :

                    return Math.Pow(first, second);
            }

            return 0;
        }
        /// <summary>
        /// calculate result using Reverse Polish Notation
        /// </summary>
        public double Calculate(string expression) {

            var stack = new Stack<double>();

            foreach(Match match in Regex.Matches(expression, @"[+-]?\d*\.?\d+|[+-/*^]")) {

                if(Regex.IsMatch(match.Value, @"\d")) {
                
                    stack.Push(Double.Parse(match.Value));
                }
                else if(stack.Count >= 2) {
                
                    stack.Push(Evaluate(match.Value, stack.Pop(), stack.Pop()));
                }
            }

            return stack.Peek();
        }
    }
}