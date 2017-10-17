using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace testTheTest {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string input = @"0 Car raC
                             0 Alpha AhplA
                             0 Discuss noissucsiD
                             1 Batman BATMAN
                             1 Graph GRAPH
                             1 One one";
            
            //Console.WriteLine(Test(input));
        }
        /*
         * reverse a string
         * @param {string} [input] - string to reverse
         *
         * @return {string} [reversed string]
         */
        public static string Reverse(string input) {

            var result = new StringBuilder();

            for(int i = input.Length - 1; i >= 0; i--) {

                result.Append(input[i]);
            }

            return result.ToString();
        }
        /*
         * change a string into upper-case
         * @param {string} [input] - string to upper-case
         *
         * @return {string} [upper-cased string]
         */
        public static string ToUpperCase(string input) {

            var result = new StringBuilder();

            foreach(char character in input) {
            
                if(Char.IsLetter(character)) {
                    //calculate new character code for upper-case letter
                    int charCode = Char.ConvertToUtf32(character.ToString(), 0);
                    charCode -= charCode > 64 && charCode < 91 ? 32 : 0;
                    result.Append(Char.ConvertFromUtf32(charCode));
                    continue;
                }

                result.Append(character);
            }

            return result.ToString();
        }
    }
}