using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dijkstraAlgorithm {
    class Program {
        static void Main(string[] args) {

            string connections = @"a,b,4
                                   a,c,2
                                   b,c,1
                                   b,d,5
                                   c,d,8
                                   c,e,10
                                   d,e,2
                                   d,f,6
                                   e,f,3";
            var manager = new NodeManager(connections);
            var finder = new PathFinder();

            //challenge input
            Console.WriteLine(string.Join(" -> ", finder.GetPath(manager, 'a', 'f').Select(node => node.ID)));
        }
    }
}