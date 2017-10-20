using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wordLadderSteps {
    class Program {
        static void Main(string[] args) {

            var ladder = new WordLadder();
            //default input
            Console.WriteLine(string.Join("\n", ladder.GetCandidates("puma")));
            Console.WriteLine("\n");
            //challenge input
            Console.WriteLine(string.Join("\n", ladder.GetCandidates("best")));
            Console.WriteLine("\n");
            //bonus 1 input
            Console.WriteLine(ladder.GetWordWithGivenCandidates(33)[0]);
            Console.WriteLine("\n");
            //bonus 2 input
            Console.WriteLine(ladder.GetCandidatesChain("best", 3).Length);
        }
    }
}