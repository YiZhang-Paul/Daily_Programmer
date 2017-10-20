using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace getURL {
    class Program {
        static void Main(string[] args) {

            //challenge input
            string input1 = "http://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page";
            string input2 = "http://en.wikipedia.org/w/index.php?title=Main_Page&action=edit";
            string input3 = "http://en.wikipedia.org/w/index.php?title= hello world!&action=é";

            Console.WriteLine(CheckURL(input1));
            Console.WriteLine(CheckURL(input2));
            Console.WriteLine(CheckURL(input3));
        }
        /*
         * validate a given url and retrieve parameters if there is any
         * @param {string} [url] - url to check
         *
         * @return {string} [test result]
         */
        public static string CheckURL(string url) { 
        
            if(!IsValidURL(url)) {

                return "The Given URL is Invalid.\n";
            }

            return "The Given URL is Valid. Parameters:\n" + string.Join("\n", GetParameters(url)) + "\n";
        }
        /*
         * validate a URL
         * @param {string} [url] - url to validate
         *
         * @return {bool} [test result]
         */
        public static bool IsValidURL(string url) { 
            //check for space and unicode characters
            if(Regex.IsMatch(url, @"\s|[\u00A0-\u00FF]")) {

                return false;
            }

            return Regex.IsMatch(url, @"https?://.+\??[^?]+");
        }
        /*
         * retrieve key-value pairs in URL parameter
         * @param {string} [url] - url to check
         *
         * @return {string[]} [key-value pairs]
         */
        public static string[] GetParameters(string url) {

            var pairs = new List<string>();

            foreach(Match match in Regex.Matches(url, @"(?<=\?|&)[^=&?]+=[^=&?]+(?=&|\b)")) {

                string[] items = match.Value.Split('=');
                pairs.Add(items[0] + ": " + "\"" + items[1] + "\"");
            }

            return pairs.ToArray();
        }
    }
}