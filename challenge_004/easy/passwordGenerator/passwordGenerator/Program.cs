using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace passwordGenerator {
    class Program {
        static void Main(string[] args) {

            //challenge & bonus input
            Console.WriteLine(string.Join("\n", GetPassword(15, 12)));
        }
        /// <summary>
        /// generate password
        /// </summary>
        public static string[] GetPassword(int total, int length, string characters = null) {

            characters = characters ?? "abcdefghijklmnopqrstuvwxyz0123456789";
            var random = new Random();
            var passwords = new List<string>();

            for(int i = 0; i < total; i++) {

                var password = new StringBuilder();

                for(int j = 0; j < length; j++) {

                    char character = characters[random.Next(0, characters.Length)];
                    bool toUpper = Char.IsLetter(character) && random.Next(0, 10) < 3;
                    password.Append(toUpper ? Char.ToUpper(character) : character);
                }

                passwords.Add(password.ToString());
            }

            return passwords.ToArray();
        }
    }
}