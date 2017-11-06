using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dijkstraAlgorithm {
    class NodeManager {

        public Dictionary<char, Node> Nodes { get; private set; }

        public NodeManager(string connections) {

            Nodes = CreateNodes(connections);
        }
        /// <summary>
        /// reset all nodes
        /// </summary>
        public void Reset() { 
        
            foreach(var pair in Nodes) {

                pair.Value.ToRoot = 0;
            }
        }
        /// <summary>
        /// create nodes
        /// </summary>
        public Dictionary<char, Node> CreateNodes(string connections) { 
        
            var nodes = new Dictionary<char, Node>();

            foreach(string connection in connections.Split('\n')) {

                string[] information = connection.Trim().Split(',');

                for(int i = 0; i < 2; i++) {
                    //create nodes
                    if(!nodes.ContainsKey(information[i][0])) {

                        nodes.Add(information[i][0], new Node(information[i][0]));
                    }
                }

                for(int i = 0; i < 2; i++) {
                    //add connection information between nodes
                    nodes[information[i][0]].AddNeighbor(nodes[information[i == 0 ? 1 : 0][0]], Int32.Parse(information[2]));
                }
            }

            return nodes;
        }
    }
}