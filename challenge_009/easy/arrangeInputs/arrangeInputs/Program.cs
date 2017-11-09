using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace arrangeInputs {
    class Program {
        static void Main(string[] args) {

            ArrangeInputs();
        }
        /// <summary>
        /// retrieve user input
        /// </summary>
        public static string GetInput() {

            Console.WriteLine("> Please Enter a Number or String, or Press Enter to Sort All Inputs.");
            string input = Console.ReadLine().Trim();

            return input == "" || Regex.IsMatch(input, @"^\d+$|^[A-Za-z]+$") ? input : GetInput();
        }
        /// <summary>
        /// sort list of inputs
        /// </summary>
        public static string[] SortList(string[] inputs) {

            return inputs.OrderBy(input => Char.IsDigit(input[0]) ? Int32.Parse(input) : Char.ConvertToUtf32(input, 0))
                         .OrderBy(input => !Regex.IsMatch(input, @"\d"))
                         .ToArray();
        }
        /// <summary>
        /// retrieve and arrange user inputs
        /// </summary>
        public static void ArrangeInputs() {

            var inputs = new List<string>();

            while(true) {

                string input = GetInput();

                if(input == "") {
                
                    if(inputs.Count <= 1) {

                        Console.WriteLine("Notice: Please Enter at Least " + (2 - inputs.Count) + " More Input.");
                        continue;
                    }
                    else {

                        Console.WriteLine("All Inputs are Sorted as Follow:");
                        break;
                    }
                }

                inputs.Add(input);
            }

            Console.WriteLine(string.Join(" ", SortList(inputs.ToArray())));
        }
    }
}