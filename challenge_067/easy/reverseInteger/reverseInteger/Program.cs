using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reverseInteger {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(ReverseInteger(13));
        }
        /// <summary>
        /// reverse integer in binary form and return corresponding decimal value
        /// </summary>
        public static uint ReverseInteger(int number) {

            string binary = Convert.ToString(number, 2).PadLeft(32, '0');

            return Convert.ToUInt32(string.Join("", binary.Reverse()), 2);
        }
    }
}