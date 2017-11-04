using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace buyWithCredit {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine("[" + string.Join(", ", GetItemChoice(100, new int[] { 5, 75, 25 })) + "]");
            Console.WriteLine("[" + string.Join(", ", GetItemChoice(200, new int[] { 150, 24, 79, 50, 88, 345, 3 })) + "]");
            Console.WriteLine("[" + string.Join(", ", GetItemChoice(8, new int[] { 2, 1, 9, 4, 4, 56, 90, 3 })) + "]");
        }
        /// <summary>
        /// pick two items whose total price matches total credit exactly
        /// </summary>
        public static int[] GetItemChoice(int credit, int[] prices) {

            var allPrice = new List<int>(prices);
            var uniquePrice = new HashSet<int>(prices);

            for(int i = 0; i < prices.Length; i++) {

                if(uniquePrice.Contains(credit - prices[i])) {
                    //find index of the other item to buy
                    int index = allPrice.IndexOf(credit - prices[i]);

                    if(index != i) {

                        return new int[] { i + 1, index + 1 }.OrderBy(value => value).ToArray();
                    }
                }
            }

            return new int[0];
        }
    }
}