using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cribbageHand {
    class Program {
        static void Main(string[] args) {
            CribbageChecker checker = new CribbageChecker();
            string[] hand1 = new string[] { "5D", "QS", "JC", "KH", "AC" };
            Console.WriteLine(checker.GetScore(hand1));
        }
    }
}
