using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace guessNumberGame {
    class GuessNumberGame {

        public int Goal { get; private set; }
        public int Attemps { get; private set; }

        public GuessNumberGame() {

            Init();
        }
        /*
         * initialize game
         */
        public void Init() {
            //set game goal and remaining attempts
            Goal = new Random().Next(1, 101);
            Attemps = 10;
        }
        /*
         * run game
         */
        public void Run() { 
        
            Console.WriteLine("Welcome to guess number game! I have already picked a number in [1, 100]. Please make a guess. Type \"exit\" to quit.\n");

            while(true) {

                int input = -1;
                //retrieve and validate user input
                do {

                    input = GetInput();
                
                } while(input == -1);
                //check for exit
                if(input == 0) {

                    Console.WriteLine("<Program terminated>");
                    break;
                }
                //check current game state
                if(ProcessInput(input)) {

                    break;
                }
            }
        }
        /*
         * retrieve and validate user input
         *
         * @return {int} [valid user input]
         */
        public int GetInput() { 
        
            Console.WriteLine("> Please enter an integer between 1 and 100 inclusively.\n");
            string input = Console.ReadLine();
            //check for exit
            if(input.Trim() == "exit") {

                return 0;
            }

            int userPick;
            //validate user input
            if(Int32.TryParse(input, out userPick)) {

                return userPick >= 1 && userPick <= 100 ? userPick : -1;
            }

            return -1;
        }
        /*
         * process user input and check game state
         * @param {int} [input] - user input
         *
         * @return {bool} [game end/continue]
         */
        public bool ProcessInput(int input) {

            if(input == Goal) {

                Console.WriteLine("Correct! That is my number, you win! <Program terminated>");
                
                return true;
            }
            
            Console.WriteLine("Wrong. That number is " + (input < Goal ? "below" : "above") + " my number. Attempts left: " + --Attemps + "\n");
            //check if game should continue
            if(Attemps == 0) {

                Console.WriteLine("No attempts left. You lose! <Program terminated>");
            }

            return Attemps == 0;
        }
    }
}