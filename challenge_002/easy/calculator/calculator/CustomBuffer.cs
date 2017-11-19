using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace calculator {
    class CustomBuffer {

        public StringBuilder Buffer { get; private set; }
        public string Content { get { return Buffer.ToString(); } }
        public decimal Value { get { return decimal.Parse(IsEmpty ? "0" : Content); } }
        public bool IsEmpty { get { return Buffer.Length == 0; } }
        public bool IsNegative { get { return Regex.IsMatch(Content, "-"); } }
        public bool IsDecimal { get { return Regex.IsMatch(Content, @"\."); } }
        public bool IsMaxLength { get { return Value.ToString().Length == 28; } }

        public CustomBuffer() {

            Reset();
        }

        public CustomBuffer(string input) {

            Set(input);
        }

        public void Set(string input = "") {

            Buffer = new StringBuilder(input);
        }

        public void Reset() {

            Set("0");
        }

        public void Clear() {

            Set();
        }

        public void Add(string input) {

            if(!IsMaxLength && (!IsDecimal || input != ".")) {
            
                if(Value == 0 && !IsDecimal && input != ".") {

                    Set(input);
                }
                else if(IsEmpty && input == ".") {
                
                    Set("0.");
                }
                else {
                
                    Buffer.Append(input);
                }
            }
        }
        /// <summary>
        /// delete last input in buffer
        /// </summary>
        public void Delete() {

            if(!IsEmpty) {
            
                if(Math.Abs(Value).ToString().Length == 1) {

                    Reset();
                }
                else {

                    Buffer.Remove(Buffer.Length - 1, 1);
                }
            }
        }

        public void Negate() {

            Set(IsNegative ? Content.Substring(1) : "-" + Content);
        }
    }
}