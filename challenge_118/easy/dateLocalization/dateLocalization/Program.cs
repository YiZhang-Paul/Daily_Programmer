using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace dateLocalization {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string input = @"%s.%l
                             %s:%m:%h %M/%d/%y
                             The minute is %m! The hour is %h.";

            Console.WriteLine(GetTime(input));
        }
        /*
         * output current time base on a given format
         * @param {string} [format] - format to follow
         *
         * @return {string} [current time in given format]
         */
        public static string GetTime(string format) {

            var currentTime = DateTime.Now;

            return Regex.Replace(format, @"%.|(?<=\n)\s+", match => {

                switch(match.Value) {

                    case "%l":

                        return currentTime.Millisecond.ToString();

                    case "%s":

                        return currentTime.Second.ToString();

                    case "%m":

                        return currentTime.Minute.ToString();

                    case "%h":

                        return (currentTime.Hour > 12 ? currentTime.Hour - 12 : currentTime.Hour).ToString();

                    case "%H":

                        return currentTime.Hour.ToString();

                    case "%c":

                        return currentTime.Hour >= 12 ? "PM" : "AM"; 

                    case "%d":

                        return currentTime.Day.ToString();

                    case "%M":

                        return currentTime.Month.ToString();

                    case "%y":

                        return currentTime.Year.ToString();

                    default :

                        return "";
                }
            });
        }
    }
}