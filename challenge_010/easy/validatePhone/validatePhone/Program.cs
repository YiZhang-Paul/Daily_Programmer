using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace validatePhone {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(IsValidPhone("1234567890"));
            Console.WriteLine(IsValidPhone("123-456-7890"));
            Console.WriteLine(IsValidPhone("123.456.7890"));
            Console.WriteLine(IsValidPhone("(123)456-7890"));
            Console.WriteLine(IsValidPhone("(123) 456-7890"));
            Console.WriteLine(IsValidPhone("456-7890"));
            Console.WriteLine(IsValidPhone("123-45-6789"));
            Console.WriteLine(IsValidPhone("123:4567890"));
            Console.WriteLine(IsValidPhone("123/456-7890"));
        }
        /// <summary>
        /// check if a phone number has valid format
        /// </summary>
        public static bool IsValidPhone(string phone) {

            string splitter = "[-. ]";
            string areaCode = @"(\d{3}|\(\d{3}\))?";
            string prefix = splitter + @"?\d{3}" + splitter + "?";
            string line = @"\d{4}";

            return Regex.IsMatch(phone, "^" + areaCode + prefix + line + "$");
        }
    }
}