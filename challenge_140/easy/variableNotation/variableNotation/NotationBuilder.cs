using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

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
            switch(type) {
                case 0 : return MakeCamelCase(words.Trim());
                case 1 : return MakeSnakeCase(words.Trim());
                case 2 : return MakeCapitalizeSnakeCase(words.Trim());
                default : return null;
            }
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
         * @param {string} [words] - words used to create camel case
         * 
         * @return {string} [camel case notation]
         */
        public string MakeCamelCase(string words) {
            string[] allWords = words.ToLower().Split(new char[] { ' ' });
            return allWords[0] + string.Join("", allWords.Skip(1).Select(word => Capitalize(word)));
        }
        /**
         * create snake case notation
         * @param {string} [words] - words used to create camel case
         * 
         * @return {string} [snake case notation]
         */
        public string MakeSnakeCase(string words) {
            return words.ToLower().Replace(" ", "_");
        }
        /**
         * create capitalized snake case notation
         * @param {string} [words] - words used to create camel case
         * 
         * @return {string} [capitalized snake case notation]
         */
        public string MakeCapitalizeSnakeCase(string words) {
            return MakeSnakeCase(words).ToUpper();
        }
        /**
         * convert a notation to another notation
         * @param {int} [curForm] - current notation
         * @param {int} [target] - target notation
         * @param {string} [notation] - notation to convert
         * 
         * @return {string} [notation after conversion]
         */
        public string ConvertNotation(int curForm, int target, string notation) {
            string words = Regex.Replace(notation, "[A-Z_]", match => match.Value == "_" ? " " : " " + match);
            return BuildNotation(target, words);
        }
    }
}
