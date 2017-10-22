using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace wordUnscrambler {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(SortLetter("dqwesa"));
        }
        /*
         * retrieve word list
         * @param {string} [name] - word list file name
         *
         * @return {string[]} [word list]
         */
        public static string[] GetList(string name) {

            string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, name);

            try {

                return File.ReadAllLines(path);
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return null;
        }
        /*
         * arrange letter of words using counting sort
         * @param {string} [word] - word to re-arrange letters
         *
         * @return {string} [re-arranged word]
         */
        public static string SortLetter(string word) {

            string lowerCase = word.ToLower();
            int[] counter = new int[26];
            char[] output = new char[word.Length];

            for(int i = 0; i < word.Length; i++) {

                counter[Char.ConvertToUtf32(word, i) - 96]++;
            }

            for(int i = 1; i < counter.Length; i++) {

                counter[i] += counter[i - 1];
            }

            for(int i = 0; i < word.Length; i++) {

                int index = Char.ConvertToUtf32(word, i) - 96;
                output[counter[index] - 1] = word[i];
                counter[index]--;
            }

            return string.Join("", output);
        }
    }
}