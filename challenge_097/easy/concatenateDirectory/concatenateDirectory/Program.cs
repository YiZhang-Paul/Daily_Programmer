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
            Console.WriteLine(string.Join(" ", GetTextFiles()));
        }

        public static string[] GetTextFiles(string directory = null) {

            return Directory.GetFiles(directory ?? AppDomain.CurrentDomain.BaseDirectory, "*.txt");
        }
    }
}