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
                Console.WriteLine("> " + equation._equation);
                //retrieve user input
                string input = GetInput();
                while(input == null) {
                    Console.WriteLine("Invalid Input. Please Enter an Integer.");
                    Console.WriteLine("> " + equation._equation);
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
         * randomly generate a equation
         * @param {int} [low] - low bound of numbers to pick from
         * @param {int} [high] - high bound of numbers to pick from
         *
         * @return {Equation} [equation generated]
         */
        public Equation GetEquation(int low, int high) { 
            char[] operators = new char[] { '+', '-', 'x'};
            Random random = new Random();
            //build equation and calculate answer
            int answer = random.Next(low, high + 1);
            string equation = answer.ToString();
            for(int i = 0; i < 3; i++) {
                char newOperator = operators[random.Next(0, operators.Length)];
                int number = random.Next(low, high + 1);
                equation += " " + newOperator + " " + number;
                //update answer
                if(newOperator == '+') {
                    answer += number;
                } else if(newOperator == '-') {
                    answer -= number;
                } else {
                    answer *= number;
                }
            }
            return new Equation(equation, answer);
        }
    }
}