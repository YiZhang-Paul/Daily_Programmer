using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace rollTheDies {
    class Program {
        static void Main(string[] args) {
            
            //challenge input
            string input1 = "2d20";
            string input2 = "4d6";

            Console.WriteLine(string.Join(" ", RollDice(input1)));
            Console.WriteLine(string.Join(" ", RollDice(input2)));
        }
        /*
         * roll dice and record result
         * @param {string} [instruction] - instruction to roll dice
         *
         * @return {int[]} [result of each roll]
         */
        public static int[] RollDice(string instruction) { 
            //retrieve total number of rolls and faces on the dice
            var rollsAndFaces = Regex.Matches(instruction, @"\d+");
            int rolls = Int32.Parse(rollsAndFaces[0].Value);
            int faces = Int32.Parse(rollsAndFaces[1].Value);

            int[] result = new int[rolls];
            Random random = new Random();

            for(int i = 0; i < rolls; i++) {
                //roll the dice for given number of times
                result[i] = random.Next(1, faces + 1);
            }

            return result;
        }
    }
}