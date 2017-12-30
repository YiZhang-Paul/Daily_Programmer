using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace screenScraping {
    class Program {
        static void Main(string[] args) {

            //challenge input
            var converter = new HTMLConverter(new PromptParser());
            Console.WriteLine(converter.ToHTML(ReadFile("input.txt")));
        }

        private static string[] ReadFile(string fileName) {

            try {

                return File.ReadAllLines(fileName);
            }
            catch(Exception exception) {

                Console.WriteLine("File not Found.");
                Console.WriteLine(exception.Message);
                throw exception;
            }
        }
    }
}