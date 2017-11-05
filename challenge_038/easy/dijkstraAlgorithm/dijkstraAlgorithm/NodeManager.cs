using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dijkstraAlgorithm {
    class NodeManager {

        public Dictionary<char, Node> Nodes { get; private set; }

        public NodeManager(string nodes) {

            Nodes = CreateNodes(nodes);
        }
        /// <summary>
        /// create nodes
        /// </summary>
        /// <param name="connections">node connections</param>
        public Dictionary<char, Node> CreateNodes(string connections) {

            var allNodes = new Dictionary<char, Node>();

            foreach(string connection in connections.Split('\n')) {
            
                string[] information = connection.Trim().Split(',');

                for(int i = 0; i < 2; i++) {
                    //create nodes
                    char nodeID = information[i][0];
                    allNodes[nodeID] = allNodes.ContainsKey(nodeID) ? allNodes[nodeID] : new Node(nodeID);
                }

                for(int i = 0; i < 2; i++) {
                    //add connection information between nodes
                    char nodeID = information[i][0];
                    allNodes[nodeID].AddNeighbor(allNodes[information[i == 0 ? 1 : 0][0]], Int32.Parse(information[2]));
                }
            }

            return allNodes;
        }
    }
}