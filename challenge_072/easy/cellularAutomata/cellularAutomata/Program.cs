using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cellularAutomata {
    class Program {
        static void Main(string[] args) {

            var generator = new CellularAutomatonGenerator();

            //challenge input
            string[] simulation = generator.Simulate("00010011011111", 110);
            Console.WriteLine(generator.DisplaySimulation(simulation) + "\n");
            simulation = generator.Simulate("00010011011111", 124);
            Console.WriteLine(generator.DisplaySimulation(simulation) + "\n");
            //bonus input
            simulation = generator.Simulate("00010011011111", 255);
            Console.WriteLine(generator.DisplaySimulation(simulation) + "\n");
            simulation = generator.Simulate("00010011011111", 54);
            Console.WriteLine(generator.DisplaySimulation(simulation) + "\n");
        }
    }
}