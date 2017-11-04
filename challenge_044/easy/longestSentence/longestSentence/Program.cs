using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace longestSentence {
    class Program {
        static void Main(string[] args) {

            string text = "If it will feed nothing else, it will feed my revenge. He hath disgrac'd me and hind'red me half a million; laugh'd at my losses, mock'd at my gains, scorned my nation, thwarted my bargains, cooled my friends, heated mine enemies. And what's his reason? I am a Jew. Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions, fed with the same food, hurt with the same weapons, subject to the same diseases, healed by the same means, warmed and cooled by the same winter and summer, as a Christian is? If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge? If we are like you in the rest, we will resemble you in that. If a Jew wrong a Christian, what is his humility? Revenge. If a Christian wrong a Jew, what should his sufferance be by Christian example? Why, revenge. The villainy you teach me I will execute; and it shall go hard but I will better the instruction.";

            //challenge & bonus input
            Console.WriteLine(AnalyzeText(text));
        }
        /// <summary>
        /// extract sentences from text
        /// </summary>
        public static List<string> GetSentences(string text) {

            return Regex.Matches(text, "[^.!?]+[.!?]").Cast<Match>().Select(match => match.Value.Trim()).ToList();
        }
        /// <summary>
        /// count total number of words in a text
        /// </summary>
        public static int GetWordCount(string text) {

            return Regex.Matches(text, @"[A-Za-z']+").Count;
        }
        /// <summary>
        /// extract words from text
        /// </summary>
        public static string[] GetWords(string text) {

            return Regex.Matches(text, @"[A-Za-z']+").Cast<Match>().Select(match => match.Value).ToArray();
        }
        /// <summary>
        /// find sentence with most words in a text, the number of
        /// words contained and all words longer than 4 characters
        /// </summary>
        public static string AnalyzeText(string text) {

            var sentences = GetSentences(text);
            int maxWordCount = sentences.Max(sentence => GetWordCount(sentence));
            string resultSentence = sentences.Find(sentence => GetWordCount(sentence) == maxWordCount);
            //display results
            var result = new StringBuilder("Sentence with Most Words: " + resultSentence + "\n");
            result.Append("Word Count: " + GetWordCount(resultSentence) + "\n");
            result.Append("Words Longer Than 4 Characters: " + string.Join(", ", GetWords(resultSentence).Where(word => word.Length > 4)));

            return result.ToString();
        }
    }
}