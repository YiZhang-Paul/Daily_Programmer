using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace concatenateDirectory {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine("Enter Directory Path: ");
            Console.WriteLine(string.Join(" ", ShowFiles(Console.ReadLine())));
        }
        /// <summary>
        /// retrieve paths of all text files in given directory
        /// </summary>
        /// <param name="directory">directory name</param>
        /// 
        /// <returns>list of all text file paths</returns>
        /// 
        public static string[] GetFilePaths(string directory) {

            try {

                directory = directory.Trim() == "" ? Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "testDir") : directory;

                return Directory.GetFiles(directory, "*.txt");
            }
            catch(Exception exception) {

                Console.WriteLine("Directory not found.");
                Console.WriteLine(exception.Message);
            }

            return new string[0];
        }
        /// <summary>
        /// display text file information in a given directory
        /// </summary>
        /// <param name="directory">directory with text files</param>
        /// 
        /// <returns>file information</returns>
        /// 
        public static string ShowFiles(string directory = null) {

            var information = new StringBuilder();
            string[] paths = GetFilePaths(directory);

            foreach(string path in paths) {
                //retrieve file information and content
                var info = new FileInfo(path);
                information.Append("=== " + info.Name + "(" + info.Length + " bytes)\n");
                information.Append(File.ReadAllText(path) + "\n\n");
            }

            return information.ToString();
        }
    }
}