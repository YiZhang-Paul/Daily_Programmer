using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lowestAncestor {
    class BinaryTree {

        public Dictionary<int, Node> Nodes { get; private set; }
        public Node Root { get; private set; }
        public int IDs { get; private set; }

        public BinaryTree(int[] values) {

            Nodes = new Dictionary<int, Node>();
            Root = CreateNode(values[0]);
            AddNodes(values.Skip(1).ToArray());
        }
        /// <summary>
        /// create new nodes
        /// </summary>
        public Node CreateNode(int value, Node parent = null) {

            var node = new Node(IDs++, value, parent);
            Nodes.Add(node.ID, node);

            return node;
        }
        /// <summary>
        /// add a list of nodes to tree
        /// </summary>
        public void AddNodes(int[] values) { 
        
            foreach(int value in values) {

                AddNode(value);
            }
        }
        /// <summary>
        /// add a new node to tree
        /// </summary>
        public Node AddNode(int value, Node root = null) {

            root = root ?? Root;

            if(value < root.Value) {

                root.Left = root.Left == null ? CreateNode(value, root) : AddNode(value, root.Left);
            }
            else { 
            
                root.Right = root.Right == null ? CreateNode(value, root) : AddNode(value, root.Right);
            }

            return root;
        }
        /// <summary>
        /// check if a node is parent of another given node
        /// </summary>
        public bool IsParent(Node parent, Node child) { 
        
            if(parent == null || parent.ID == child.ID) {

                return parent != null;
            }

            return IsParent(parent.Left, child) || IsParent(parent.Right, child);
        }
        /// <summary>
        /// find lowest common ancestor of given nodes
        /// </summary>
        public Node LowestAncestor(Node node1, Node node2) { 
        
            if(node1.Parent == null || node2.Parent == null) {

                return null;
            }

            var parent = node1.Parent;

            while(parent != null && (parent == node2 || !IsParent(parent, node2))) {

                parent = parent.Parent;
            }

            return parent;
        }
    }
}