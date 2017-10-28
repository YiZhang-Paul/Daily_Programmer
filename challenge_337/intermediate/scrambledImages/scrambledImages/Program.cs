using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace scrambledImages {
    class Program {
        static void Main(string[] args) {

            var unscrambler = new Unscrambler();

            //default input
            unscrambler.Unscramble("default.png", "default_unscrambled.png");
            //challenge input
            unscrambler.Unscramble("challenge1.png", "challenge1_unscrambled.png");
            unscrambler.Unscramble("challenge2.png", "challenge2_unscrambled.png");
            unscrambler.Unscramble("challenge3.png", "challenge3_unscrambled.png");
            //bonus input
            unscrambler.Unscramble("bonus.png", "bonus_unscrambled.png", true);
        }
    }
}