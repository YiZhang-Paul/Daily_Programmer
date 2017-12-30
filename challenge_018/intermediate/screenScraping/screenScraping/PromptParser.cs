using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace screenScraping {
    class PromptParser : IPromptParser {

        private Tuple<string, string>[] ParseInput(string inputText) { 
        
            var inputs = new List<Tuple<string, string>>();

            foreach(var input in inputText.Split(',')) {

                string value = Regex.Match(input, @"(?<=\[).+(?=\])").Value.ToLower();
                string text = Regex.Replace(input.Trim(), @"\[|\]", "");
                inputs.Add(new Tuple<string, string>(value, text));
            }

            return inputs.ToArray();
        }

        public Prompt Parse(string prompt) {

            string name = Regex.Replace(prompt, @"\s*\(.+\)(?=:)", "");

            if(!Regex.IsMatch(prompt, @"\(.+\)")) {

                return new Prompt(name);
            }

            string input = Regex.Match(prompt, @"(?<=\().+(?=\))").Value;

            return new Prompt(name, ParseInput(input));
        }
    }
}