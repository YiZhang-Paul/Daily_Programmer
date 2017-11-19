using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace calculator {
    class BasicCalculator {

        private const string _binaryOperators = "[+-/*]";
        private Dictionary<string, Func<decimal, decimal, decimal>> _calculation =
            new Dictionary<string, Func<decimal, decimal, decimal>> {
                //op1: operand 1, op2: operand 2
                {"+", (op1, op2) => op1 + op2},
                {"-", (op1, op2) => op1 - op2},
                {"*", (op1, op2) => op1 * op2},
                {"/", (op1, op2) => op1 / op2}
            };

        public CustomBuffer Buffer { get; private set; }
        public Equation Equation { get; private set; }
        public Formatter Formatter { get; private set; }
        public Stack<decimal> Numbers { get; private set; }
        public Stack<string> Operations { get; private set; }
        public string Input { get { return Formatter.Format(Buffer.Value, Buffer.IsDecimal); } }
        public string Result { get { return Formatter.Format(Numbers.Peek()); } } 

        public BasicCalculator() {

            Reset();
        }

        public void Reset() {

            Buffer = new CustomBuffer("0");
            Equation = new Equation();
            Formatter = new Formatter();
            Numbers = new Stack<decimal>();
            Operations = new Stack<string>();
        }
        /// <summary>
        /// show current number on display
        /// </summary>
        public string DisplayNumber() {

            return Buffer.IsEmpty ? Result : Input;
        }
        /// <summary>
        /// add numeric input to buffer
        /// </summary>
        public void AddInput(string input) {

            ClearExtraNumber();
            Buffer.Add(input);
        }
        /// <summary>
        /// clear all buffer content
        /// </summary>
        public void ClearEntry() {

            Buffer.Reset();
        }
        /// <summary>
        /// delete last buffer input
        /// </summary>
        public void Delete() {

            Buffer.Delete();
        }
        /// <summary>
        /// save buffer value into number stack
        /// </summary>
        public void SaveBuffer() {

            if(!Buffer.IsEmpty) {
            
                Numbers.Push(Buffer.Value);
                Buffer.Clear();
                Equation.Update(Numbers.Peek());
            }
        }

        public void SaveOperator(string operation) {

            Operations.Push(operation);
            Equation.Update(operation);
        }
        /// <summary>
        /// replace last operator saved with another operator
        /// </summary>
        public void SwapOperator(string operation) {

            Operations.Pop();
            Operations.Push(operation);
            Equation.Update(operation, true);
        }

        public bool IsBinaryOperator(string operation) {

            return Regex.IsMatch(operation, "^" + _binaryOperators + "$");
        }
        /// <summary>
        /// check if an operator needs one more operand
        /// </summary>
        public bool HasExtraOperator() {

            return Numbers.Count > 0 && Numbers.Count == Operations.Count;
        }
        /// <summary>
        /// clear out extra number in number stack when necessary
        /// </summary>
        public void ClearExtraNumber() {

            if(Numbers.Count == 1 && Operations.Count == 0) {

                Numbers.Clear();
            }
        }

        public void HandleBinaryOperator(string operation) {

            if(Regex.IsMatch(operation, "^[+-]$")) {

                EvaluateAll();
            }
            else {

                TryEvaluateAll();
            }

            SaveOperator(operation);
        }
        /// <summary>
        /// process operators from user input
        /// </summary>
        public void ProcessOperation(string operation) {

            SaveBuffer();

            if(Equation.IsEmpty) {
            
                Equation.Update(Numbers.Peek());
            }

            if(IsBinaryOperator(operation)) {

                if(!HasExtraOperator()) {

                    HandleBinaryOperator(operation);
                }
                else {

                    SwapOperator(operation);
                }
            }
        }
        /// <summary>
        /// evaluate arithmetic operation
        /// </summary>
        public decimal Calculate(string operation, decimal operand1, decimal operand2) { 
        
            if(_calculation.ContainsKey(operation)) {
            
                return _calculation[operation].Invoke(operand1, operand2);
            }

            return operand1;
        }
        /// <summary>
        /// evaluate top most operator in stack
        /// </summary>
        public void EvaluateLast() {

            if(IsBinaryOperator(Operations.Peek())) {

                decimal operand2 = Numbers.Pop();
                Numbers.Push(Calculate(Operations.Pop(), Numbers.Pop(), operand2));
            }
        }
        /// <summary>
        /// attempt evaluating equation so far
        /// </summary>
        public void TryEvaluateAll() { 
        
            while(Operations.Count > 0 && !Regex.IsMatch(Operations.Peek(), "^[+-]$")) {
            
                EvaluateLast();
            }
        }

        public void EvaluateAll() { 

            while(Operations.Count > 0) {

                EvaluateLast();
            }
        }
        /// <summary>
        /// calculate final result
        /// </summary>
        public void GetResult() {

            SaveBuffer();

            if(HasExtraOperator()) {

                Numbers.Push(Numbers.Peek());
            }

            EvaluateAll();
            Equation.Clear();
        }

        public void Negate() { 
        
            if(Buffer.IsEmpty) {

                Buffer.Set(Result);
                ClearExtraNumber();
            }

            Buffer.Negate();
        }
    }
}