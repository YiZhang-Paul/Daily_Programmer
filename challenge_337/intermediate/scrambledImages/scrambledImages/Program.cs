using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;
using System.Diagnostics;

namespace scrambledImages {
    class Program {
        static void Main(string[] args) {

            var watch = new Stopwatch();

            var unscrambler = new Unscrambler("default.png");

            watch.Start();

            //default input
            unscrambler.Unscramble("default_unscrambled.png", Color.Red);
            //challenge input
            unscrambler.SetFile("challenge1.png");
            unscrambler.Unscramble("challenge1_unscrambled.png", Color.Red);
            unscrambler.SetFile("challenge2.png");
            unscrambler.Unscramble("challenge2_unscrambled.png", Color.Red);
            unscrambler.SetFile("challenge3.png");
            unscrambler.Unscramble("challenge3_unscrambled.png", Color.Red);

            //previous: 3500ms
            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds);
        }
    }
}