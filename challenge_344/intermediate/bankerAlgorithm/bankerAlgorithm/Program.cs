using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace bankerAlgorithm {
    class Program {
        static void Main(string[] args) {
            
            //challenge input
            var allocator = new ProcessManager(ReadFile("algorithm.txt"));
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