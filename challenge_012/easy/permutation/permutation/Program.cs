using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace permutation {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(string.Join(" ", Permute("ABCD")));
            Console.WriteLine(string.Join(" ", Permute("hi!")));
        }
        /// <summary>
        /// swap value of two items
        /// </summary>
        public static void Swap<T>(ref T item1, ref T item2) {

            T temp = item1;
            item1 = item2;
            item2 = temp;
        }
        /// <summary>
        /// get all permutations of a string
        /// </summary>
        public static string[] Permute(string input) { 
        
            var permutation = new List<string>();

            for(int i = 0; i < input.Length; i++) {
                //permutation for each character
                char[] options = input.ToCharArray();
                Swap(ref options[0], ref options[i]);

                for(int j = 0; j < input.Length - 1; j++) {
                    //fix character at index 0
                    for(int k = 1; k < input.Length - 1; k++) {

                        Swap(ref options[k], ref options[k + 1]);
                        permutation.Add(string.Join("", options));
                    }
                }
            }

            return permutation.ToArray();
        }
    }
}