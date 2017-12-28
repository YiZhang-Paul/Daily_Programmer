using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace reverseText {
    class Program {
        static void Main(string[] args) {

            //challenge input
            WriteReverseText("hello!");
        }

        private static string ReverseText(string text) {

            return string.Join("", text.Reverse());
        }

        private static void WriteReverseText(string text, string fileName = "output.txt") {

            try {

                File.WriteAllText(fileName, ReverseText(text));
            }
            catch(Exception exception) {

                Console.WriteLine(exception.Message);
                throw exception;
            }
        }
    }
}