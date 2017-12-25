using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using printNumberInEnglish;

namespace tysonEquations {
    class Program {
        static void Main(string[] args) {
            //challenge input
            var editor = new TextManipulator();
            var equations = FindTysonEquationInRange().Select(ToTysonEquation);
            Console.WriteLine(editor.SwapLetter(string.Join("\n", equations), '-', '\0'));
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

        private static NumberToEnglishConverter GetConverter() {

            return new NumberToEnglishConverter(ReadFile("translations.txt"), new NumberFormatter());
        }

        private static string ToTysonEquation(Equation equation) {

            var converter = GetConverter();
            var result = new StringBuilder();

            return result.Append(equation.ToString() + "; ")
                         .Append(converter.ToEnglish(equation.Left.Item1))
                         .Append(" plus ")
                         .Append(converter.ToEnglish(equation.Left.Item2))
                         .Append(" equals ")
                         .Append(converter.ToEnglish(equation.Right.Item1))
                         .Append(" plus ")
                         .Append(converter.ToEnglish(equation.Right.Item2))
                         .ToString();
        }

        private static Equation[] FindTysonEquationInRange(int limit = 25) {

            var generator = new TysonEquationGenerator(GetConverter(), new TextManipulator());
            var results = new List<Equation>();

            for(int i = 3; i <= limit; i++) {

                results = results.Concat(generator.Generate(i)).ToList();
            }

            return results.ToArray();
        }
    }
}