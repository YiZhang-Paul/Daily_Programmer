using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace simpleCalculator {
    class NumberBuffer {

        public StringBuilder Content { get; private set; }
        public bool IsDecimal { get { return Regex.IsMatch(Content.ToString(), @"\."); } }

        public NumberBuffer() {

            Clear();
        }
        /// <summary>
        /// clear buffer
        /// </summary>
        public void Clear() {
            
            SetValue("0");
        }
        /// <summary>
        /// get buffer value in decimal
        /// </summary>
        public decimal GetValue() {

            return decimal.Parse(Content.ToString());
        }
        /// <summary>
        /// set buffer value
        /// </summary>
        public void SetValue(string input) {

            Content = new StringBuilder(input);
        }
        /// <summary>
        /// show content of number buffer
        /// </summary>
        public string Show() {

            return Content.ToString();
        }
        /// <summary>
        /// append new content to buffer
        /// </summary>
        public void Add(string input) {

            if(Content.ToString() == "0") {

                Content = new StringBuilder(input == "." ? "0." : input);
            }
            else if(input != "." || !IsDecimal) {

                Content.Append(input);
            }
        }
        /// <summary>
        /// remove last input in content
        /// </summary>
        public void RemoveLast() {

            if(Content.Length == 1) {

                Clear();
            }
            else {

                Content.Remove(Content.Length - 1, 1);
            }
        }
        /// <summary>
        /// negate current value in buffer
        /// </summary>
        public void Negate() {

            SetValue((GetValue() * -1).ToString());
        }
    }
}