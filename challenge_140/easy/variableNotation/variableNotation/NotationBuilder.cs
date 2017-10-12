using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace variableNotation {
    class NotationBuilder {
        /**
         * create specified notation
         * @param {int} [type] - notation type: 0 -> camel case; 1 -> snake case; 2 -> capitalized snake case
         * @param {string} [words] - words used to create notation
         * 
         * @return {string} [specified notation]
         */
        public string BuildNotation(int type, string words) {
            string[] allWords = words.ToLower().Split(new char[] {' '});
            switch(type) {
                case 0 :
                    return MakeCamelCase(allWords);
                case 1:
                    return MakeSnakeCase(allWords);
                case 2 :
                    return MakeCapitalizeSnakeCase(allWords);
            }
            return null;
        }
        /**
         * capitalize a word
         * @param {string} [word] - word to capitalize
         * 
         * @return {string} [capitalized word]
         */
        public string Capitalize(string word) {
            return Char.ToUpper(word[0]) + word.Substring(1);
        }
        /**
         * create camel case notation
         * @param {string[]} [words] - words used to create camel case
         * 
         * @return {string} [camel case notation]
         */
        public string MakeCamelCase(string[] words) {
            return words[0] + string.Join("", words.Skip(1).Select(word => Capitalize(word)));
        }
        /**
         * create snake case notation
         * @param {string[]} [words] - words used to create camel case
         * 
         * @return {string} [snake case notation]
         */
        public string MakeSnakeCase(string[] words) {
            return string.Join("_", words);
        }
        /**
         * create capitalized snake case notation
         * @param {string[]} [words] - words used to create camel case
         * 
         * @return {string} [capitalized snake case notation]
         */
        public string MakeCapitalizeSnakeCase(string[] words) {
            return MakeSnakeCase(words).ToUpper();
        }
    }
}
