using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace wordAnalytics {
    class WordAnalyzer {

        public string Text { get; private set; }
        public string[] WordList { get; private set; }
        public Dictionary<string, int> WordCounter { get; private set; }
        public Dictionary<char, int> LetterCounter { get; private set; }
        public Dictionary<char, int> SymbolCounter { get; private set; }

        public int TotalWord { get { return WordList.Length; } }
        public int TotalLetter { get { return LetterCounter.Aggregate(0, (acc, next) => acc + next.Value); } }
        public int TotalSymbol { get { return SymbolCounter.Aggregate(0, (acc, next) => acc + next.Value); } }

        public WordAnalyzer() { 
        }
        /*
         * @param {string} [text] - text to analyze
         */
        public WordAnalyzer(string text) {

            Text = text;
            WordList = GetWords();
            WordCounter = CountWords();
            LetterCounter = CountLetters();
            SymbolCounter = CountSymbols();
        }
        /*
         * retrieve all words
         *
         * @return {string[]} [word list]
         */
        public string[] GetWords() {

            var matches = Regex.Matches(Text.ToLower(), "[a-zA-Z]+", RegexOptions.IgnoreCase);
            
            return matches.Cast<Match>().Select(match => match.Value).ToArray();
        }
        /*
         * count word occurrences
         *
         * @return {Dictionary<string, int>} [word occurrence]
         */
        public Dictionary<string, int> CountWords() {

            var counter = new Dictionary<string, int>();

            foreach(string word in WordList) {

                counter[word] = counter.ContainsKey(word) ? counter[word] + 1 : 1; 
            }

            return counter;
        }
        /*
         * count letter occurrences
         *
         * @return {Dictionary<char, int>} [letter occurrence]
         */
        public Dictionary<char, int> CountLetters() { 
        
            var counter = new Dictionary<char, int>();

            foreach(string word in WordList) {
            
                foreach(char letter in word) {

                    counter[letter] = counter.ContainsKey(letter) ? counter[letter] + 1 : 1;
                }
            }

            return counter;
        }
        /*
         * count symbol occurrences
         *
         * @return {Dictionary<char, int>} [symbol occurrence]
         */
        public Dictionary<char, int> CountSymbols() { 
        
            var counter = new Dictionary<char, int>();
            var symbols = Regex.Matches(Text, @"[^\s\w]");
            
            foreach(Match match in symbols) {
            
                char symbol = match.Value[0];
                counter[symbol] = counter.ContainsKey(symbol) ? counter[symbol] + 1 : 1;
            }

            return counter;
        }
        /*
         * retrieve top common words
         * @param {int} [total] - total number of top common words to retrieve
         *
         * @return {string[]} [top common words]
         */
        public string[] TopWords(int total) {

            return WordCounter.OrderByDescending(counter => counter.Value)
                              .Take(total)
                              .Select(count => count.Key)
                              .ToArray();
        }
        /*
         * retrieve top common letters
         * @param {int} [total] - total number of top common letters to retrieve
         *
         * @return {char[]} [top common letters]
         */
        public char[] TopLetters(int total) {

            return LetterCounter.OrderByDescending(counter => counter.Value)
                                .Take(total)
                                .Select(count => count.Key)
                                .ToArray();
        }
        /*
         * retrieve most common opening word for paragraphs
         *
         * @return {string} [most common opening word]
         */
        public string TopOpenWord() {

            var openWords = Regex.Matches(Text.ToLower(), @"(^[^.]|\n)\s*\w+");
            var counter = new Dictionary<string, int>();

            foreach(Match match in openWords) {

                string word = match.Value.Trim();
                counter[word] = counter.ContainsKey(word) ? counter[word] + 1 : 1;
            }

            return counter.OrderByDescending(count => count.Value).First().Key;
        }
        /*
         * retrive all words occurred for a given amount of time
         * @param {int} [time] - total time of occurrence of the words
         *
         * @return {string[]} [all words occurred for a given amount of time]
         */
        public string[] WordsUsedXTimes(int time = 1) {

            return WordCounter.Where(count => count.Value == time)
                              .Select(count => count.Key)
                              .ToArray();
        }
        /*
         * retrieve all letters unused
         *
         * @return {char[]} [all letters unused]
         */
        public char[] LetterUnused() {

            var letters = new HashSet<char>("abcdefghijklmnopqrstuvwxyz");

            return letters.Where(letter => !LetterCounter.ContainsKey(letter)).ToArray();
        }
        /*
         * analyze word
         * @param {int} [topWord] - total number of top common words to display
         * @param {int} [topLetter] - total number of top common letters to display
         * @param {} [] -
         *
         * @return {string} [word analysis]
         */
        public string AnalyzeWord(int topWord = 3, int topLetter = 3) {

            var result = new StringBuilder();
            //total number of words, letters and symbols in the text
            result.Append(TotalWord + " words\n" + TotalLetter + " letters\n" + TotalSymbol + " symbols\n");
            //top 3 most common words and letters
            result.Append("Top three most common words: " + string.Join(", ", TopWords(topWord)) + "\n");
            result.Append("Top three most common letters: " + string.Join(", ", TopLetters(topLetter)) + "\n");   
            //most common first word of all paragraphs
            result.Append(TopOpenWord() + " is the most common first word of all paragraphs\n");
            //words only used once and letters not used
            result.Append("Words only used once: " + string.Join(", ", WordsUsedXTimes()) + "\n");
            result.Append("Letters not used in the document: " + string.Join(", ", LetterUnused()) + "\n");

            return result.ToString();
        }
    }
}