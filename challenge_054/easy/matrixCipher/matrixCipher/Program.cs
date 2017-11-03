using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace matrixCipher {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(Encode("The cake is a lie!", 3));
            Console.WriteLine(Encode("The cake is a lie!", 7));
        }
        /// <summary>
        /// encrypt message using matrix cipher
        /// </summary>
        public static string Encode(string message, int key) {

            var encoded = new StringBuilder();
            var random = new Random();

            for(int i = 0; i < key; i++) {

                for(int j = 0; j < Math.Ceiling((double)message.Length / key); j++) {

                    char character = i + j * key >= message.Length ? 
                        Char.ConvertFromUtf32(random.Next(0, 26) + 97)[0] : message[i + j * key];
                    encoded.Append(character == ' ' ? '_' : character);
                }
            }

            return encoded.ToString();
        }
    }
}