using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace newLineTroubles {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(ConvertFormat("windowsFile.txt", "unix"));
            Console.WriteLine(ConvertFormat("unixFile.txt", "windows"));
        }
        /*
         * convert between Windows-style text file and UNIX-style test file
         * @param {string} [name] - name of file
         * @param {string} [format] - target format
         *
         * @return {string} [file content with converted format]
         */
        public static string ConvertFormat(string name, string format = "windows") { 
            //read file content
            string content = ReadFile(name);
            //pattern to replace and expected replacement
            string pattern = format == "windows" ? @"\n" : @"\r\n";
            string replacement = format == "windows" ? "\r\n" : "\n";

            return Regex.Replace(content, pattern, replacement);
        }
        /*
         * read file content
         * @param {string} [name] - file name
         *
         * @return {string} [content of file]
         */
        public static string ReadFile(string name) {
            //create file path
            string paths = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, name);
            string content = "";

            try { 

                using(var reader = new StreamReader(paths)) {
                    //read content of file
                    content = reader.ReadToEnd();
                }
            } 
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return content;
        }
    }
}