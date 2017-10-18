using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bytelandianExchange {
    class Program {
        static void Main(string[] args) {
 
            //default input
            int input1 = 7;
            //challenge input
            int input2 = 1000;

            Console.WriteLine(ExchangeCoin(input1));
            Console.WriteLine(ExchangeCoin(input2));
        }
        /*
         * Bytelandian exchange
         * @param {int} [coins] - initial coins inserted into exchange machine
         *
         * @return {int} [number of 0-valued coins at the end of exchange]
         */
        public static int ExchangeCoin(int coins) {
            //coins exchanged
            int[] exchanged = new int[] { coins / 2, coins / 3, coins / 4 };
            int totalZero = 0;

            foreach(int coin in exchanged) {
                //keep exchanging non 0-valued coins and count 0-valued coins received
                totalZero += coin == 0 ? 1 : ExchangeCoin(coin);
            }

            return totalZero;
        }
    }
}