using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace wordAnalytics {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "document.txt");

            try {

                var analyzer = new WordAnalyzer(File.ReadAllText(path));
                Console.WriteLine(analyzer.AnalyzeWord());
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }
        }
    }
}