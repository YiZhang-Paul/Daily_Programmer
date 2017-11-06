using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dijkstraAlgorithm {
    class PathFinder {
        /// <summary>
        /// find nearest node to root node
        /// </summary>
        public Node GetNearestNode(Dictionary<char, Node> nodes, HashSet<Node> visited) {

            return nodes.Select(pair => pair.Value)
                        .Where(node => !visited.Contains(node) && node.ToRoot != 0)
                        .OrderBy(node => node.ToRoot)
                        .First();
        }
        /// <summary>
        /// update distance information for all unvisited neighbors
        /// </summary>
        public void UpdateNeighbor(Node current, HashSet<Node> visited) {
        
            foreach(var pair in current.Neighbors.Where(pair => !visited.Contains(pair.Value))) {

                var neighbor = pair.Value;
                int distance = current.ToRoot + current.Distances[neighbor.ID];

                if(neighbor.ToRoot == 0 || distance < neighbor.ToRoot) {

                    neighbor.ToRoot = distance;
                    neighbor.Parent = current;
                }
            }
        }
        /// <summary>
        /// find shortest path using Dijkstra's Algorithm
        /// </summary>
        public Node[] GetPath(NodeManager manager, char startID, char endID) {

            manager.Reset();
            var nearest = manager.Nodes[startID];
            var destination = manager.Nodes[endID];
            var visited = new HashSet<Node> { nearest };

            while(!visited.Contains(destination)) {

                UpdateNeighbor(nearest, visited);
                nearest = GetNearestNode(manager.Nodes, visited);
                visited.Add(nearest);
            }

            var path = new List<Node> { destination };

            while(path.Last().Parent != null) {

                path.Add(path.Last().Parent);
            }

            path.Reverse();

            return path.ToArray();
        }
    }
}