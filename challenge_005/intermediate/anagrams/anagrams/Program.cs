using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Diagnostics;

namespace anagrams {
    class Program {
        static void Main(string[] args) {

            var watch = new Stopwatch();
            watch.Start();

            //challenge input
            Console.WriteLine(string.Join(" ", GetAnagram("snap", GetWordList("wordList.txt"))));
            Console.WriteLine(string.Join(" ", GetAnagram("skate", GetWordList("wordList.txt"))));

            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds + "ms");
        }

        private static string[] GetWordList(string fileName) {

            try {

                return File.ReadAllLines(fileName);
            }
            catch(Exception exception) {

                Console.WriteLine("File not Found.");
                Console.WriteLine(exception.Message);
            }

            return null;
        }

        private static string SortLetters(string word) {

            return string.Join("", word.ToLower().OrderBy(letter => letter));
        }

        private static bool IsAnagram(string word, string otherWord) {

            return SortLetters(word) == SortLetters(otherWord);
        }

        private static string[] GetAnagram(string word, string[] list) { 
        
            return new HashSet<string>(list.Where(otherWord => IsAnagram(word, otherWord))).ToArray();
        }
    }
}