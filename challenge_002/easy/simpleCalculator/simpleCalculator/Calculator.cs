using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace simpleCalculator {
    class SimpleCalculator {

        private string _binaryOperators = "+-/*^";

        public Equation Equation { get; private set; }
        public NumberBuffer NumberBuffer { get; private set; }
        public Stack<decimal> Numbers { get; private set; }
        public Stack<string> Operations { get; private set; }
        public string Result { get { return Numbers.Peek().ToString(); } }
        public bool Locked { get { return Operations.Count > 0 && Operations.Peek() == "l"; } }
        public bool CanChangeBuffer { get { return false; } }

        public SimpleCalculator() {

            Reset();
        }
        /// <summary>
        /// reset calculator
        /// </summary>
        public void Reset() {

            Equation = new Equation();
            NumberBuffer = new NumberBuffer();
            Numbers = new Stack<decimal>();
            Operations = new Stack<string>();
        }
        /// <summary>
        /// set lock on result to allow number reuse
        /// </summary>
        public void SetLock() {

            Operations.Push("l");
        }
        /// <summary>
        /// append new content to current number buffer
        /// </summary>
        public void AddBuffer(string input) {

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

            Numbers.Push(decimal.Parse(NumberBuffer.Show()));
            NumberBuffer.Clear();
        }
        /// <summary>
        /// append new content to current equation
        /// </summary>
        public void AddEquation(string input = null) {

            Equation.Add(input ?? Numbers.Peek() + " " + Operations.Peek() + " ");
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
            }

            return 0;
        }
        /// <summary>
        /// evaluate entire equation
        /// </summary>
        public void EvaluateAll() {

            while(Operations.Count > 0) {

                string operation = Operations.Pop();
                //remove placeholder locks
                if(operation == "l") {
                
                    continue;
                }

                if(Regex.IsMatch(operation, "[" + _binaryOperators + "]")) {

                    if(Numbers.Count > 1) {
                    
                        Numbers.Push(Calculate(operation, Numbers.Pop(), Numbers.Pop()));
                    }
                }
                else {

                }
            }
        }
        /// <summary>
        /// attempt evaluating equation so far
        /// </summary>
        public void TryEvaluateAll() {

            if(Numbers.Count == 1) {
            

            }
            else if(Regex.IsMatch(Operations.Peek(), "[+-]")) {

                string lastOperator = Operations.Pop();
                EvaluateAll();
                Operations.Push(lastOperator);
            }
        }
    }
}