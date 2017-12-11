using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace majorScales {
    class Program {

        private enum Notes { 
        
            Do = 0,
            Re = 2,
            Mi = 4,
            Fa = 5,
            So = 7,
            La = 9,
            Ti = 11
        }

        static void Main(string[] args) {
            //challenge input
            Console.WriteLine(GetNote("C", "Do"));
            Console.WriteLine(GetNote("C", "Re"));
            Console.WriteLine(GetNote("C", "Mi"));
            Console.WriteLine(GetNote("D", "Mi"));
            Console.WriteLine(GetNote("A#", "Fa"));
        }

        private static int GetSemitone(string note) {

            return (int)Enum.Parse(typeof(Notes), note);
        }

        private static string GetNote(string majorScale, string note) {

            string[] scales = { "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" };

            return scales[(Array.IndexOf(scales, majorScale) + GetSemitone(note)) % scales.Length];
        }
    }
}