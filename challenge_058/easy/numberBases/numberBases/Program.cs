using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace numberBases {
    class Program {
        static void Main(string[] args) {

            var watch = new Stopwatch();
            watch.Start();

            //default input
            Console.WriteLine(DecimalToBase(1234, 2));
            Console.WriteLine(DecimalToBase(1234, 16));
            Console.WriteLine(DecimalToBase(12345678, 23));
            Console.WriteLine(DecimalToBase(12345678, 19));
            //challenge input
            Console.WriteLine(DecimalToBase(19959694, 35));
            Console.WriteLine(DecimalToBase(376609378180550, 29));
            //bonus input

            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds + "ms");
        }
        /// <summary>
        /// generate a list of powers of a given base that is smaller than given number
        /// </summary>
        public static IEnumerable<long> GetBasePowers(long number, int target) { 

            int power = 0;

            while((long)Math.Pow(target, power) <= number) {

                yield return (long)Math.Pow(target, power++);
            }
        }
        /// <summary>
        /// retrieve corresponding number character
        /// </summary>
        public static char GetNumberChar(int number) { 
        
            return number > 9 ? Char.ConvertFromUtf32(65 + number - 10)[0] : number.ToString()[0];
        }
        /// <summary>
        /// convert decimal number to target base
        /// </summary>
        public static string DecimalToBase(long number, int target) {

            var result = new StringBuilder();
            var powers = GetBasePowers(number, target).OrderByDescending(power => power);

            foreach(long power in powers) {

                result.Append(GetNumberChar((int)(number / power)));
                number = number % power;
            }

            return result.ToString();
        }
    }
}