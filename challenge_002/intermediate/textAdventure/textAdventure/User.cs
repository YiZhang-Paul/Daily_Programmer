using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace textAdventure {
    class User : Player {

        public override int Damage { get; set; }
        public int Potion { get; set; }
        public bool InCombat { get; private set; }

        public User() {

            Damage = 15;
            Potion = 3;
        }

        public override string GetName() {

            Console.WriteLine("Please Enter Your Name:");
            string name = Console.ReadLine().Trim();

            return name != "" ? name : GetName();
        }

        public void ShowStats() {

            Console.WriteLine("Health: {0}; Potions: {1}", Health, Potion);
        }

        public void UsePotion() { 
        
            if(Potion == 0) {

                Console.WriteLine("Not Enough Potion.");
            }
            else if(HealthFull) {

                Console.WriteLine("Health Already Full.");
            }
            else {

                Potion--;
                Health = Math.Min(Health + 40, 100);
                Console.WriteLine("Health Restored to {0}; Potions Remain: {1}", Health, Potion);
            }
        }
    }
}