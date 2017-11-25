using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace textAdventure {
    class Monster : Player {

        private Random _random = new Random();

        public override int Damage { get; set; }

        public Monster() {

            Damage = 10;
        }

        public override string GetName() {

            try {

                string[] names = File.ReadAllLines("MonsterNames.txt");

                return names[_random.Next(0, names.Length)];
            }
            catch(Exception exception) {

                Console.WriteLine("File not Found.");
                Console.WriteLine(exception.Message);
            }

            return null;
        }
    }
}