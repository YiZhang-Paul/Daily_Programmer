using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace findDuplicates {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(GetDuplicates(new int[] { 1, 2, 3, 4, 5 }) + "\n");
            Console.WriteLine(GetDuplicates(new int[] { 1, 2, 4, 3, 4, 4, 5 }) + "\n");
            Console.WriteLine(GetDuplicates(new int[] { 1, 2, 2, 3, 2, 4, 5, 5, 4 }) + "\n");
            Console.WriteLine(GetDuplicates(new int[] { 1, 2, 3, 4, 5, 9, 10, 11, 1, 2, 3, 4 }));
        }
        /// <summary>
        /// record occurrence of each number in an array
        /// </summary>
        public static Dictionary<int, List<int>> GetOccurrence(int[] numbers) { 
        
            var occurrence = new Dictionary<int, List<int>>();

            for(int i = 0; i < numbers.Length; i++) {

                int value = numbers[i];
                occurrence[value] = occurrence.ContainsKey(value) ? occurrence[value] : new List<int>();
                occurrence[value].Add(i);
            }

            return occurrence;
        }
        /// <summary>
        /// find all duplicate numbers in an array
        /// </summary>
        public static string GetDuplicates(int[] numbers) {

            var duplicate = GetOccurrence(numbers).Where(pair => pair.Value.Count > 1);

            if(duplicate.Count() == 0) {
            
                return "No Duplicates Found.";
            }

            var result = duplicate.Select(pair => pair.Key + " at Index " + string.Join(", ", pair.Value));

            return "Duplicates Found:\n" + string.Join("\n", result);
        }
    }
}