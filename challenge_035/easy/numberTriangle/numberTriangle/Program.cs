using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace numberTriangle {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(GetTriangle(10));
            Console.WriteLine(GetTriangle(6));
            Console.WriteLine(GetTriangle(3));
            Console.WriteLine(GetTriangle(12));
        }
        /// <summary>
        /// construct a triangle using numbers from 1 to up to given number
        /// </summary>
        public static string GetTriangle(int limit) {

            var triangle = new List<List<int>>();
            var currentRow = new List<int>();

            for(int i = 1, j = 1; i <= limit; i++) {

                currentRow.Add(i);

                if(currentRow.Count == j) {

                    triangle.Insert(0, currentRow);
                    currentRow = new List<int>();
                    j++;
                }
            }

            return string.Join("\n", triangle.Select(row => string.Join(" ", row)));
        }
    }
}