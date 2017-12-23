using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace printNumberInEnglish {
    class Program {
        static void Main(string[] args) {

            string[] translations = ReadFile("translations.txt");
            var toEnglishConverter = new NumberToEnglishConverter(translations);
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