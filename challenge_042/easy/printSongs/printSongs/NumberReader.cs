using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace printSongs {
    class NumberReader {

        private Dictionary<int, string> _numbers = new Dictionary<int, string> { 
        
            { 1, "one" }, 
            { 2, "two" },
            { 3, "three" },
            { 4, "four" },
            { 5, "five" },
            { 6, "six" },
            { 7, "seven" },
            { 8, "eight" },
            { 9, "nine" },
            { 10, "ten" },
            { 11, "eleven" },
            { 12, "twelve" },
            { 13, "thirteen" },
            { 14, "fourteen" },
            { 15, "fifteen" },
            { 16, "sixteen" },
            { 17, "seventeen" },
            { 18, "eighteen" },
            { 19, "nineteen" },
            { 20, "twenty" },
            { 30, "thirty" },
            { 40, "forty" },
            { 50, "fifty" },
            { 60, "sixty" },
            { 70, "seventy" },
            { 80, "eighty" },
            { 90, "ninety" }
        };
        private Dictionary<int, string> _orders = new Dictionary<int, string> {

            { 1, "first" }, 
            { 2, "second" },
            { 3, "third" },
            { 4, "fourth" },
            { 5, "fifth" },
            { 6, "sixth" },
            { 7, "seventh" },
            { 8, "eighth" },
            { 9, "ninth" },
            { 10, "tenth" },
            { 11, "eleventh" },
            { 12, "twelfth" },
            { 13, "thirteenth" },
            { 14, "fourteenth" },
            { 15, "fifteenth" },
            { 16, "sixteenth" },
            { 17, "seventeenth" },
            { 18, "eighteenth" },
            { 19, "nineteenth" },
            { 20, "twentieth" },
            { 30, "thirtieth" },
            { 40, "fortieth" },
            { 50, "fiftieth" },
            { 60, "sixtieth" },
            { 70, "seventieth" },
            { 80, "eightieth" },
            { 90, "ninetieth" }
        };
        /// <summary>
        /// read number in English words
        /// </summary>
        public string ReadNumber(int number) { 
        
            if(_numbers.ContainsKey(number)) {

                return _numbers[number];
            }

            return _numbers[number - number % 10] + "-" + _numbers[number % 10];
        }
        /// <summary>
        /// read number representing orders in English words
        /// </summary>
        public string ReadOrder(int number) {

            if(_orders.ContainsKey(number)) {

                return _orders[number];
            }

            return _numbers[number - number % 10] + "-" + _orders[number % 10];
        }
    }
}