using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pythagoreanTriple {
    class Program {
        static void Main(string[] args) {

            //default input
            Console.WriteLine(string.Join("\n", GetPythagoreanTriples(12).Select(result => string.Join(", ", result))) + "\n");
            Console.WriteLine(string.Join("\n", GetPythagoreanTriples(240).Select(result => string.Join(", ", result))) + "\n");
            //challenge input
            Console.WriteLine(string.Join("\n", GetPythagoreanTriples(504).Select(result => string.Join(", ", result))) + "\n");
        }
        /// <summary>
        /// retrieve all possible pythagorean triples
        /// </summary>
        /// <param name="sum">sum of all three sides of triangle</param>
        public static int[][] GetPythagoreanTriples(int sum) {

            var result = new List<int[]>();

            for(int i = 1; i < sum; i++) {

                for(int j = i; j < sum - i; j++) {

                    int hypothenuse = sum - i - j;

                    if(j >= hypothenuse) break;

                    if(Math.Pow(i, 2) + Math.Pow(j, 2) == Math.Pow(hypothenuse, 2)) {

                        result.Add(new int[] { i, j, hypothenuse });
                    }
                }
            }

            return result.ToArray();
        }
    }
}