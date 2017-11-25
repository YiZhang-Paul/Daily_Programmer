using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace textAdventure {
    class Game {

        public User User { get; private set; }

        public Game() {

            Initialize();
        }

        public void ShowIntroduction() {

            Console.WriteLine("> Hello, {0}! Welcome to Text Adventure Game!", User.Name);
            Console.WriteLine("> To Check All Available Commands, Enter \"man\" During the Game.\n");
            ShowCommands();
            Console.WriteLine("> There are 10 Rooms Ahead. Your Goal is to Get Through All Doors and Survive.");
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

        public void Initialize() {

            User = new User();
            ShowIntroduction();
        }

        public void Run() {

            
        }
    }
}