using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;

namespace scrambledImages {
    class Program {
        static void Main(string[] args) {

            var unscrambler = new Unscrambler("default.png");
            
            //default input
            unscrambler.Unscramble("default_unscrambled.png", Color.Red);
            //challenge input
            unscrambler.SetFile("challenge1.png");
            unscrambler.Unscramble("challenge1_unscrambled.png", Color.Red);
            unscrambler.SetFile("challenge2.png");
            unscrambler.Unscramble("challenge2_unscrambled.png", Color.Red);
            unscrambler.SetFile("challenge3.png");
            unscrambler.Unscramble("challenge3_unscrambled.png", Color.Red);
        }
    }
}