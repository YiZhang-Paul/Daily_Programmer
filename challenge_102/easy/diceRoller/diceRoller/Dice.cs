using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace diceRoller {
    class Dice {

        private Random _random = new Random();
        /*
         * roll dice
         * @param {int} [min] - minimum roll
         * @param {int} [max] - maximum roll
         *
         * @return {int} [dice roll]
         */
        public int Roll(int min = 0, int max = 10) {

            return _random.Next(min, max + 1);
        }
        /*
         * process dice notation
         * @param {string} [notation] - dice notation to process
         *
         * @return {double} [result of dice roll]
         */
        public double ProcessNotation(string notation) {

            int a = Regex.IsMatch(notation, @"\d+d") ? Int32.Parse(Regex.Match(notation, @"\d+").Value) : 1;
            int b = Int32.Parse(Regex.Match(notation, @"(?<=d)\d+").Value);
            int c = Regex.IsMatch(notation, "[+-]") ? Int32.Parse(Regex.Match(notation, @"[+-]\d+").Value) : 0;

            return new double[a].Select(roll => Roll(1, b)).Sum() + c;        
        }
    }
}