using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repeatingNumbers {
    class Program {
        static void Main(string[] args) {

            //default input
            Console.WriteLine(ShowRepeatDigits("11325992321982432123259") + "\n");
            Console.WriteLine(ShowRepeatDigits("1234565943210") + "\n");
            Console.WriteLine(ShowRepeatDigits("9870209870409898") + "\n");
            Console.WriteLine(ShowRepeatDigits("9999") + "\n");
            //challenge input
            Console.WriteLine(ShowRepeatDigits("82156821568221") + "\n");
            Console.WriteLine(ShowRepeatDigits("11111011110111011") + "\n");
            Console.WriteLine(ShowRepeatDigits("98778912332145") + "\n");
            Console.WriteLine(ShowRepeatDigits("124489903108444899"));
        }
        /// <summary>
        /// retrieve occurrence of sbustrings inside its parent string
        /// </summary>
        private static Dictionary<string, int> GetOccurrence(string input) { 
        
            var occurrence = new Dictionary<string, int>();

            for(int i = 2; i < input.Length; i++) {

                for(int j = 0; j <= input.Length - i; j++) {

                    string digits = input.Substring(j, i);
                    occurrence[digits] = occurrence.ContainsKey(digits) ? occurrence[digits] + 1 : 1;
                }
            }

            return occurrence;
        }

        private static string ShowRepeatDigits(string input) {

            var repeats = GetOccurrence(input).Where(pair => pair.Value > 1)
                                              .Select(pair => pair.Key + " gets repeated " + pair.Value + " times");

            return repeats.Count() == 0 ? "No Repeating Numbers Found." : string.Join("\n", repeats);
        }
    }
}