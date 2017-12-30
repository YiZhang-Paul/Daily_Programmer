using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace screenScraping {
    interface IPromptParser {

        Prompt Parse(string text);
    }
}