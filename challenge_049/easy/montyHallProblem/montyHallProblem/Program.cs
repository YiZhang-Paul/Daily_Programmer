using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace montyHallProblem {
    class Program {
        static void Main(string[] args) {

            var simulator = new MontyHallSimulator();

            //challenge input
            simulator.Simulate(10);
            simulator.Simulate(100);
            simulator.Simulate(1000);
            simulator.Simulate(10000);
            simulator.Simulate(100000);
        }
    }
}