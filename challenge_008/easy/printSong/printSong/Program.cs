using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace printSong {
    class Program {
        static void Main(string[] args) {

            //challenge & bonus input
            Console.WriteLine(PrintSong());
        }
        /// <summary>
        /// print song "99 Bottles of Beer"
        /// </summary>
        public static string PrintSong() {

            var song = new StringBuilder();

            for(int i = 99; i >= 0; i--) {

                string current = (i > 0 ? i + " bottle" + (i > 1 ? "s" : "") : "no more bottles") + " of beer";
                string remain = (i > 1 ? i - 1 + " bottle" + (i > 2 ? "s" : "") : "no more bottles") + " of beer";
                song.Append((i == 0 ? Char.ToUpper(current[0]) + current.Substring(1) : current) + " on the wall, " + current + ". ")
                    .Append(i == 0 ? "Go to the store and buy some more, 99 bottles of beer on the wall." : "Take one down and pass it around, " + remain + " on the wall. ");
            }

            return song.ToString();
        }
    }
}