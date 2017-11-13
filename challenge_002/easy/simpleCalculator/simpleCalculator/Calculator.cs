using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace simpleCalculator {
    class ScientificCalculator {

        private const string _binaryOperator = "[+-/*^]|mod";
        private const decimal _pi = 3.1415926535897932384626433832m;
        //assets
        public Input Input { get; private set; }
        public Equation Equation { get; private set; }
        public Stack<decimal> Numbers { get; private set; }
        public Stack<string> Operations { get; private set; }
        //constants and utility properties
        public GammaFunction Gamma { get; private set; }
        public decimal RunningTotal { get { return Numbers.Peek(); } }
        public bool Locked { get; private set; }

        public ScientificCalculator() {

            Reset();
        }
        /// <summary>
        /// load assets
        /// </summary>
        public void LoadAssets() {

            Input = new Input();
            Equation = new Equation();
            Numbers = new Stack<decimal>();
            Operations = new Stack<string>();
        }
        /// <summary>
        /// load utilities
        /// </summary>
        public void LoadUtilities() {

            Gamma = new GammaFunction();
        }
        /// <summary>
        /// reset calculator
        /// </summary>
        public void Reset() {

            LoadAssets();
            LoadUtilities();
        }
        /// <summary>
        /// append new content to input buffer
        /// </summary>
        public void AddInput(string input) {
 
            if(Locked) {

                Locked = false;
                Input.Clear();

                if(Operations.Count == 0 && Numbers.Count > 0) {

                    Numbers.Clear();
                }
            }

            Input.Add(input);
        }
        /// <summary>
        /// set input buffer value
        /// </summary>
        public void SetInput(decimal input) {

            Input.Set(input.ToString());
            Locked = true;
        }
        /// <summary>
        /// save input buffer in number stack
        /// </summary>
        public void SaveInput() {

            Numbers.Push(Input.Value);
            Input.Clear();
            Locked = true;
        }
        /// <summary>
        /// swap last operator with another
        /// </summary>
        public void SwapOperator(string operation) {

            Operations.Pop();
            Operations.Push(operation);
        }
        /// <summary>
        /// check if an operator is binary operator
        /// </summary>
        public bool IsBinaryOperator(string operation) {

            return Regex.IsMatch(operation, _binaryOperator);
        }
        /// <summary>
        /// check for extra operators in the stack
        /// </summary>
        public bool HasExtraOperator() {

            return Numbers.Count > 0 && Numbers.Count == Operations.Count;
        }
        /// <summary>
        /// evaluate last operation
        /// </summary>
        public void EvaluateLast() {

            if(Operations.Count > 0) {
            
                if(!IsBinaryOperator(Operations.Peek()) || Numbers.Count == 1) {

                    Numbers.Push(Calculate(Operations.Pop(), Numbers.Peek(), Numbers.Pop()));
                }
                else {
            
                    Numbers.Push(Calculate(Operations.Pop(), Numbers.Pop(), Numbers.Pop()));
                }
            }
        }
        /// <summary>
        /// evaluate entire equation
        /// </summary>
        public void EvaluateAll() { 
        
            while(Operations.Count > 0) {

                EvaluateLast();
            }
        }
        /// <summary>
        /// attempt evaluating equation so far
        /// </summary>
        public void TryEvaluateAll() { 
        
            while(Operations.Count > 0 && !Regex.IsMatch(Operations.Peek(), "[+-]")) {

                EvaluateLast();
            }
        }
        /// <summary>
        /// process unary operators
        /// </summary>
        public void ProcessUnaryOperator(string operation) {

            if(HasExtraOperator()) {

                Numbers.Push(Numbers.Peek());
            }

            Operations.Push(operation);
            EvaluateLast();
            SetInput(Numbers.Pop());
        }
        /// <summary>
        /// process binary operators
        /// </summary>
        public void ProcessBinaryOperator(string operation) {

            if(Regex.IsMatch(operation, "[+-]")) {

                EvaluateAll();
            }
            else {

                TryEvaluateAll();
            }

            Operations.Push(operation);
        }
        /// <summary>
        /// calculate running total
        /// </summary>
        public void GetRunningTotal(string operation) {

            if(!Input.IsEmpty) {

                SaveInput();
            }

            if(!IsBinaryOperator(operation)) {

                ProcessUnaryOperator(operation);
            }
            else if(!HasExtraOperator()) {

                ProcessBinaryOperator(operation);
            }
            else {

                SwapOperator(operation);
            }
        }
        /// <summary>
        /// calculate final result
        /// </summary>
        public void GetTotal() {

            if(!Input.IsEmpty) {

                SaveInput();
            }
            else if(HasExtraOperator()) {

                Numbers.Push(RunningTotal);
            }

            EvaluateAll();
            Equation = new Equation();
        }
        /// <summary>
        /// calculate result of an operation
        /// </summary>
        public decimal Calculate(string operation, decimal latter, decimal former) {

            switch(operation) {

                case "+" : case "-" :

                    return former + latter * (operation == "+" ? 1 : -1);

                case "*" :

                    return former * latter;

                case "/" : case "mod" :

                    if(latter == 0) {

                        throw new DivideByZeroException();
                    }

                    return operation == "/" ? former / latter : former % latter;

                case "!" :

                    return Factorial(latter);

                case "sqrt" :

                    return (decimal)Math.Sqrt((double)latter);

                case "x2" :

                    return latter * latter;

                case "sin" :

                    return (decimal)Math.Sin(ToRadians(latter));

                case "cos" :

                    return (decimal)Math.Cos(ToRadians(latter));

                case "tan" :

                    return (decimal)Math.Tan(ToRadians(latter));

                case "log10" :

                    return (decimal)Math.Log10((double)latter);

                case "exp" :

                    return (decimal)Math.Exp((double)latter);

                case "10x" :

                    return (decimal)Math.Pow(10, (double)latter);

                case "^" :

                    return (decimal)Math.Pow((double)former, (double)latter);
            }

            return latter;
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
        /// load PI into calculator
        /// </summary>
        public void LoadPI() {

            SetInput(_pi);
        }
        /// <summary>
        /// negate input buffer value
        /// </summary>
        public void Negate() {

            if(!Input.IsEmpty) {

                Input.Negate();
            }
            else if(Operations.Count == 0) {

                Numbers.Push(Numbers.Pop() * -1);
            }
            else {

                SetInput(RunningTotal * -1);
            }
        }
        /// <summary>
        /// convert degree to radians
        /// </summary>
        public double ToRadians(decimal degree) {

            return (double)degree / 180 * Math.PI;
        }
    }
}