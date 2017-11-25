using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace textAdventure {
    class User : Player {

        private Random _random = new Random();

        public override int Damage { get; set; }
        public int Potion { get; set; }
        public bool InCombat { get; set; }

        public User() {

            Damage = 15;
            Potion = 3;
        }

        public override string GetName() {

            Console.WriteLine("Please Enter Your Name:");
            string name = Console.ReadLine().Trim();

            return name != "" ? name : GetName();
        }
        /// <summary>
        /// show current health and remaining potions
        /// </summary>
        public void ShowStats() {

            Console.WriteLine("Health: {0}; Potions: {1}", Health, Potion);
        }

        public void UsePotion() { 
        
            if(Potion == 0 || HealthFull) {

                Console.WriteLine(Potion == 0 ? "Not Enough Potion." : "Health Already Full.");
            }
            else {

                Potion--;
                Health = Math.Min(Health + 40, 100);
                Console.WriteLine("Health Restored to {0}; Potions Remain: {1}", Health, Potion);
            }
        }
        /// <summary>
        /// attempt escaping from monster and return result
        /// </summary>
        public bool Escape(Monster monster) { 
        
            if(Health >= monster.Health) {

                return _random.Next(0, 100) < 40;
            }

            return _random.Next(0, 100) < Math.Truncate((double)Health / monster.Health * 30);
        }
    }
}