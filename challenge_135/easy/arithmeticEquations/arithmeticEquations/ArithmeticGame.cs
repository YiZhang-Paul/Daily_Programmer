using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace arithmeticEquations {
    class ArithmeticGame {
        public struct Equation {
            public string _equation;
            public int _answer;
            //equation constructor
            public Equation(string equation, int answer) {
                _equation = equation;
                _answer = answer;
            }
        }
        /*
         * start a game
         * @param {int} [low] - low bound of numbers to pick from
         * @param {int} [high] - high bound of numbers to pick from
         */
        public void StartGame(int low, int high) {
            Equation equation = GetEquation(low, high);     
            while(true) {
                Console.WriteLine("> " + equation._equation + " " + equation._answer);
                //retrieve user input
                string input = GetInput();
                while(input == null) {
                    Console.WriteLine("Invalid Input. Please Enter an Integer.");
                    Console.WriteLine("> " + equation._equation + " " + equation._answer);
                    input = GetInput();
                }
                //check for program termination request
                if(IsExitCode(input)) {
                    return;
                }
                //check user answers
                if(Int32.Parse(input) == equation._answer) {
                    Console.WriteLine("Correct!");
                    StartGame(low, high);
                    break;
                }
                Console.WriteLine("Incorrect...");
            } 
        }
        /*
         * check if user entered exit code
         * @param {string} [input] - user input
         * 
         * @return {bool} [test result]
         */
        public bool IsExitCode(string input) {
            return input.ToLower() == "q";
        }
        /*
         * prompt for user input and validate user input
         *
         * @return {string} [valid user input]
         */
        public string GetInput() {
            string input = Console.ReadLine().Trim();
            int dummy;
            if(IsExitCode(input) || Int32.TryParse(input, out dummy)) {
                return input;
            }
            return null;
        }
        /*
         * evaluate an single arithmetic operation
         * @param {List<string>} [expressions] - expressions containing arithmetic operations 
         * @param {int} [index] - index of operator
         */
        public void EvalOperator(List<string> expressions, int index) {
            int operand1 = Int32.Parse(expressions[index - 1]);
            int operand2 = Int32.Parse(expressions[index + 1]);
            string curOperator = expressions[index];
            if(curOperator == "x") {
                expressions[index] = (operand1 * operand2).ToString();
            } else if(curOperator == "-") {
                expressions[index] = (operand1 - operand2).ToString();
            } else if(curOperator == "+") { 
                expressions[index] = (operand1 + operand2).ToString();            
            }
            expressions.RemoveAt(index + 1);
            expressions.RemoveAt(index - 1);
        }
        /*
         * evaluate an equation
         * @param {List<string>} [expressions] - expressions to evaluate
         *
         * @return {int} [evaluation result]
         */
        public int EvalEquation(List<string> expressions) {
            while(expressions.Count > 1) {
                for(int i = 0; i < expressions.Count; i++) {
                    if(expressions[i] == "x") {
                        EvalOperator(expressions, i);
                        i = -1;
                    }
                }
                for(int i = 0; i < expressions.Count; i++) {
                    if(expressions[i] == "-" || expressions[i] == "+") {
                        EvalOperator(expressions, i);
                        i = -1;
                    }
                }
            }
            return Int32.Parse(expressions[0]);
        }
        /*
         * randomly generate a equation
         * @param {int} [low] - low bound of numbers to pick from
         * @param {int} [high] - high bound of numbers to pick from
         *
         * @return {Equation} [equation generated]
         */
        public Equation GetEquation(int low, int high) { 
            string[] operators = new string[] { "+", "-", "x"};
            Random random = new Random();
            //build equation and calculate answer
            var expItems = new List<string>(new string[] { random.Next(low, high).ToString() });
            for(int i = 0; i < 3; i++) {
                expItems.Add(operators[random.Next(0, operators.Length)]);
                expItems.Add(random.Next(low, high).ToString());
            }
            return new Equation(string.Join(" ", expItems), EvalEquation(expItems));
        }
    }
}