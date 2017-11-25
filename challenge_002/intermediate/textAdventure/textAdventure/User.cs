using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace textAdventure {
    class User : Player {

        public override int Damage { get; set; }

        public User() {

            Damage = 15;
        }

        public override string GetName() {

            Console.WriteLine("Please Enter Your Name:");
            string name = Console.ReadLine().Trim();

            return name != "" ? name : GetName();
        }
    }
}