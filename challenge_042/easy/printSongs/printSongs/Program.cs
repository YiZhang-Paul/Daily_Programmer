using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace printSongs {
    class Program {
        static void Main(string[] args) {

            var printer = new SongPrinter();

            //challenge input
            //Console.WriteLine(printer.PrintSong1());
            //Console.WriteLine(printer.PrintSong2());
            Console.WriteLine(printer.PrintSong3());
        }
    }
}