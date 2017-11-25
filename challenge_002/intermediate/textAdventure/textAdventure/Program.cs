using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace textAdventure {
    class Program {

        private static Random _random = new Random();

        static void Main(string[] args) {

            int doors = 10;
            var player = new Player(GetName());
            var monster = new Monster();
            Console.WriteLine("> Welcome, " + player.Name + "!");
            Console.WriteLine("> To Show All Commands, Enter \"man\" During the Game.\n");
            Console.WriteLine(GetCommands() + "\n");
            Console.WriteLine("> There are 10 Rooms Ahead of You. Your Goal is to Get Through Them All and Survive.");

            while(true) {

                if(doors == 0 && !player.InCombat) {

                    Console.WriteLine("You Win!");
                    break;
                }

                Console.WriteLine("> " + doors + " Doors Remaining.");
                string move = GetInput();

                if(move == "q") {

                    Console.WriteLine("> Game Terminated.");
                    break;
                }
                else if(move == "man") {

                    Console.WriteLine(GetCommands());
                    continue;
                }
                else if(move == "h") {
                
                    if(player.Potions == 0) {

                        Console.WriteLine("Not Enough Potions.");
                    }
                    else if(player.HealthFull) {

                        Console.WriteLine("Health Full.");
                    }
                    else {

                        player.UsePotion();
                        Console.WriteLine("Health Restored. Current Health: " + player.Health);
                    }
                }
                else if(move == "c") {

                    Console.WriteLine("Your Health: " + player.Health + ", Potions: " + player.Potions);
                }

                if(!player.InCombat) {
                
                    switch(move) {
                    
                        case "f" :

                            doors--;
                            GetIndoor(player, ref monster);
                            break;

                        case "e" : case "a" :

                            Console.WriteLine("Currently not in Combat.");
                            break;
                    }
                }
                else {
                
                    switch(move) {
                    
                        case "f" :

                            Console.WriteLine("Currently in Combat.");
                            break;

                        case "e" :

                            player.InCombat = !player.Escape(monster);
                            Console.WriteLine(player.InCombat ? "Cannot Escape!" : "Escaped!");
                            break;

                        case "a" :

                            FinishTurn(player, monster);
                            break;
                    }
                }
            }
        }

        private static string GetName() {

            Console.WriteLine("> Please Enter Your Name:");
            string name = Console.ReadLine().Trim();

            return name != "" ? name : GetName();
        }

        private static string GetInput() {

            Console.WriteLine("> What to do?");
            string move = Console.ReadLine().Trim();

            return Regex.IsMatch(move, "^[fhaeqc]|man$") ? move : GetInput();
        }

        private static void GetIndoor(Player player, ref Monster monster) {

            if(_random.Next(0, 100) <= 10) {

                int potions = _random.Next(1, 4);
                player.Potions += potions;
                Console.WriteLine("You Found " + potions + " Potions!");
            }
            else {

                player.InCombat = true;
                monster = new Monster();
                Console.WriteLine(monster.Name + " Awaits!");
            }
        }

        private static void FinishTurn(Player player, Monster monster) {

            player.Attack(monster);

            if(!monster.IsAlive) {

                Console.WriteLine(monster.Name + " is Slain.");
                player.InCombat = false;
                int potions = monster.DropPotions();

                if(potions > 0) {

                    player.Potions += potions;
                    Console.WriteLine("Monster Dropped " + potions + " Potions!");
                }
            }
            else {

                monster.Attack(player);
            }
        }

        private static string GetCommands() {

            return string.Join("\n", new string[] {
            
                "> Commands:",
                "check health and potions - c",
                "get through door - f",
                "use potion - h",
                "attack move - a",
                "run away - e",
                "check commands - man",
                "quit game - q"
            });
        }
    }
}