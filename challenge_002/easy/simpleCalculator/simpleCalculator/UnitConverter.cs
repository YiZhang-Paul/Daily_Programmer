using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace simpleCalculator {
    class UnitConverter {
        /// <summary>
        /// round result when necessary
        /// </summary>
        public decimal Round(decimal number) { 
        
            return Regex.IsMatch(number.ToString(), @"\.0{6}") ? Math.Round(number) : number;
        }
        /// <summary>
        /// convert degrees to radians
        /// </summary>
        public decimal ToRadians(decimal degree) {

            return Round(degree / 180 * (decimal)Math.PI);
        }
        /// <summary>
        /// convert radians to degrees
        /// </summary>
        public decimal ToDegrees(decimal radian) {

            return Round(radian * 180 / (decimal)Math.PI);
        }
        /// <summary>
        /// convert degrees, minutes and seconds to degrees and decimals
        /// </summary>
        public decimal DmsToDegree(decimal dms) {

            decimal integer = Math.Truncate(dms);
            decimal decimals = Math.Abs(dms - integer);
            string decimalString = decimals == 0 ? "0000" : decimals.ToString().Substring(2).PadRight(4, '0');
            decimal minute = decimal.Parse(decimalString.Substring(0, 2));
            decimal second = decimal.Parse(decimalString.Substring(2));

            return (Math.Abs(integer) + ((minute + second / 60) / 60)) * (dms < 0 ? -1 : 1);
        }
        /// <summary>
        /// convert degree and decimals to degrees, minutes and seconds
        /// </summary>
        public decimal DegreeToDms(decimal degree) {

            decimal integer = Math.Truncate(degree);
            decimal decimals = Math.Abs(degree - integer) * 60;

            if(decimals == 0) {

                return decimal.Parse(integer.ToString());
            }

            decimal minute = Math.Truncate(decimals);
            decimal second = Math.Truncate((decimals - minute) * 60);
            decimal remain = (decimals - minute) * 60 - second;

            return decimal.Parse(string.Join("", new string[] {
            
                integer.ToString() + ".",
                minute.ToString().PadLeft(2, '0'),
                second.ToString().PadLeft(2, '0'),
                remain.ToString().PadRight(4, '0').Substring(2)
            }));
        }
    }
}