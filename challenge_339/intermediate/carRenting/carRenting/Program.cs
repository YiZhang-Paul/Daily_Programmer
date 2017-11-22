using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace carRenting {
    class Program {
        static void Main(string[] args) {

            string days = @"1 10 5 12 13 40 30 22 70 19  
                            23 12 10 29 25 66 35 33 100 65";

            //challenge input
            Console.WriteLine(ShowResult(GetMaxFeasableRequest(days)));
        }
        /// <summary>
        /// retrieve all orders in ascending order by start date
        /// </summary>
        private static List<Order> GetOrders(string days) {

            var orders = new List<Order>();
            var startEnd = days.Split('\n').Select(line => line.Trim());
            int[] starts = startEnd.First().Split(' ').Select(Int32.Parse).ToArray();
            int[] ends = startEnd.Last().Split(' ').Select(Int32.Parse).ToArray();

            for(int i = 0; i < starts.Length; i++) {

                orders.Add(new Order(starts[i], ends[i]));
            }

            return orders.OrderBy(order => order.Start).ToList();
        }
        /// <summary>
        /// retrieve indexes of all non-overlapping requests
        /// </summary>
        private static int[] GetValidIndexes(List<Order> orders, int lastIndex) {

            int nextIndex = orders.Skip(lastIndex).ToList().FindIndex(order => order > orders[lastIndex]);

            if(nextIndex != -1) {

                int startIndex = lastIndex + nextIndex;

                return Enumerable.Range(startIndex, orders.Count - startIndex).ToArray();
            }

            return new int[0];
        }
        /// <summary>
        /// determine maximum number of requests to serve
        /// </summary>
        private static List<Order[]> GetMaxFeasableRequest(string days) {

            var orders = GetOrders(days);
            var solutions = new Dictionary<int, List<int[]>> {

                {1, new List<int[]>(orders.Select((order, index) => new int[] { index }))}
            };

            for(int i = 2; i <= orders.Count; i++) {

                var subSolution = new List<int[]>();

                foreach(var solution in solutions[i - 1]) {

                    foreach(int index in GetValidIndexes(orders, solution.Last())) {

                        subSolution.Add(solution.Concat(new int[] { index }).ToArray());
                    }
                }

                if(subSolution.Count == 0) {

                    break;
                }

                solutions.Add(i, subSolution);
            }

            return solutions[solutions.Max(pair => pair.Key)].Select(solution => {

                return solution.Select(index => orders[index]).ToArray();

            }).ToList();
        }

        private static string ShowResult(List<Order[]> solutions) {

            return string.Join("\n", solutions.Select(solution => {

                return solution.Aggregate("", (acc, val) => acc + val.ToString() + " ");
            }));
        }
    }
}