using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace binaryRotation {
    class Program {
        static void Main(string[] args) {

            //default input19
            Console.WriteLine(string.Join(" ", GetBinaryRotationSequence(19)));
            Console.WriteLine(string.Join(" ", GetBinaryRotationSequence(69)));
            Console.WriteLine(string.Join(" ", GetBinaryRotationSequence(205)));
            Console.WriteLine(string.Join(" ", GetBinaryRotationSequence(357)));
            //challenge input
            Console.WriteLine(string.Join(" ", GetBinaryRotationSequence(54321)));
        }
        /// <summary>
        /// generate binary rotation sequence
        /// </summary>
        public static int[] GetBinaryRotationSequence(int number) { 
        
            var sequence = new List<int> { number };

            while(Convert.ToString(sequence.Last(), 2).Contains("0")) {

                string binary = Convert.ToString(sequence.Last(), 2);
                string rotated = binary.Last() + binary.Remove(binary.Length - 1);
                sequence.Add((int)Convert.ToInt32(rotated, 2));
            }

            return sequence.ToArray();
        }
    }
}