using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mcCarthy91 {
    class Program {
        static void Main(string[] args) {

            //challenge input
            McCarthy91(99);
        }
        /*
         * McCarthy 91 function
         * @param {int} [input] - input integer
         * @param {bool} [first] - indicate first level of recursion
         *
         * @return {int} [result integer]
         */
        public static int McCarthy91(int input, bool first = true) {
            //show initial input
            if(first) Console.WriteLine("M(" + input + ")"); 

            if(input > 100) {

                if(input - 10 < 100) {
                    //show result
                    Console.WriteLine(input - 10 + " since " + input + " is greater than 100");
                    Console.WriteLine(input - 10);
                }

                return input - 10;
            }
            //show intermediate steps
            Console.WriteLine("M(M(" + (input + 11) + ")) since " + input + " is equal to or less than 100");
            Console.WriteLine("M(" + (input + 1) + ") since " + (input + 11) + " is greater than 100");

            return McCarthy91(McCarthy91(input + 11, false), false);        
        }
    }
}