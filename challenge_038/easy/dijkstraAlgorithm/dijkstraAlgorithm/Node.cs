using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dijkstraAlgorithm {
    class Node {

        public char ID { get; set; }
        public int ToRoot { get; set; }
        public Node Parent { get; set; }
        public Dictionary<char, Node> Neighbors { get; set; }
        public Dictionary<char, int> Distances { get; set; }

        public Node(char id) {

            ID = id;
            Neighbors = new Dictionary<char, Node>();
            Distances = new Dictionary<char, int>();
        }
        /// <summary>
        /// add neighbor node information
        /// </summary>
        public void AddNeighbor(Node neighbor, int distance) {

            Neighbors.Add(neighbor.ID, neighbor);
            Distances.Add(neighbor.ID, distance);
        }
    }
}