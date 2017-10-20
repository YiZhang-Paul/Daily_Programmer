using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace scientificNotationTranslator {
    class Program {
        static void Main(string[] args) {

            //challenge input
            double input1 = 239487d;
            double input2 = .654d;

            var generator = new NumberGenerator();
            Console.WriteLine(ToScientificNotation(input1));
            Console.WriteLine(ToScientificNotation(input2));
            Console.WriteLine(ToExpandedNumber(ToScientificNotation(input1)));
            Console.WriteLine(ToExpandedNumber(ToScientificNotation(input2)));
        }
        /*
         * convert number into scientific notation
         * @param {double} [number] - number to convert
         *
         * @return {string} [number in scientific notation]
         */
        public static string ToScientificNotation(double number) {

            string leadDigits = Math.Truncate(number).ToString();
            //change number to scientific notation
            number = leadDigits == "0" ? number * 10 : number / Math.Pow(10, leadDigits.Length - 1);
            int power = leadDigits == "0" ? -1 : leadDigits.Length - 1;

            return number + "e" + power;
        }
        /*
         * expand scientific notation
         * @param {string} [notation] - number to expand
         *
         * @return {double} [expanded number]
         */
        public static double ToExpandedNumber(string notation) {

            string[] halves = notation.Split('e');

            return Double.Parse(halves[0]) * Math.Pow(10, Int32.Parse(halves[1]));
        }
    }
}