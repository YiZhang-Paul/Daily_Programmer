using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cribbageHand {
    class Program {
        static void Main(string[] args) {
            //challenge input
            string[] hand1 = new string[] { "5D", "QS", "JC", "KH", "AC" };
            string[] hand2 = new string[] { "8C", "AD", "10C", "6H", "7S" };
            string[] hand3 = new string[] { "AC", "6D", "5C", "10C", "8C" };
           
            CribbageChecker checker = new CribbageChecker();
            Console.WriteLine(checker.GetResult(hand1));
            Console.WriteLine(checker.GetResult(hand2));
            Console.WriteLine(checker.GetResult(hand3));
        }
    }
}
