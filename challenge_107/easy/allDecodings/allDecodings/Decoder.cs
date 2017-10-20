using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace allDecodings {
    class Decoder {
        /*
         * get all decoding of a message
         * @param {string} [message] - message to decode
         *
         * @return {string[]} [all decoding]
         */
        public string[] GetAllDecoding(string message) {

            var patterns = GetPatterns(message, new List<string>());

            return patterns.Where(pattern => IsValid(pattern))
                           .Select(pattern => Decode(pattern))
                           .Reverse()
                           .ToArray();
        }
        /*
         * decode a pattern
         * @param {string} [pattern] - pattern to decode
         *
         * @return {string} [decoded message]
         */
        public string Decode(string pattern) {

            return pattern.Split(' ').Aggregate("", (decoded, next) => decoded + Char.ConvertFromUtf32(Int32.Parse(next) + 96));
        }
        /*
         * check if a pattern is valid
         * @param {string} [pattern] - pattern to check
         *
         * @return {bool} [test result]
         */
        public bool IsValid(string pattern) {

            return pattern.Split(' ').All(code => Int32.Parse(code) <= 26);
        }
        /*
         * get all patterns of a message
         * @param {string} [message] - message to check
         * @param {List<string>} [collection] - collection of all patterns
         * @param {string} [pattern] - current pattern generated
         *
         * @return {string[]} [all patterns]
         */
        public string[] GetPatterns(string message, List<string> collection, string pattern = "") { 
        
            if(message.Length == 1) {

                collection.Add(pattern + message);
                return null;
            }

            for(int i = 0; i <= 1; i++) {

                GetPatterns(message.Substring(1), collection, pattern + message[0] + (i == 0 ? "" : " "));
            }

            return collection.ToArray();
        }
    }
}