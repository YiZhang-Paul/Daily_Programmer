using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace scientificNotationTranslator {
    class NumberGenerator {

        private Random _random = new Random();
        /*
         * generate random number
         * @param {double} [min] - minimum number generated
         * @param {double} [max] - maximum number generated
         *
         * @return {double} [randomly generated numer]
         */
        public double GetRandom(double min = 0d, double max = 99999999d) {

            return _random.Next(0, 2) == 0 ? _random.NextDouble() : (_random.NextDouble() * (max - min)) + min;
        }
        /*
         * generate random number in scientific notation
         *
         * @return {string} [random number in scientific notation]
         */
        public string GetRandomScientificNotation() {

            string baseValue = _random.Next(1, 10) + "." + _random.Next(1, 5000000);
            string power = "e" + (_random.Next(0, 2) == 0 ? '-' : '+') + _random.Next(1, 11);

            return baseValue + power;
        }
    }
}