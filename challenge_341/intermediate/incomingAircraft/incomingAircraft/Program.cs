using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace incomingAircraft {
    class Program {
        static void Main(string[] args) {

            var equationFinder = new EquationFinder();
            var intersectionFinder = new IntersectionFinder();
            //default & challenge input
            var inputs = new List<string[]>() { 
                             
                new string[] { "0 0 45", "10 0 0" },
                new string[] { "0 0 24.0", "11 7 343.4" },
                new string[] { "10 1 0.0", "2 8 352.82" },
                new string[] { "0 0 30.9", "10 1 336.42" }
            };

            foreach(var input in inputs) {
            
                try {

                    var equation1 = equationFinder.GetEquation(input[0]);
                    var equation2 = equationFinder.GetEquation(input[1]);
                    Console.WriteLine(intersectionFinder.FindIntersection(equation1, equation2));
                }
                catch(Exception exception) {

                    Console.WriteLine(exception.Message); ;
                }
            }
        }
    }
}