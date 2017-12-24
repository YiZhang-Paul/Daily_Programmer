using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace printNumberInEnglish {
    interface IEnglishNumberFormatter {

        string[] ToHundreds(string english);
    }
}