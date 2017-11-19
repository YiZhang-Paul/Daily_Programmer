using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace firstRecurringCharacter {
    class Program {
        static void Main(string[] args) {

            //default & bonus input
            string input1 = "ABCDEBC";
            //challenge & bonus input
            string input2 = "IKEUNFUVFV";
            string input3 = "PXLJOUDJVZGQHLBHGXIW";
            string input4 = @"*l1J?)yn%R[}9~1""=k7]9;0[$";
            string input5 = "ABBA";

            Console.WriteLine(GetFirstRecurrence(input1));
            Console.WriteLine(GetFirstRecurrence(input2));
            Console.WriteLine(GetFirstRecurrence(input3));
            Console.WriteLine(GetFirstRecurrence(input4));
            Console.WriteLine(GetFirstRecurrence(input5));
        }
        /// <summary>
        /// record occurrence of each character in string
        /// </summary>
        private static Dictionary<char, List<int>> GetOccurrence(string input) { 
        
            var occurrence = new Dictionary<char, List<int>>();

            for(int i = 0; i < input.Length; i++) {

                char key = input[i];
                occurrence[key] = occurrence.ContainsKey(key) ? occurrence[key] : new List<int>();
                occurrence[key].Add(i);
            }

            return occurrence;
        }
        /// <summary>
        /// retrieve first recurring character and all its 0-based indexes in string
        /// </summary>
        private static string GetFirstRecurrence(string input) {

            var occurrence = GetOccurrence(input);
            int index = occurrence.Where(pair => pair.Value.Count > 1).Min(pair => pair.Value[1]);
            string indexes = string.Join(", ", occurrence[input[index]]);

            return "First Recurrence: " + input[index] + "; Indexes: [" + indexes + "]";
        }
    }
}