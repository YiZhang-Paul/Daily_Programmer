using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace textAdventure {
    class Player {

        private Random _random = new Random();

        public string Name { get; set; }
        public int Health { get; private set; }
        public int Damage { get; private set; }
        public int Potions { get; set; }
        public bool InCombat { get; set; }
        public bool IsAlive { get; private set; }
        public bool HealthFull { get { return Health == 100; } }

        public Player() {

            Health = 100;
            Damage = 15;
            Potions = 3;
            IsAlive = true;
        }

        public Player(string name) {

            Name = name;
            Health = 100;
            Damage = 15;
            Potions = 3;
            IsAlive = true;
        }

        public void Attack(Player enemy) {

            enemy.Health = Math.Max(0, enemy.Health - Damage);
            Console.WriteLine(Name + " Dealt " + Damage + " Damage to " + enemy.Name + "!");
            Console.WriteLine(Name + " Health: " + Health + "; " + enemy.Name + " Health: " + enemy.Health);

            if(enemy.Health == 0) {

                enemy.IsAlive = false;
            }
        }

        public void UsePotion() { 
        
            if(Potions > 0 && Health < 100) {

                Potions--;
                Health = Math.Min(100, Health + 40);
            }
        }

        public bool Escape(Player enemy) { 
        
            if(Health >= enemy.Health) {

                return _random.Next(0, 100) <= 49;
            }

            return _random.Next(0, 100) <= Math.Truncate((double)Health / enemy.Health * 100);
        }
    }
}