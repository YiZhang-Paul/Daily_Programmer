using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace elementalSymbols {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(string.Join("\n", GetSymbolString("dailyprogrammer")));
        }
        public static HashSet<string> GetElementTable() {

            string[] elements = new string[] { 
                "Ac", "Ag", "Al", "Am", "Ar", "As", "At", "Au", "B", "Ba", 
                "Be", "Bh", "Bi", "Bk", "Br", "C", "Ca", "Cd", "Ce", "Cf", 
                "Cl", "Cm", "Co", "Cr", "Cs", "Cu", "Db", "Ds", "Dy", "Er", 
                "Es", "Eu", "F", "Fe", "Fm", "Fr", "Ga", "Gd", "Ge", "H", 
                "He", "Hf", "Hg", "Ho", "Hs", "I", "In", "Ir", "K", "Kr",
                "La", "Li", "Lr", "Lu", "Md", "Mg", "Mn", "Mo", "Mt", "N", 
                "Na", "Nb", "Nd", "Ne", "Ni", "No", "Np", "O", "Os", "P", 
                "Pa", "Pb", "Pd", "Pm", "Po", "Pr", "Pt", "Pu", "Ra", "Rb", 
                "Re", "Rf", "Rg", "Rh", "Rn", "Ru", "S", "Sb", "Sc", "Se", 
                "Sg", "Si", "Sm", "Sn", "Sr", "Ta", "Tb", "Tc", "Te", "Th", 
                "Ti", "Tl", "Tm", "U", "Uub", "Uuh", "Uuo", "Uup", "Uuq", 
                "Uus", "Uut", "V", "W", "Xe", "Y", "Yb", "Zn", "Zr" 
            };

            return new HashSet<string>(elements);
        }

        public static string[] GetSymbolString(string input) {

            return GetElementTable().Where(element => Regex.IsMatch(input, element, RegexOptions.IgnoreCase))
                                    .Select(element => Regex.Replace(input, element, "[" + element + "]", RegexOptions.IgnoreCase))
                                    .ToArray();
        }
    }
}