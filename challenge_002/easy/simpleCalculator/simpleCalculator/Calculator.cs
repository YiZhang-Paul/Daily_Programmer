using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace simpleCalculator {
    class ScientificCalculator {

        private const string _lock = "l";
        private const string _binaryOperator = "[+-/*^]|mod";
        private const decimal _pi = 3.1415926535897932384626433832m;
        //assets
        public Equation Equation { get; private set; }
        public Input Input { get; private set; }
        public Stack<decimal> Numbers { get; private set; }
        public Stack<string> Operations { get; private set; }
        //constants and utility properties
        public GammaFunction GammaFunction { get; private set; }
        public string TemporarySave { get; set; }
        public decimal PI { get; private set; }
        public string Result { get { return Numbers.Peek() == 0 ? "0" : Numbers.Peek().ToString(); } }
        public bool Locked { get { return Operations.Count > 0 && Operations.Peek() == _lock; } }

        public ScientificCalculator() {

            Reset();
        }
        /// <summary>
        /// load assets
        /// </summary>
        public void LoadAssets() {

            Equation = new Equation();
            Input = new Input();
            Numbers = new Stack<decimal>();
            Operations = new Stack<string>();
        }
        /// <summary>
        /// load utilities
        /// </summary>
        public void LoadUtilities() {

            GammaFunction = new GammaFunction();
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

            Operations.Push(_lock);
        }
        /// <summary>
        /// remove lock on current result
        /// </summary>
        public void Unlock() {
 
            while(Operations.Count > 0 && Operations.Peek() == _lock) {

                Operations.Pop();
            }
        }
        /// <summary>
        /// append new content to input buffer
        /// </summary>
        public void AddInput(string input) {
 
            if(Locked) {

                Unlock();
                Input.Clear();

                if(Operations.Count == 0) {

                    Numbers.Clear();
                }
            }

            TemporarySave = null;
            Input.Add(input);
        }
        /// <summary>
        /// save input buffer in number stack
        /// </summary>
        public void SaveInput() {

            Numbers.Push(Input.Value);
        }
        /// <summary>
        /// save temporary value in number stack
        /// </summary>
        public void SaveTemporary() {

            if(TemporarySave != null) {
            
                Numbers.Push(decimal.Parse(TemporarySave));
                TemporarySave = null;
            }
        }
        /// <summary>
        /// save/swap last operator in operation stack
        /// </summary>
        public void SaveOperator(string operation, bool swap = false) {

            Unlock();

            if(swap && Operations.Count > 0) {

                Operations.Pop();
            }

            Operations.Push(operation);
            SetLock();
        }
        /// <summary>
        /// check if an operator is binary operator
        /// </summary>
        public bool IsBinaryOperator(string operation) {

            return Regex.IsMatch(operation, _binaryOperator);
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
        /// evaluate last operation
        /// </summary>
        public void EvaluateLast() {

            Unlock(); //remove locks 
            
            if(!IsBinaryOperator(Operations.Peek()) || Numbers.Count == 1) {

                decimal operand = Numbers.Pop();
                Numbers.Push(Calculate(Operations.Pop(), operand, operand));
            }
            else {
            
                Numbers.Push(Calculate(Operations.Pop(), Numbers.Pop(), Numbers.Pop()));
            }
        }
        /// <summary>
        /// evaluate entire equation
        /// </summary>
        public void EvaluateAll() { 
        
            while(Operations.Count > 0) {

                EvaluateLast();
            }
            //set result to buffer for reuse
            Input.Set(Result);
            SetLock();
        }
        /// <summary>
        /// attempt evaluating equation so far
        /// </summary>
        public void TryEvaluateAll() { 
        
            while(Operations.Count > 0 && !Regex.IsMatch(Operations.Peek(), "[+-]")) {

                EvaluateLast();
            }
            //set result to buffer for reuse
            Input.Set(Result);
            SetLock();
        }
        /// <summary>
        /// handle binary operators
        /// </summary>
        public void HandleBinaryOperator(string operation) {

            Unlock();
            Operations.Pop();

            if(Regex.IsMatch(operation, "[+-]")) {

                EvaluateAll();
            }
            else {

                TryEvaluateAll();
            }

            SaveOperator(operation);
        }
        /// <summary>
        /// process intermediate arithmetic operations
        /// </summary>
        public void Process(string operation) {

            if(!Locked) {

                SaveInput();
            }

            bool swap = IsBinaryOperator(operation) && Locked && TemporarySave == null;
            SaveOperator(operation, swap);
            SaveTemporary();

            if(!swap) {
            
                if(!IsBinaryOperator(operation)) {

                    TryEvaluateAll();
                }
                else {

                    HandleBinaryOperator(operation);
                }
            }
        }
        /// <summary>
        /// calculate final result
        /// </summary>
        public void GetFinalResult() {

            if(!Locked) {

                SaveInput();
            }

            SaveTemporary();
            EvaluateAll();
            Input.Set(Result);
            Equation = new Equation();
        }
        /// <summary>
        /// calculate factorial of a number
        /// </summary>
        public decimal Factorial(decimal number) { 
        
            if(number < 0) {

                throw new Exception();
            }

            if(number <= 1) {

                return number == 1 ? number : (decimal)GammaFunction.Gamma((double)number + 1).Real;
            }

            return number * Factorial(number - 1);
        }
        /// <summary>
        /// load PI into calculator
        /// </summary>
        public void LoadPI() {

            Input.Set(PI.ToString());
            TemporarySave = PI.ToString();
            SetLock();
        }
        /// <summary>
        /// negate input buffer value
        /// </summary>
        public void Negate() {

            Input.Negate();

            if(Numbers.Count > 0) {
            
                Numbers.Push(Numbers.Pop() * -1);
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