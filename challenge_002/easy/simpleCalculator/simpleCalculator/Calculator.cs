using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace simpleCalculator {
    class SimpleCalculator {

        private const string _lockChar = "l";
        private const string _binaryOperator = "+-/*^";
        private const decimal _pi = 3.1415926535897932384626433832m;
        //assets
        public Equation Equation { get; private set; }
        public NumberBuffer NumberBuffer { get; private set; }
        public Stack<decimal> Numbers { get; private set; }
        public Stack<string> Operations { get; private set; }
        //constants and utility classes
        public GammaFunction Gamma { get; private set; }
        public decimal PI { get; private set; }
        //stats and calculator states
        public string Result { get { return Numbers.Peek() == 0 ? "0" : Numbers.Peek().ToString(); } }
        public bool Locked { get { return Operations.Count > 0 && Operations.Peek() == _lockChar; } }

        public SimpleCalculator() {

            Reset();
        }
        /// <summary>
        /// load assets
        /// </summary>
        public void LoadAssets() {

            Equation = new Equation();
            NumberBuffer = new NumberBuffer();
            Numbers = new Stack<decimal>();
            Operations = new Stack<string>();
        }
        /// <summary>
        /// load utilities
        /// </summary>
        public void LoadUtilities() {

            Gamma = new GammaFunction();
            PI = _pi;
        }
        /// <summary>
        /// reset calculator
        /// </summary>
        public void Reset() {

            LoadAssets();
            LoadUtilities();
        }
        /// <summary>
        /// set lock on result to allow number reuse
        /// </summary>
        public void SetLock() {

            Operations.Push(_lockChar);
        }
        /// <summary>
        /// append new content to current number buffer
        /// </summary>
        public void AddToBuffer(string input) {

            if(Locked) {

                Operations.Clear();
                NumberBuffer.Clear();
            }

            NumberBuffer.Add(input);
        }
        /// <summary>
        /// push number buffer into number stack
        /// </summary>
        public void PushBuffer() {

            Numbers.Push(NumberBuffer.GetValue());
            NumberBuffer.Clear();
        }
        /// <summary>
        /// append new content to current equation
        /// </summary>
        public void AddEquation(string input = null) {

            Equation.Add(input ?? Numbers.Peek() + " " + Equation.GetSymbol(Operations.Peek()) + " ");
        }
        /// <summary>
        /// process new operation
        /// </summary>
        public void Process(string operation) {

            PushBuffer();

            if(operation == "=") {

                Equation.Clear();
                EvaluateAll();
                //set result to buffer to allow number reuse
                NumberBuffer.SetValue(Result);
                //add lock to detect new number input
                SetLock();
            }
            else {

                Operations.Push(operation);
                AddEquation();
                TryEvaluateAll();
            }
        }
        /// <summary>
        /// calculate result of a single operation
        /// </summary>
        public decimal Calculate(string operation, decimal operand2, decimal operand1) { 
        
            switch(operation) {
            
                case "+" : case "-" :

                    return operand1 + operand2 * (operation == "+" ? 1 : -1);

                case "*" : 

                    return operand1 * operand2;

                case "/" :

                    if(operand2 == 0) {

                        throw new DivideByZeroException();
                    }

                    return operand1 / operand2;

                case "!" :

                    return Factorial(operand2);
            }

            return operand2;
        }
        /// <summary>
        /// evaluate entire equation
        /// </summary>
        public void EvaluateAll() {

            while(Operations.Count > 0) {

                if(Operations.Peek() == _lockChar) {
                    //remove placeholder locks
                    Operations.Pop();
                    continue;
                }

                EvaluateLast();
            }
        }
        /// <summary>
        /// evaluate last operation
        /// </summary>
        public void EvaluateLast() {

            string operation = Operations.Pop();

            if(Regex.IsMatch(operation, "[" + _binaryOperator + "]")) {

                if(Numbers.Count > 1) {
                
                    Numbers.Push(Calculate(operation, Numbers.Pop(), Numbers.Pop()));
                }
            }
            else if(operation != _lockChar) {

                Numbers.Push(Calculate(operation, Numbers.Pop(), -1));
            }
        }
        /// <summary>
        /// attempt evaluating equation so far
        /// </summary>
        public void TryEvaluateAll() {

            bool isBinaryOperator = Regex.IsMatch(Operations.Peek(), "[" + _binaryOperator + "]");
            string operation = isBinaryOperator ? Operations.Pop() : Operations.Peek();

            if(Regex.IsMatch(operation, "[+-]")) {
            
                EvaluateAll();
            }
            else {

                while(Operations.Count > 0 && !Regex.IsMatch(Operations.Peek(), "[+-]")) {

                    EvaluateLast();
                }
            }

            if(isBinaryOperator) {
            
                Operations.Push(operation);
            }
        }
        /// <summary>
        /// calculate factorial of a number
        /// </summary>
        public decimal Factorial(decimal number) {

            if(number < 0) {

                throw new Exception();
            }

            if(number <= 1) {

                return number == 1 ? number : (decimal)Gamma.Gamma((double)number + 1).Real;
            }

            return number * Factorial(number - 1);
        }
        /// <summary>
        /// negate value in buffer
        /// </summary>
        public void Negate() {

            NumberBuffer.Negate();
        }
    }
}