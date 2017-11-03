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
            Console.WriteLine(Decode("T_kiaihces_eea__l!", 3));
            Console.WriteLine(Decode("Telh_ieie_s!c_vaamk_z", 7));
        }
        /// <summary>
        /// retrieve a random letter
        /// </summary>
        public static char GetLetter(Random random) {

            return Char.ConvertFromUtf32(random.Next(0, 26) + 97)[0];
        }
        /// <summary>
        /// encrypt message using matrix cipher
        /// </summary>
        public static string Encode(string message, int key) {

            var encoded = new StringBuilder();
            var random = new Random();

            for(int i = 0; i < key; i++) {

                for(int j = 0; j < Math.Ceiling((double)message.Length / key); j++) {

                    char character = i + j * key >= message.Length ? GetLetter(random) : message[i + j * key];
                    encoded.Append(character == ' ' ? '_' : character);
                }
            }

            return encoded.ToString();
        }
        /// <summary>
        /// decrypt message using matrix cipher
        /// </summary>
        public static string Decode(string encoded, int key) {

            var decoded = new StringBuilder();
            int rows = (int)Math.Ceiling((double)encoded.Length / key);

            for(int i = 0; i < rows; i++) {

                for(int j = 0; j < key; j++) {

                    decoded.Append(encoded[i + j * rows] == '_' ? ' ' : encoded[i + j * rows]);
                }
            }

            return decoded.ToString();
        }
    }
}