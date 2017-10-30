using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace functionTransformation {
    class FunctionGenerator {

        private Dictionary<string, string> _translateTable = new Dictionary<string, string> {

            {"sqrt", "Math.Sqrt"}, //square root
            {"abs", "Math.Abs"},   //absolute value
            {"sin", "Math.Sin"},   //sine
            {"cos", "Math.Cos"},   //cosine
            {"tan", "Math.Tan"},   //tangent
            {"exp", "Math.Exp"},   //exponent
            {"log", "Math.Log"}    //logarithm
        };
        /// <summary>
        /// capitalize a word
        /// </summary>
        public string Capitalize(string input) {

            return input[0].ToString().ToUpper() + input.Substring(1).ToLower();
        }
        /// <summary>
        /// generate function signature
        /// </summary>
        public string GetSignature(string head) {

            string name = Regex.Match(head, @"\w+").Value;
            var parameters = Regex.Matches(head.Substring(name.Length), @"\w+")
                                  .Cast<Match>()
                                  .Select(match => "float " + match.Value);

            return "float " + Capitalize(name) + "(" + string.Join(", ", parameters) + ")";
        }
        /// <summary>
        /// translate input expression to proper C# function calls
        /// </summary>
        public string Translate(string input) { 
        
            if(_translateTable.ContainsKey(input)) {
            
                return _translateTable[input];
            }

            if(Regex.IsMatch(input, @"\^")) {

                string[] operands = input.Split('^');

                return "Math.Pow(" + operands[0] + ", " + operands[1] + ")";
            }

            return " " + input + " ";
        }
        /// <summary>
        /// generate function body
        /// </summary>
        public string GetBody(string body) {

            string pattern = @"sqrt|abs|sin|cos|tan|exp|log|[*/+-]|\w+\^\w+";

            return "{\n\n    return " + Regex.Replace(body, pattern, match => Translate(match.Value)) + ";\n}";
        }
        /// <summary>
        /// generate function
        /// </summary>
        /// <param name="expression">user provided expression</param>
        public string GetFunction(string expression) {

            string[] headAndBody = expression.Split('=');

            return GetSignature(headAndBody[0]) + " " + GetBody(headAndBody[1]);
        }
    }
}