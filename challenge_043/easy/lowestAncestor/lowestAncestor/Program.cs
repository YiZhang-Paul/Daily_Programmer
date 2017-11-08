using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lowestAncestor {
    class Program {
        static void Main(string[] args) {

            var tree = new BinaryTree(new int[] { 5, 2, 3, 1, 1, 6, 8, 4, 2, 7 });

            //challenge input
            var parent = tree.LowestAncestor(tree.Nodes[3], tree.Nodes[1]);
            Console.WriteLine("{ID: " + parent.ID + ", Value: " + parent.Value + "}");
            parent = tree.LowestAncestor(tree.Nodes[6], tree.Nodes[9]);
            Console.WriteLine("{ID: " + parent.ID + ", Value: " + parent.Value + "}");
            parent = tree.LowestAncestor(tree.Nodes[4], tree.Nodes[2]);
            Console.WriteLine("{ID: " + parent.ID + ", Value: " + parent.Value + "}");
        }
    }
}