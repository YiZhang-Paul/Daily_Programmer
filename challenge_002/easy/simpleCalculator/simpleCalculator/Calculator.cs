using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace simpleCalculator {
    class ScientificCalculator {

        private const string _binaryOperator = "[+-/*^]|mod|exp|yrtx";
        private const decimal _pi = 3.1415926535897932384626433832m;
        //arithmetic calculation functions; op1: operand 1, op2: operand 2
        private Dictionary<string, Func<decimal, decimal, decimal>> _expressions = new Dictionary<string, Func<decimal, decimal, decimal>> {

            {"+", (op1, op2) => op1 + op2},
            {"-", (op1, op2) => op1 - op2},
            {"*", (op1, op2) => op1 * op2},
            {"/", (op1, op2) => op1 / op2},
            {"x2", (op1, op2) => op2 * op2},
            {"mod", (op1, op2) => op1 % op2},
            {"1/x", (op1, op2) => 1 / (decimal)op1},
            {"ex", (op1, op2) => (decimal)Math.Exp((double)op1)},
            {"x3", (op1, op2) => (decimal)Math.Pow((double)op1, 3)},
            {"sqrt", (op1, op2) => (decimal)Math.Sqrt((double)op2)},
            {"10x", (op1, op2) => (decimal)Math.Pow(10, (double)op2)},
            {"log10", (op1, op2) => (decimal)Math.Log10((double)op2)},
            {"exp", (op1, op2) => op1 * (decimal)Math.Pow(10, (double)op2)},
            {"^", (op1, op2) => (decimal)Math.Pow((double)op1, (double)op2)},
            {"yrtx", (op1, op2) => (decimal)Math.Pow((double)op1, 1 / (double)op2)},
            {"ln", (op1, op2) => (decimal)(Math.Log((double)op1) / Math.Log(Math.E))}
        };
        //assets
        public Input Input { get; private set; }
        public Equation Equation { get; private set; }
        public Stack<decimal> Numbers { get; private set; }
        public Stack<string> Operations { get; private set; }
        //utility classes and properties
        public GammaFunction Gamma { get; private set; }
        public UnitConverter Converter { get; private set; }
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
            Converter = new UnitConverter();
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

            return Regex.IsMatch(operation, "^" + _binaryOperator + "$");
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

                Numbers.Push(RunningTotal);
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
        /// round result when necessary
        /// </summary>
        public decimal Round(decimal number) { 

            decimal integer = Math.Truncate(number);

            if(integer == 0 || number - integer == 0) {
            
                return integer == 0 ? number : integer;
            }

            return Regex.IsMatch(number.ToString(), @"\.0{11}") ? integer : number; 
        }
        /// <summary>
        /// calculate result of an operation
        /// </summary>
        public decimal Calculate(string operation, decimal latter, decimal former) {

            decimal result = 0;

            if(_expressions.ContainsKey(operation)) {

                result = _expressions[operation].Invoke(former, latter);
            }
            else if(operation == "!") {

                result = Factorial(latter);
            }
            else if(operation == "dms" || operation == "deg") {

                result = operation == "dms" ? Converter.DegreeToDms(latter) : Converter.DmsToDegree(latter);
            }

            if(Regex.IsMatch(operation, "^(sin|cos|tan)$")) {

                decimal radians = Converter.ToRadians(latter);

                if(operation == "sin") {

                    result = (decimal)Math.Sin((double)radians);
                }
                else if(operation == "cos") {

                    result = (decimal)Math.Cos((double)radians);
                }
                else {

                    result = (decimal)Math.Tan((double)radians);
                }
            }

            if(Regex.IsMatch(operation, "^(asin|acos|atan)$")) {
            
                if(operation == "asin") {

                    result = Converter.ToDegrees((decimal)Math.Asin((double)latter));
                }
                else if(operation == "acos") {

                    result = Converter.ToDegrees((decimal)Math.Acos((double)latter));
                }
                else {

                    result = Converter.ToDegrees((decimal)Math.Atan((double)latter));
                }
            }

            return Round(result);
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
    }
}