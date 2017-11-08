using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace roulette {
    class Wheel {

        private Random _random = new Random();
        private string[] _numbers = new string[] { 

            "0", "28", "9", "26", "30", "11", "7", "20", "32", "17", 
            "5", "22", "34", "15", "3", "24", "36", "13", "1", "00", 
            "27", "10", "25", "29", "12", "8", "19", "31", "18", "6", 
            "21", "33", "16", "4", "23", "35", "14", "2" 
        };
        /// <summary>
        /// spin roulette
        /// </summary>
        public string Spin() {

            return _numbers[_random.Next(0, _numbers.Length)];
        }
    }
}