using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace carRenting {
    class Order {

        public int Start { get; private set; }
        public int End { get; private set; }

        public Order(int start, int end) {

            Start = start;
            End = end;
        }

        public static bool operator <(Order order1, Order order2) {

            return order1.End < order2.Start;
        }

        public static bool operator >(Order order1, Order order2) {

            return order1.Start > order2.End;
        }

        public override string ToString() {
            
            return "(" + Start + "," + End + ")";
        }
    }
}