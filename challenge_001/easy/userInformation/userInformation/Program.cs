using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace userInformation {
    class Program {
        static void Main(string[] args) {

            //challenge input
            GetInformation();
        }
        /// <summary>
        /// write text to file
        /// </summary>
        public static void WriteFile(string text, string output) {

            try {

                File.AppendAllText(output, text);
            }
            catch(Exception exception) {

                Console.WriteLine(exception.Message);
            }
        }
        /// <summary>
        /// retrieve user input
        /// </summary>
        public static string GetInput(string message, string pattern = "") {

            Console.WriteLine(message);
            string input = Console.ReadLine().Trim();

            return Regex.IsMatch(input, pattern) ? input : GetInput(message, pattern);
        }
        /// <summary>
        /// retrieve user age
        /// </summary>
        public static int GetAge(string message, string pattern = "") {

            int age = Int32.Parse(GetInput(message, pattern));

            return age > 0 && age < 121 ? age : GetAge(message, pattern);
        }
        /// <summary>
        /// process user information
        /// </summary>
        public static void GetInformation() {

            string name = GetInput("Please Enter Your Name:", @"^[A-Za-z'\s]+$");
            int age = GetAge("Please Enter Your Age:", @"^\d+$");
            string username = GetInput("Please Enter Your Reddit Username:");
            //display and save user information
            Console.WriteLine("Your name is {0}, you are {1} years old, and your username is {2}.", name, age, username);
            WriteFile("{Name:" + name + ",Age:" + age + ",UserName:" + username + "}", "output.txt");
        }
    }
}