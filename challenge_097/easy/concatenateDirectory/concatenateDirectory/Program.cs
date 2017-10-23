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
            if(args.Length <= 1) {

                Console.WriteLine(args.Length == 0 ? "Enter Directory Path:\n" : "");
                Console.WriteLine(ShowFiles(Console.ReadLine()));
            }
            else if(args.Length == 2 && args[1] == "-r") {

                Console.WriteLine(ShowFiles(Console.ReadLine(), true));
            }
        }
        /// <summary>
        /// retrieve paths of all text files in given directory
        /// </summary>
        /// <param name="name">directory name</param>
        /// <param name="collection">collection of all file paths</param>
        /// <param name="recursive">get all text files in sub-directories when true</param>
        /// <returns>list of all text file paths</returns>
        public static List<FileInfo> GetFilePaths(string name, List<FileInfo> collection, bool recursive = false) {

            try {

                var directory = new DirectoryInfo(name == "" ? "testDir" : name);
                //look for all text files in all sub-directories
                if(recursive) {
                
                    foreach(var directoryInfo in directory.GetDirectories()) {

                        GetFilePaths(directoryInfo.FullName, collection, true);
                    }
                }
                //record text file information
                collection.AddRange(directory.GetFiles());

                return collection;
            }
            catch(Exception exception) {

                Console.WriteLine("Directory not found.");
                Console.WriteLine(exception.Message);
            }

            return new List<FileInfo>();
        }
        /// <summary>
        /// display text file information in a given direcotry
        /// </summary>
        /// <param name="directory">directory with text files</param>
        /// <param name="recursive">get all text files in sub-directories when true</param>
        /// <returns>file information</returns>
        public static string ShowFiles(string directory = "", bool recursive = false) {

            var information = new StringBuilder();
            var fileInfos = GetFilePaths(directory.Trim(), new List<FileInfo>(), recursive);

            foreach(var fileInfo in fileInfos) {
                //retrieve file information and content
                information.Append("=== " + fileInfo.Name + "(" + fileInfo.Length + " bytes)\n");
                information.Append(File.ReadAllText(fileInfo.FullName) + "\n\n");
            }

            return information.ToString();
        }
    }
}