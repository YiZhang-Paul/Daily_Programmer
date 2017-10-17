using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cannibalNumbers {
    class Program {
        static void Main(string[] args) {
            
            //challenge input
            int[] numbers = new int[] { 21, 9, 5, 8, 10, 1, 3 };
            int[] queries = new int[] { 10, 15 };

            Console.WriteLine(string.Join(" ", GetAllQuery(numbers, queries)));
        }
        /*
         * query all number of numbers that can get larger than a given value through consuming other numbers
         * @param {int[]} [numbers] - all available numbers
         * @param {int[]} [queries] - all queries
         *
         * @return {int[]} [query results]
         */
        public static int[] GetAllQuery(int[] numbers, int[] queries) {
            //sort array in ascending order
            int[] sorted = numbers.OrderBy(num => num).ToArray();
            int[] results = new int[queries.Length];

            for(int i = 0; i < queries.Length; i++) {
                //add query results
                results[i] = Query(sorted, queries[i]);
            }

            return results;
        }
        /*
         * query number of numbers that can get larget than a given value through consuming other numbers
         * @param {int[]} [sorted] - sorted numbers
         * @param {int} [query] - current query
         *
         * @return {int} [current query result]
         */
        public static int Query(int[] sorted, int query) {
            //copy all sorted numbers
            var sortedCopy = new List<int>(sorted);
            int candidate = sortedCopy.Where(number => number < query).Count();

            while(candidate - 1 > 0) {

                int totalFood = candidate - 1;
                int cannibal = sortedCopy[candidate - 1];
                sortedCopy.RemoveAt(candidate - 1);

                while(totalFood > 0 && cannibal < query) {

                    sortedCopy.RemoveAt(0);
                    totalFood--;
                    cannibal++;
                }

                sortedCopy.Insert(totalFood, cannibal);
                candidate = sortedCopy.Where(number => number < query).Count();
            }

            return sortedCopy.Where(number => number >= query).Count();
        }
    }
}