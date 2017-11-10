using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace simpleCalculator {
    class SimpleCalculator {

        public StringBuilder NumberBuffer { get; private set; }
        public StringBuilder Expression { get; private set; }
        public Stack<decimal> Numbers { get; private set; }
        public Stack<string> Operators { get; private set; }
        public bool IsDecimal { get { return Regex.IsMatch(NumberBuffer.ToString(), @"\."); } }

        public SimpleCalculator() {

            Reset();
        }
        /// <summary>
        /// reset calculator
        /// </summary>
        public void Reset() {

            ClearBuffer();
            ClearExpression();
            Numbers = new Stack<decimal>();
            Operators = new Stack<string>();
        }
        /// <summary>
        /// clear number buffer
        /// </summary>
        public void ClearBuffer() {

            NumberBuffer = new StringBuilder("0");
        }
        /// <summary>
        /// clear current expression
        /// </summary>
        public void ClearExpression() {

            Expression = new StringBuilder();
        }
        /// <summary>
        /// update current expression
        /// </summary>
        public void UpdateExpression(string expression = null) {

            Expression.Append(expression ?? Numbers.Peek() + " " + Operators.Peek() + " ");
        }
        /// <summary>
        /// append digits or decimal point to current number buffer
        /// </summary>
        public void AppendBuffer(string input) {

            if(NumberBuffer.ToString() == "0") {

                NumberBuffer = new StringBuilder(input == "." ? "0." : input);
            }
            else if(input != "." || !IsDecimal) {

                NumberBuffer.Append(input);
            }
        }
        /// <summary>
        /// push number buffer into number stack
        /// </summary>
        public void PushBuffer(string operators) {

            Numbers.Push(decimal.Parse(NumberBuffer.ToString()));
            Operators.Push(operators);
            ClearBuffer();
            UpdateExpression();
            TryEvaluateAll();
        }
        /// <summary>
        /// remove last input appened to number buffer
        /// </summary>
        public void RemoveLastInput() {

            if(NumberBuffer.Length == 1) {

                ClearBuffer();
            }
            else {

                NumberBuffer.Remove(NumberBuffer.Length - 1, 1);
            }
        }
        /// <summary>
        /// evaluete result of a single operation
        /// </summary>
        public decimal EvaluateOperation(string operation, decimal operand2, decimal operand1) { 
        
            switch(operation) {
            
                case "+" : case "-" :

                    return operand1 + operand2 * (operation == "+" ? 1 : -1);
            }

            return 0;
        }
        /// <summary>
        /// attempt evaluating expression so far
        /// </summary>
        public void TryEvaluateAll() {

            if(Numbers.Count == 1) {
            

            }
            else if(Regex.IsMatch(Operators.Peek(), "[+-]")) {

                string lastOperator = Operators.Pop();

                while(Numbers.Count > 1) {

                    Numbers.Push(EvaluateOperation(Operators.Pop(), Numbers.Pop(), Numbers.Pop()));
                }

                Operators.Push(lastOperator);
            }
        }
    }
}