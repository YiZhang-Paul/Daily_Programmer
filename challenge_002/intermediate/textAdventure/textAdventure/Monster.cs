using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace textAdventure {
    class Monster : Player {

        private Random _random = new Random();

        public Monster() {

            Name = GetName();
            var that = this;
        }

        public string GetName() {

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

        public int DropPotions() {

            return _random.Next(0, 3);
        }
    }
}