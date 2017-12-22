using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace incomingAircraft {
    class Utility {

        public static double ToRadian(double degree) {

            return degree * Math.PI / 180;
        }
        /// <summary>
        /// parse all numbers in given string
        /// </summary>
        public static double[] ToNumbers(string numbers) {

            return Regex.Matches(numbers, @"\d*\.?\d+")
                        .Cast<Match>()
                        .Select(match => double.Parse(match.Value))
                        .ToArray();
        }
    }
}