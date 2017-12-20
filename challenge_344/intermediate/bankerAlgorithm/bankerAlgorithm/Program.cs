using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace bankerAlgorithm {
    class Program {
        static void Main(string[] args) {
            
            //challenge & bonus input
            var manager = new ProcessManager(ReadFile("algorithm.txt"));

            try {

                Console.WriteLine(string.Join(", ", manager.GetProcessOrder().Select(process => process.Name)));
            }
            catch(Exception exception) {

                Console.WriteLine(exception.Message);
            }
        }

        private static string ReadFile(string fileName) {

            try {

                return File.ReadAllText(fileName);
            }
            catch(Exception exception) {

                Console.WriteLine("File not Found.");
                Console.WriteLine(exception.Message);
                throw exception;
            }
        }
    }
}