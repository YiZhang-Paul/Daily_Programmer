using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CryptarithmeticSolverClassLibrary {
    public interface IUtility {

        string[] GetWords(string input);
        char[] GetLetters(string input);
        int[][] GetCombinations(List<int> options, int total, List<int> current, List<int[]> combinations);
    }
}