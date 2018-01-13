using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CryptarithmeticSolverClassLibrary {
    public interface IUtility {

        string[] GetWords(string input);
        char[] GetLetters(string input);
        List<int[]> GetCombinations(int[] options, int total, int[] current = null, List<int[]> combinations = null);
    }
}