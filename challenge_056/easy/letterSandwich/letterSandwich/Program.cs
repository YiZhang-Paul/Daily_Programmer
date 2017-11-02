using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Diagnostics;

namespace letterSandwich {
    class Program {
        static void Main(string[] args) {

            var watch = new Stopwatch();
            watch.Start();

            //challenge & bonus input
            WriteSequence(26, "sequence.txt");

            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds + "ms");
        }
        /// <summary>
        /// create letter sandwich sequence of given iteration
        /// </summary>
        public static string GetSequence1(int iteration) {

            var result = new StringBuilder();

            for(int i = 97; i < 97 + iteration; i++) {

                result.Append(Char.ConvertFromUtf32(i) + result.ToString());
            }

            return result.ToString();
        }
        /// <summary>
        /// create letter sandwich sequence of given iteration
        /// </summary>
        public static string GetSequence2(int iteration) { 
        
            char[] letters = new char[(int)Math.Pow(2, iteration) - 1];

            for(int i = 97; i < 97 + iteration; i++) {

                char letter = Char.ConvertFromUtf32(i)[0];
                int order = (int)Math.Pow(2, i - 97);
                int counter = 1;

                while(counter * order - 1 < letters.Length) {

                    letters[counter * order - 1] = letter;
                    counter += 2;
                }
            }

            return string.Join("", letters);
        }
        /// <summary>
        /// write letter sandwich sequence of given iteration to file
        /// </summary>
        public static void WriteSequence(int iteration, string fileName) {

            //string sequence = GetSequence1(iteration);
            string sequence = GetSequence2(iteration);

            try {

                File.WriteAllText(fileName, sequence);
            }
            catch(Exception exception) {

                Console.WriteLine(exception.Message);
            }
        }
    }
}