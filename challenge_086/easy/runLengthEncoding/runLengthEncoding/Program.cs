using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace runLengthEncoding {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string input1 = "Heeeeelllllooooo nurse!";
            Console.WriteLine(Encode(input1));
            string input2 = "Heeeeelllllooooo nurseeeeeeee";
            Console.WriteLine(Encode(input2));
            //bonus input
            string input3 = "[(1,'H'),(5,'e'),(5,'l'),(5,'o'),(1,' '),(1,'n'),(1,'u'),(1,'r'),(1,'s'),(1,'e'),(1,'!')]";
            Console.WriteLine(Decode(input3));
        }
        /// <summary>
        /// run-length encoding of a string
        /// </summary>
        /// <param name="input">string to encode</param>
        /// <returns>encoded string</returns>
        public static string Encode(string input) {

            var encoded = new StringBuilder();
            char curChar = input[0];
            int counter = 1;

            foreach(char character in input.Substring(1)) {
            
                if(character != curChar) {

                    encoded.Append("(" + counter + ",'" + curChar + "'),");
                    counter = 0;
                    curChar = character;
                }

                counter++;
            }
            //encode last character/sequence in string
            encoded.Append(counter > 0 ? "(" + counter + ",'" + curChar + "')," : "");

            return "[" + encoded.ToString().Substring(0, encoded.Length - 1) + "]";
        }
        /// <summary>
        /// decode a message
        /// </summary>
        /// <param name="encoded">encoded string</param>
        /// <returns>decoded string</returns>
        public static string Decode(string encoded) {

            var decoded = new StringBuilder();
            var encodePairs = Regex.Matches(encoded, @"\d+,'.'").Cast<Match>().Select(match => match.Value);  

            foreach(string pair in encodePairs) {

                int length = Int32.Parse(Regex.Match(pair, @"\d+").Value);
                char character = Regex.Match(pair, @"(?<=').(?=')").Value[0];
                decoded.Append("".PadLeft(length, character));
            }

            return decoded.ToString();
        }
    }
}