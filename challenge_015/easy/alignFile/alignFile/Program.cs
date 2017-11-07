using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace alignFile {
    class Program {
        static void Main(string[] args) {

            //challenge input
            AlignFile("text.txt", "left.txt");
            AlignFile("text.txt", "right.txt", false);
        }
        /// <summary>
        /// read text file
        /// </summary>
        public static string[] ReadFile(string fileName) {

            try {

                return File.ReadAllLines(fileName);
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return null;
        }
        /// <summary>
        /// write text to file
        /// </summary>
        public static void WriteFile(string[] text, string output) {

            try {

                File.WriteAllLines(output, text);
            }
            catch(Exception exception) {

                Console.WriteLine(exception.Message);
            }
        }
        /// <summary>
        /// left or right justify a text file
        /// </summary>
        /// <param name="fileName">input file name</param>
        /// <param name="output">output file name</param>
        /// <param name="left">left align when true, right align otherwise</param>
        public static void AlignFile(string fileName, string output, bool left = true) {

            string[] lines = ReadFile(fileName);
            int length = lines.Max(line => line.Length);
            //align all lines
            var aligned = lines.Select(line => { 
            
                return left ? line.Trim().PadRight(length, ' ') : line.Trim().PadLeft(length, ' ');
            });

            WriteFile(aligned.ToArray(), output);
        }
    }
}