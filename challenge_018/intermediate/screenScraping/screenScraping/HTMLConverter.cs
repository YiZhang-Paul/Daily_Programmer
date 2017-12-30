using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace screenScraping {
    class HTMLConverter {

        private IPromptParser Parser { get; set; }

        public HTMLConverter(IPromptParser parser) {

            Parser = parser;
        }

        private string ToTextInputTag(Prompt prompt) {

            return "<input type=\"text\" name=\"" + prompt.NameText + "\"/>\n\n";
        }

        private string ToRadioButtonTag(Prompt prompt) {

            return prompt.Inputs.Aggregate("", (tags, input) => {

                string name = prompt.NameText;
                string value = input.Item1.ToLower();
                string text = input.Item2;

                return tags + "<input type=\"radio\" name=\"" + name + "\" value=\"" + value + "\"/> " + text + "\n\n";
            });
        }

        private string ToDropdownBoxTag(Prompt prompt) {

            return prompt.Inputs.Aggregate("<select name=\"" + prompt.NameText + "\">\n\n", (tags, input) => {

                string value = input.Item1.ToLower();
                string text = input.Item2;

                return tags + "<option value=\"" + value + "\">" + text + "</option>\n\n";

            }) + "</select>\n\n";
        }

        private string PromptToHTML(Prompt prompt) {

            if(prompt.Inputs.Length == 0) {

                return ToTextInputTag(prompt);
            }
            
            if(prompt.Inputs.Length < 5) {

                return ToRadioButtonTag(prompt);
            }

            return ToDropdownBoxTag(prompt);
        }

        public string ToHTML(string[] prompts) {

            var output = new StringBuilder("<html>\n\n<body>\n\n<form>\n\n");
            
            foreach(string prompt in prompts.Where(line => line.Trim() != "")) {

                var parsedPrompt = Parser.Parse(prompt);
                string tags = PromptToHTML(parsedPrompt);
                output.Append(parsedPrompt.Name + "\n\n" + tags + "<br/>\n\n");
            }

            return output.Append("<input type=\"submit\" value=\"Submit\"/>")
                         .Append("\n\n</form>\n\n</body>\n\n</html>")
                         .ToString();
        }
    }
}