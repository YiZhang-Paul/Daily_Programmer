using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace anagrams {
    class Program {
        static void Main(string[] args) {

            var finder = new AnagramFinder("wordList.txt");

            //default input
            string input1 = "LEPROUS";
            Console.WriteLine(string.Join(" ", finder.GetAnagrams(input1)));
            //challenge input
            string input2 = "TRIANGLE";
            Console.WriteLine(string.Join(" ", finder.GetAnagrams(input2)));
            string input3 = "PAGERS";
            Console.WriteLine(string.Join(" ", finder.GetAnagrams(input3)));
            string input4 = "AMBLERS";
            Console.WriteLine(string.Join(" ", finder.GetAnagrams(input4)));
            //bonus input
            Console.WriteLine("Largest Family: " + string.Join(" ", finder.GetLargestFamily()));
            Console.WriteLine("Second Largest Family: " + string.Join(" ", finder.GetLargestFamily(2)));
        }
    }
}