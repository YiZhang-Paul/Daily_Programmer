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
            var numberFormatter = new NumberFormatter();
            var toEnglishConverter = new NumberToEnglishConverter(translations, numberFormatter);
            Console.WriteLine(toEnglishConverter.ToEnglish(201400));
            Console.WriteLine(toEnglishConverter.ToEnglish(200401));
            Console.WriteLine(toEnglishConverter.ToEnglish(200476));
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