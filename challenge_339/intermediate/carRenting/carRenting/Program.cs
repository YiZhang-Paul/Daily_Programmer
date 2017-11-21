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

        private static List<Order> GetOrders(string days) {

            var orders = new List<Order>();
            var startAndEnd = days.Split('\n').Select(line => line.Trim());
            int[] starts = startAndEnd.First().Split(' ').Select(Int32.Parse).ToArray();
            int[] ends = startAndEnd.Last().Split(' ').Select(Int32.Parse).ToArray();

            for(int i = 0; i < starts.Length; i++) {

                orders.Add(new Order(starts[i], ends[i]));
            }

            return orders.OrderBy(order => order.Start).ToList();
        }

        private static List<List<Order>> GetMaxFeasableRequest(string days) {

            var orders = GetOrders(days);
            var solutions = new Dictionary<int, List<List<int>>> { 
            
                {1, new List<List<int>>(orders.Select((order, index) => new List<int> { index }))}
            };

            for(int i = 2; i <= orders.Count; i++) {

                var subSolutions = new List<List<int>>();

                foreach(var solution in solutions[i - 1]) {
                
                    int lastIndex = solution.Last();
                    int nextIndex = orders.Skip(lastIndex).ToList().FindIndex(order => order > orders[lastIndex]);

                    if(nextIndex != -1) {
                    
                        foreach(var index in Enumerable.Range(lastIndex + nextIndex, orders.Count - lastIndex - nextIndex)) {
                    
                            subSolutions.Add(solution.Concat(new List<int> { index }).ToList());
                        }
                    }
                }

                if(subSolutions.Count == 0) {

                    break;
                }

                solutions.Add(i, subSolutions);
            }

            return solutions[solutions.Max(pair => pair.Key)].Select(solution => solution.Select(index => orders[index]).ToList()).ToList();
        }

        private static string ShowResult(List<List<Order>> solutions) {

            return string.Join("\n", solutions.Select(solution => string.Join(" ", solution.Select(order => order.ToString()))));
        }
    }
}