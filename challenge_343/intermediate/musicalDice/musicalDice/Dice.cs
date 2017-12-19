using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace musicalDice {
    class Dice {

        private Random _random = new Random();

        private int Faces { get; set; }

        public Dice(int faces = 6) {

            Faces = faces;
        }

        public int Roll() {

            return _random.Next(1, Faces + 1);
        }
    }
}