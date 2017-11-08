using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lowestAncestor {
    class Node {

        public int ID { get; private set; }
        public int Value { get; private set; }
        public Node Parent { get; set; }
        public Node Left { get; set; }
        public Node Right { get; set; }

        public Node(int id, int value, Node parent) {

            ID = id;
            Value = value;
            Parent = parent;
        }
    }
}