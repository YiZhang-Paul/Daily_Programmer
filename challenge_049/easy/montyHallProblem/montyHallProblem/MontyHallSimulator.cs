using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace montyHallProblem {
    class MontyHallSimulator {

        private Random _random = new Random();
        /// <summary>
        /// randomly put two goats and one car behind three doors
        /// </summary>
        public string[] SetDoors() {

            var items = new List<string> { "goat", "goat", "car" };
            var doors = new List<string>(3);

            while(items.Count > 0) {

                int index = _random.Next(0, items.Count);
                doors.Add(items[index]);
                items.RemoveAt(index);
            }

            return doors.ToArray();
        }
        /// <summary>
        /// pick a random door
        /// </summary>
        public int PickDoor(string[] doors) {

            return _random.Next(0, doors.Length);
        }
        /// <summary>
        /// offer a door to switch
        /// </summary>
        public int OfferDoor(string[] doors, int picked) {

            var notPicked = Enumerable.Range(0, doors.Length).Where(door => door != picked).ToList();

            if(doors[picked] == "car") {

                return notPicked[_random.Next(0, notPicked.Count)];
            }
            else {

                return notPicked.Find(door => doors[door] == "car");
            }
        }
        /// <summary>
        /// simulate Monty Hall game for a given number of time
        /// and compare success rates of different strategies
        /// </summary>
        public void Simulate(int total) {

            int noSwitchWins = 0;  //total wins for not switching door
            int switchWins = 0;    //total wins for switching door

            for(int i = 0; i < total; i++) {

                string[] doors = SetDoors();
                int picked = PickDoor(doors);
                noSwitchWins += doors[picked] == "car" ? 1 : 0;
                switchWins += doors[OfferDoor(doors, picked)] == "car" ? 1 : 0;
            }

            Console.WriteLine("Sample Size: " + total);
            Console.WriteLine("Success Rate if not Switch Door: " + ((double)noSwitchWins / total).ToString("P2"));
            Console.WriteLine("Success Rate if Switch Door: " + ((double)switchWins / total).ToString("P2") + "\n");
        }
    }
}