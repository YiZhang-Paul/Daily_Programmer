using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace simpleCalculator {
    class Input : InputBuffer {

        public decimal Value { get { return decimal.Parse(Content); } }
        public bool IsDecimal { get { return Regex.IsMatch(Content, @"\."); } }

        public Input() {

            Set("0");           
        }
        /// <summary>
        /// append new digit or decimal to buffer
        /// </summary>
        public override void Add(string input) { 
        
            if(Content == "0") {

                Set(input == "." ? "0." : input);
            }
            else if(input != "." || !IsDecimal) {

                Buffer.Append(input);
            }
        }
        /// <summary>
        /// remove last input in buffer
        /// </summary>
        public void RemoveLast() {

            if(Buffer.Length == 1) {

                Set("0");
            }
            else {

                Buffer.Remove(Buffer.Length - 1, 1);
            }
        }
        /// <summary>
        /// negate current buffer value
        /// </summary>
        public void Negate() {

            Set((Value * -1).ToString());
        }
    }
}