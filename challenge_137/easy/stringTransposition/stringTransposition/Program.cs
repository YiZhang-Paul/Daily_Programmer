using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace stringTransposition {
    class Program {
        static void Main(string[] args) {
            //challenge input
            string input1 = "Hello, World!";
            string input2 = @"Kernel
                              Microcontroller
                              Register
                              Memory
                              Operator";

            Console.WriteLine(RotateString(input1));
            Console.WriteLine(RotateString(input2));
        }
        /*
         * rotate a string 90 for degrees
         * @param {string} [input] - input string to rotate
         *
         * @return {string} [rotated string]
         */
        public static string RotateString(string input) {
            string[] lines = input.Split('\n')
                                  .Select(line => line.Trim())
                                  .ToArray();
            //find maximum length of all lines
            int maxLength = lines.Max(line => line.Length);
            StringBuilder result = new StringBuilder();
            for(int i = 0; i < maxLength; i++) {
                //append given row of characters from every line of string
                var chars = lines.Select(line => i < line.Length ? line[i] : ' ');
                result.Append(string.Join("", chars) + "\n");
            }                    
            return result.ToString();
        }
    }
}