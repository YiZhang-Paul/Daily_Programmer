using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace textAdventure {
    abstract class Player {

        public string Name { get; set; }
        public int Health { get; set; }
        public abstract int Damage { get; set; }
        public bool IsAlive { get { return Health > 0; } }
        public bool HealthFull { get { return Health == 100; } }

        public Player() {

            Name = GetName();
            Health = 100;
        }

        public abstract string GetName();

        public void Attack(Player enemy) {

            enemy.Health = Math.Max(0, enemy.Health - Damage);
        }
    }
}