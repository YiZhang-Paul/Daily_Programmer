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
            
            //default & challenge input
            var numberFormatter = new NumberFormatter();
            var toEnglishConverter = new NumberToEnglishConverter(translations, numberFormatter);

            Console.WriteLine(toEnglishConverter.ToEnglish(1211));
            Console.WriteLine(toEnglishConverter.ToEnglish(201400));
            Console.WriteLine(toEnglishConverter.ToEnglish(200401));
            Console.WriteLine(toEnglishConverter.ToEnglish(200476));

            //bonus input
            var englishNumberFormatter = new EnglishNumberFormatter();
            var toNumberConverter = new EnglishToNumberConverter(translations, englishNumberFormatter);

            Console.WriteLine(toNumberConverter.ToNumber("one hundred and four"));
            Console.WriteLine(toNumberConverter.ToNumber("two hundred and one thousand and four hundred"));
            Console.WriteLine(toNumberConverter.ToNumber("two hundred thousand and four hundred and one"));
            Console.WriteLine(toNumberConverter.ToNumber("two hundred thousand and four hundred and seventy-six"));
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