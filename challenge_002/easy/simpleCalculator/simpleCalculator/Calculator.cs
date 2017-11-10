using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace simpleCalculator {
    class SimpleCalculator {

        public StringBuilder InputBuffer { get; private set; }
        public Stack<decimal> Numbers { get; private set; }
        public Stack<string> Operators { get; private set; }
        public bool IsDecimal { get { return Regex.IsMatch(InputBuffer.ToString(), @"\."); } }

        public SimpleCalculator() {

            Reset();
        }
        /// <summary>
        /// reset calculator
        /// </summary>
        public void Reset() {

            InputBuffer = new StringBuilder("0");
            Numbers = new Stack<decimal>();
            Operators = new Stack<string>();
        }
        /// <summary>
        /// append digits or decimal point to current input buffer
        /// </summary>
        public void AppendBuffer(string input) {

            if(InputBuffer.ToString() == "0") {

                InputBuffer = new StringBuilder(input == "." ? "0." : input);
            }
            else if(input != "." || !IsDecimal) {

                InputBuffer.Append(input);
            }
        }
        /// <summary>
        /// remove last input appened to input buffer
        /// </summary>
        public void RemoveLastInput() {

            if(InputBuffer.Length == 1) {

                InputBuffer = new StringBuilder("0");
            }
            else {

                InputBuffer.Remove(InputBuffer.Length - 1, 1);
            }
        }
    }
}