using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace baumSweetSequence {
    class Program {
        static void Main(string[] args) {

            //default input
            Console.WriteLine(GetDigit(4));
            Console.WriteLine(GetDigit(5));
            Console.WriteLine(GetDigit(19611206));
            //challenge input
            Console.WriteLine(string.Join(", ", GetSequence(20)));
            Console.WriteLine(string.Join(", ", GetSequence(10000000)));
        }

        private static byte GetDigit(int place) {

            string binary = Convert.ToString(place, 2);

            if(!Regex.IsMatch(binary, "1")) {

                return 1;
            }

            return (byte)(Regex.IsMatch(binary, "(?<!0)(00)*0(?!0)") ? 0 : 1);
        }

        private static byte[] GetSequence(int limit) {

            return Enumerable.Range(0, limit + 1)
                             .Select(digit => GetDigit(digit))
                             .ToArray();
        }
    }
}