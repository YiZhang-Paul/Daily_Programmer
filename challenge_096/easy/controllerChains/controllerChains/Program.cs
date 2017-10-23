using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace controllerChains {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(MaxPlayer(10));  //1
            Console.WriteLine(MaxPlayer(20));  //2
            Console.WriteLine(MaxPlayer(40));  //2
            Console.WriteLine(MaxPlayer(52));  //3
            Console.WriteLine(MaxPlayer(92));  //5
            Console.WriteLine(MaxPlayer(112)); //5
            Console.WriteLine(MaxPlayer(124)); //6
            Console.WriteLine(MaxPlayer(164)); //8
            Console.WriteLine(MaxPlayer(184)); //8
            Console.WriteLine(MaxPlayer(196)); //9
        }
        /// <summary>
        /// determine maximum number of players allowed for a given budget
        /// </summary>
        /// <param name="budget">total budget</param>
        /// <returns>maximum players allowed</returns>
        public static int MaxPlayer(int budget) {

            int maxPlayer = 1;
            int remainSlot = 1;
            //one controller is always needed; one multitap is also needed when no slot available
            while(budget >= (remainSlot > 0 ? 20 : 32)) {

                if(remainSlot > 0) {
                    //buy more controllers if slots available
                    budget -= 20;
                    maxPlayer++;
                    remainSlot--;
                }
                else { 
                    //buy one multitap to increase total slots
                    budget -= 12;
                    remainSlot += 3;
                }
            }

            return maxPlayer;
        }
    }
}