using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace edgeSorting {
    class Program {
        public struct Edge {

            private char _name; //edge name
            private int _left;  //left node connected
            private int _right; //right node connected

            public int Weight { get { return _left + _right; } }
            public char Name { get { return _name; } }

            public Edge(char name, int left, int right) {

                _name = name;
                _left = left;
                _right = right;
            }
        }

        static void Main(string[] args) {
 
            //default input
            string input1 = @"A 3 4
                              B 4 5
                              C 1 2
                              D 2 3";
            string input2 = @"F 2 3
                              B 1 2
                              D 6 5
                              C 6 7
                              E 5 4
                              A 3 4";

            Console.WriteLine(string.Join(" ", SortEdge(input1)));
            Console.WriteLine(string.Join(" ", SortEdge(input2)));
        }
        /*
         * sort edges from left to right
         * @param {string} [input] - input information of edges
         *
         * @return {char[]} [sorted edges]
         */
        public static char[] SortEdge(string input) {

            var edges = input.Split('\n').Select(line => {
                //create new edges
                string[] edgeInfo = line.Trim().Split(' ');
                char name = edgeInfo[0][0];
                int leftNode = Int32.Parse(edgeInfo[1]);
                int rightNode = Int32.Parse(edgeInfo[2]);

                return new Edge(name, leftNode, rightNode);
            });

            return edges.OrderBy(edge => edge.Weight).Select(edge => edge.Name).ToArray();
        }
    }
}