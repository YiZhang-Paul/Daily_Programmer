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

        public Game() {

            Initialize();
        }

        public void ShowCommands() {

            string commands = string.Join("\n", new string[] {
            
                "Show All Commands - man",
                "End Current Game - q",
                "Get in the Door - f",
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
            Console.WriteLine("> There are {0} Rooms Ahead. Your Goal is to Get Through All Doors and Survive.", Rooms);
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
            Console.WriteLine("> Game Terminated.");
        }

        public void HandleGenericCommands(string command) {

            if(command == "q") EndGame();
            else if(command == "man") ShowCommands();
            else if(command == "h") User.UsePotion();
            else if(command == "c") User.ShowStats();
        }

        public void HandleCombatCommands(string command) { 

            if(!User.InCombat) {

                Console.WriteLine("Currently not in Combat.");
            }
            else if(command == "a") {
            

            }
            else {

                User.InCombat = !User.Escape(Monster);
                Console.WriteLine(User.InCombat ? "Cannot Escape!" : "Escaped!");

                if(!User.InCombat) {

                    Console.WriteLine("You Barely Escaped from the Monster and Leave the Room.");
                    Console.WriteLine("There are {0} More Rooms Ahead!", --Rooms);
                }
                else {

                    Monster.Attack(User);
                }
            }
        }

        public void RewardPotions() {

            int potions = _random.Next(1, 4);
            User.Potion += potions;
            Console.WriteLine("You Found {0} Potion{1}!", potions, potions > 1 ? "s" : "");
        }

        public void StartCombat() {

            User.InCombat = true;
            Monster = new Monster();
            Console.WriteLine("{0} Awaits! The Battle has Started!", Monster.Name);
        }

        public void GetInRoom() {

            if(User.InCombat) {

                Console.WriteLine("Currently in Combat.");
            }
            else if(_random.Next(0, 100) < 10) {

                RewardPotions();
                Console.WriteLine("You Picked up the Potions and Leaved the Room.");
                Console.WriteLine("There are {0} More Rooms Ahead!", --Rooms);
            }
            else {

                StartCombat();
            }
        }

        public void Run() {

            while(Running) {

                string move = GetInput();

                if(Regex.IsMatch(move, "^[qhc]|man$")) {
                
                    HandleGenericCommands(move);
                }
                else if(Regex.IsMatch(move, "^[ae]$")) {

                    HandleCombatCommands(move);

                    if(!User.IsAlive) {

                        Console.WriteLine("You Died!");
                        EndGame();
                    }
                }
                else {

                    GetInRoom();
                }
            }
        }
    }
}