using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace screenScraping {
    class Prompt {

        public string Name { get; private set; }
        public Tuple<string, string>[] Inputs { get; private set; }

        public string NameText {

            get {

                return Regex.Replace(Name.ToLower(), ":", "");
            }
        }

        public Prompt(string name) {

            Name = name;
            Inputs = new Tuple<string, string>[0];
        }

        public Prompt(string name, Tuple<string, string>[] inputs) : this(name) {

            Inputs = inputs;
        }
    }
}