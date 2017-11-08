using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lowestAncestor {
    class Program {
        static void Main(string[] args) {

            int[] values = new int[] { 5, 2, 3, 1, 1, 6, 8, 4, 2, 7 };

            var tree = new BinaryTree(values);
        }
    }
}