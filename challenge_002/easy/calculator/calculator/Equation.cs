using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace calculator {
    class Equation {

        private Dictionary<string, string> _operators = new Dictionary<string, string> {

            {"*", "×"},
            {"/", "÷"}
        };

        public StringBuilder Expression { get; private set; }
        public string Content { get { return Expression.ToString(); } }
        public bool IsEmpty { get { return Expression.Length == 0; } }

        public Equation() {

            Clear();
        }

        public void Set(string expression) {

            Expression = new StringBuilder(expression);
        }

        public void Clear() {

            Expression = new StringBuilder();
        }
        /// <summary>
        /// update current equation
        /// </summary>
        public void Update<T>(T input, bool swap = false) {

            if(input.GetType() == typeof(decimal)) {

                Expression.Append(input.ToString() + " ");
            }
            else if(input.GetType() == typeof(string)) {

                string operation = GetSymbol(input.ToString()) + " ";

                if(swap) {

                    Set(Regex.Replace(Content, @"\S+ (?!.)", operation));
                }
                else {
                
                    Expression.Append(operation);
                }
            }
        }
        /// <summary>
        /// retrieve proper arithmetic operator symbols
        /// </summary>
        public string GetSymbol(string operation) {

            return _operators.ContainsKey(operation) ? _operators[operation] : operation;
        }
    }
}