using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace reverseGuessingGame {
    class Program {

        private static Random _random = new Random();

        static void Main(string[] args) {

            int low = 1, high = 100;
            Console.WriteLine("Welcome to Reverse Number Guessing Game!");

            while(true) {

                int guess = GuessNumber(low, high);
                Console.WriteLine("Is the Number " + guess + "?");
                char answer = GetInput();

                if(answer == 'y') {

                    Console.WriteLine("Success!");
                    break;
                }
                else if(low >= high) {

                    Console.WriteLine("Don't Fool Me!");
                    continue;
                }

                low = answer == 'l' ? guess + 1 : low;
                high = answer == 'l' ? high : guess - 1;
            }
        }

        private static char GetInput() {

            Console.WriteLine("Please Enter Result: Y - Correct, L - Too Low, H - Too High");
            string input = Console.ReadLine().Trim().ToLower();

            return Regex.IsMatch(input, "^y|l|h$") ? input[0] : GetInput();
        }

        private static int GuessNumber(int low, int high) {

            int total = low + high;

            return total % 2 == 0 ? total / 2 : (total - 1) / 2;
        }
    }
}