using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace textAdventure {
    class Game {

        private Random _random = new Random();

        public User User { get; private set; }
        public Monster Monster { get; private set; }
        public int Rooms { get; private set; }
        public bool Running { get; private set; }
        public bool Winning { get { return User.IsAlive && Rooms == 0 && !User.InCombat; } }

        public Game() {

            Initialize();
        }

        public void ShowCommands() {

            string commands = string.Join("\n", new string[] {
            
                "Show All Commands - man",
                "End Current Game - q",
                "Get in the Room - f",
                "Attack Monster - a",
                "Use Potion - h",
                "Escape - e",
                "Check Health and Potion - c"
            });

            Console.WriteLine("> Commands:\n" + commands + "\n");
        }

        public void ShowIntroduction() {

            Console.WriteLine("> Hello, {0}! Welcome to Text Adventure Game!", User.Name);
            Console.WriteLine("> To Check All Available Commands, Enter \"man\" During the Game.\n");
            ShowCommands();
            Console.WriteLine("> There are {0} Rooms Ahead. Your Goal is to Get Through All Doors and Survive.\n", Rooms);
        }

        public void Initialize() {

            User = new User();
            Rooms = 10;
            ShowIntroduction();
            Running = true;
        }

        public string GetInput() {

            Console.WriteLine("> What to do?");
            string move = Console.ReadLine().Trim().ToLower();

            return Regex.IsMatch(move, "^[qfahec]|man$") ? move : GetInput();
        }

        public void EndGame() {

            Running = false;
            Console.WriteLine("\n> Game Terminated.");
        }

        public void HandleGenericCommands(string command) {

            if(command == "q") EndGame();
            else if(command == "man") ShowCommands();
            else if(command == "h") User.UsePotion();
            else if(command == "c") User.ShowStats();
        }

        public void TryAttack() {

            User.Attack(Monster);

            if(!Monster.IsAlive) {

                EndCombat();
            }
            else {

                Monster.Attack(User);
            }
        }

        public void TryEscape() {

            User.InCombat = !User.Escape(Monster);
            Console.WriteLine(User.InCombat ? "Cannot Escape!" : "Escaped!");

            if(!User.InCombat) {

                Console.WriteLine("You Barely Escaped from the Monster and Left the Room.");
                Console.WriteLine("There are {0} More Rooms Ahead!", --Rooms);
            }
            else {

                Monster.Attack(User);
            }
        }

        public void HandleCombatCommands(string command) { 

            if(!User.InCombat) {

                Console.WriteLine("Currently not in Combat.");
            }
            else if(command == "a") {

                TryAttack();
            }
            else {

                TryEscape();
            }
        }

        public void RewardPotions(int min = 1, int max = 4) {

            int potions = _random.Next(min, max);

            if(potions > 0) {
            
                User.Potion += potions;
                Console.WriteLine("You Found {0} Potion{1}!", potions, potions > 1 ? "s" : "");
                Console.WriteLine("You Picked up the Potions and Left the Room.");
            }
        }

        public void StartCombat() {

            User.InCombat = true;
            Monster = new Monster();
            Console.WriteLine("{0} Awaits! The Battle has Started!", Monster.Name);
        }

        public void EndCombat() {

            User.InCombat = false;
            Console.WriteLine("{0} is Slain!", Monster.Name);
            RewardPotions(0);
            Console.WriteLine("There are {0} More Rooms Ahead!", --Rooms);
        }

        public void GetInRoom() {

            if(User.InCombat) {

                Console.WriteLine("Currently in Combat.");
            }
            else if(_random.Next(0, 100) < 10) {

                RewardPotions();
                Console.WriteLine("There are {0} More Rooms Ahead!", --Rooms);
            }
            else {

                StartCombat();
            }
        }
        /// <summary>
        /// check current game status
        /// </summary>
        public bool CheckGameStatus() {

            if(!User.IsAlive || Winning) {

                Console.WriteLine(Winning ? "You Won!" : "You Died!");

                return true;
            }

            return false;
        }
        /// <summary>
        /// main game loop
        /// </summary>
        public void Run() {

            while(Running) {

                string move = GetInput();
                //handle user inputs
                if(Regex.IsMatch(move, "^[qhc]|man$")) {
                
                    HandleGenericCommands(move);
                }
                else if(Regex.IsMatch(move, "^[ae]$")) {

                    HandleCombatCommands(move);
                }
                else {

                    GetInRoom();
                }
                //check game end
                if(CheckGameStatus()) {
                
                    EndGame();
                }
            }
        }
    }
}