using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace simpleCalculator {
    class Equation {

        private Dictionary<string, string> _symbols = new Dictionary<string, string> {
            
            {"*", "×"},
            {"/", "÷"}
        };

        public StringBuilder Content { get; private set; }

        public Equation() {

            Clear();
        }
        /// <summary>
        /// clear equation
        /// </summary>
        public void Clear() {

            Content = new StringBuilder();
        }
        /// <summary>
        /// show content of equation
        /// </summary>
        public string Show() {

            return Content.ToString();
        }
        /// <summary>
        /// add new content to equation
        /// </summary>
        public void Add(string input) {

            Content.Append(input);
        }
        /// <summary>
        /// translate character to mathematical symbols
        /// </summary>
        public string GetSymbol(string operation) {

            return _symbols.ContainsKey(operation) ? _symbols[operation] : operation;
        }
    }
}