using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace unionSets {
    class Program {
        static void Main(string[] args) {

            string[] list1 = new string[] { "a", "b", "c", "1", "4" };
            string[] list2 = new string[] { "a", "x", "34", "4", "41" };
            
            //challenge input
            Console.WriteLine(string.Join(" ", UnionLists(list1, list2)));
            Console.WriteLine(string.Join(" ", list1.Union(list2)));
        }
        /// <summary>
        /// union two lists
        /// </summary>
        public static T[] UnionLists<T>(IList<T> list1, IList<T> list2) { 
        
            var inList1 = new HashSet<T>(list1);
            var noInList1 = list2.Where(item => !inList1.Contains(item));

            return new List<T>(list1).Concat(noInList1).ToArray();
        }
    }
}