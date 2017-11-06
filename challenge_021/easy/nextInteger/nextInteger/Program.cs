using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace nextInteger {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(NextInteger1(1234));
            Console.WriteLine(NextInteger2(1234));
            Console.WriteLine(NextInteger1(12433));
            Console.WriteLine(NextInteger2(12433));
            Console.WriteLine(NextInteger1(4321));
            Console.WriteLine(NextInteger2(4321));
        }
        /// <summary>
        /// find all permutations of given set of digits
        /// </summary>
        public static int[] PermuteDigits(string digits, string pattern = "", List<int> collection = null) { 
        
            collection = collection ?? new List<int>();

            if(digits.Length == 0) {

                collection.Add(Int32.Parse(pattern));

                return null;
            }

            for(int i = 0; i < digits.Length; i++) {

                if(digits[i] == '0' && pattern.Length == 0) {

                    continue;
                }

                string otherDigits = digits.Substring(0, i) + digits.Substring(i + 1);
                PermuteDigits(otherDigits, pattern + digits[i], collection);
            }

            return collection.ToArray();
        }
        /// <summary>
        /// find next larger integer using same digits as given number using brute-force
        /// </summary>
        public static int NextInteger1(int number) {

            var numbers = new HashSet<int>(PermuteDigits(number.ToString())).OrderBy(value => value).ToList();
            int index = numbers.IndexOf(number);

            return numbers[Math.Min(index + 1, numbers.Count - 1)];
        }
        /// <summary>
        /// swap value of two elements
        /// </summary>
        public static void Swap<T>(ref T element1, ref T element2) {

            T temp = element1;
            element1 = element2;
            element2 = temp;
        }
        /// <summary>
        /// find next larger integer using same digits as given number
        /// </summary>
        public static int NextInteger2(int number) {

            char[] digits = number.ToString().ToCharArray();

            for(int i = digits.Length - 1; i > 0; i--) {

                for(int j = i - 1; j >= 0; j--) {

                    if(digits[i] > digits[j]) {
                    
                        Swap(ref digits[j], ref digits[i]);
                        var head = digits.Take(j + 1);
                        var tail = digits.Skip(j + 1).OrderBy(value => value);

                        return Int32.Parse(string.Join("", head.Concat(tail)));
                    }
                }
            }

            return number;
        }
    }
}