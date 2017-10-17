using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

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
            
            Console.WriteLine(TestData(input));
        }
        /*
         * validate test data for unit tests
         * @param {string} [data] - test data for unit tests
         *
         * @return {string} [test result]
         */
        public static string TestData(string data) {

            var result = new StringBuilder();
            var allData = data.Split('\n');
            //counter for total pass/fail
            int pass = 0;
            int fail = 0;

            foreach(string dataItems in allData) {
                //retrieve test data
                var items = Regex.Matches(dataItems, @"\w+");
                string input = items[1].Value;
                string expected = items[2].Value;
                //record test result
                string output = Int32.Parse(items[0].Value) == 0 ? Reverse(input) : ToUpperCase(input);
                pass += output == expected ? 1 : 0;
                fail += output != expected ? 1 : 0;
                result.Append(output == expected ? "Good test data\n" : "Mismatch! Bad test data\n");
            }
            //summarize test result
            result.Append("Of " + allData.Length + " tests, " + pass + " succeeded, " + fail + " failed.");

            return result.ToString();
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
                    charCode -= charCode > 64 && charCode < 91 ? 0 : 32;
                    result.Append(Char.ConvertFromUtf32(charCode));
                    continue;
                }

                result.Append(character);
            }

            return result.ToString();
        }
    }
}