using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lowestAncestor {
    class BinaryTree {

        public Node Root { get; private set; }
        public int IDs { get; private set; }

        public BinaryTree(int[] values) {

            Root = CreateNode(values[0]);
            AddNodes(values.Skip(1).ToArray());
        }
        /// <summary>
        /// create new nodes
        /// </summary>
        public Node CreateNode(int value, Node parent = null) {

            return new Node(IDs++, value, parent);
        }
        /// <summary>
        /// add new nodes to tree
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
        /// add a list of nodes to tree
        /// </summary>
        public void AddNodes(int[] values) { 
        
            foreach(int value in values) {

                AddNode(value);
            }
        }
    }
}