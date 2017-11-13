using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace simpleCalculator {
    class InputBuffer {

        public StringBuilder Buffer { get; private set; }
        public string Content { get { return Buffer.ToString(); } }
        public bool IsEmpty { get { return Content == ""; } }

        public InputBuffer() {

            Clear();
        }
        /// <summary>
        /// clear buffer
        /// </summary>
        public void Clear() {

            Buffer = new StringBuilder();
        }
        /// <summary>
        /// append new content to buffer
        /// </summary>
        public virtual void Add(string input) {

            Buffer.Append(input);
        }
        /// <summary>
        /// set buffer value
        /// </summary>
        public void Set(string input) {

            Buffer = new StringBuilder(input);
        }
    }
}