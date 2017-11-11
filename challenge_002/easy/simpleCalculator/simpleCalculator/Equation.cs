using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace simpleCalculator {
    class Equation : InputBuffer {

        private Dictionary<string, string> _symbols = new Dictionary<string, string> {
            
            {"*", "×"},
            {"/", "÷"}
        };
        /// <summary>
        /// translate character to mathemetical symbols
        /// </summary>
        /// <returns></returns>
        public string GetSymbol(string operation) {
            
            return _symbols.ContainsKey(operation) ? _symbols[operation] : operation;
        }
    }
}