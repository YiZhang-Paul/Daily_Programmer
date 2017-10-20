using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace scientificNotationTranslator {
    class NumberGenerator {
        /*
         * generate random number
         * @param {double} [min] - minimum number generated
         * @param {double} [max] - maximum number generated
         *
         * @return {double} [randomly generated number]
         */
        public double GetRandom(double min = 0d, double max = 99999999d) {

            var random = new Random();

            return random.Next(0, 2) == 0 ? random.NextDouble() : (random.NextDouble() * (max - min)) + min;
        }
        /*
         * generate random number in scientific notation
         *
         * @return {string} [random number in scientific notation]
         */
        public string GetRandomScientificNotation() {

            var random = new Random();
            string baseValue = random.Next(1, 10) + "." + random.Next(1, 5000000);
            string power = "e" + (random.Next(0, 2) == 0 ? '-' : '+') + random.Next(1, 11);

            return baseValue + power;
        }
    }
}