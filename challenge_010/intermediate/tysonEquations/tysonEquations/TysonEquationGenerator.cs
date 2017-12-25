using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tysonEquations {
    class TysonEquationGenerator : EquationGenerator {

        private INumberConverter Converter { get; set; }
        private ITextManipulator Editor { get; set; }

        public TysonEquationGenerator(INumberConverter converter, ITextManipulator editor) {

            Converter = converter;
            Editor = editor;
        }
        /// <summary>
        /// retrieve all letters of given number from its English format
        /// </summary>
        private string GetLetters(int number) {

            return Editor.SwapLetter(Converter.ToEnglish(number), '-', '\0');
        }
        /// <summary>
        /// check if numbers on both sides of equation have same letters in English format
        /// </summary>
        private bool HasSameLetters(Equation equation) {

            string left = GetLetters(equation.Left.Item1) + GetLetters(equation.Left.Item2);
            string right = GetLetters(equation.Right.Item1) + GetLetters(equation.Right.Item2);

            return Editor.SortLetters(left) == Editor.SortLetters(right);
        }

        private bool IsValid(Equation equation) {

            return !equation.HasSameOperands && HasSameLetters(equation);
        }

        public override Equation[] Generate(int number) {

            return base.Generate(number).Where(IsValid).ToArray();
        }
    }
}