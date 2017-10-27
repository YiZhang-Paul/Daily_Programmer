using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vigenèreCipher {
    class Program {
        static void Main(string[] args) {

            var cipher = new VigenereCipher("GLADOS");
            Console.WriteLine(cipher.Encrypt("THECAKEISALIE"));
            Console.WriteLine(cipher.Decrypt("ZSEFOCKTSDZAK"));
        }
    }
}