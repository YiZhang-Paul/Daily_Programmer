using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace arbitraryBaseMultiplication {
    class Program {
        static void Main(string[] args) {
            
            //challenge input
            Console.WriteLine(Multiply1("CSGHJ", "CBA", 26));
            Console.WriteLine(Multiply2("CSGHJ", "CBA", 26));
        }
        /// <summary>
        /// convert character to value
        /// </summary>
        public static int CharToValue(char character) {

            return Char.ConvertToUtf32(character.ToString().ToLower(), 0) - 97;
        }
        /// <summary>
        /// convert value to character
        /// </summary>
        public static char ValueToChar(int value) {

            return Char.ConvertFromUtf32(value + 97).ToUpper()[0];
        }
        /// <summary>
        /// convert numbers into decimal base
        /// </summary>
        public static long ToDecimal(string number, int fromBase) {

            long result = 0;

            for(int i = 0; i < number.Length; i++) {

                int value = Char.IsDigit(number[i]) ? Int32.Parse(number[i].ToString()) : CharToValue(number[i]);
                result += (long)Math.Pow(fromBase, number.Length - 1 - i) * value;
            }

            return result;
        }
        /// <summary>
        /// get powers of a given base
        /// </summary>
        public static IEnumerable<long> GetBasePowers(long number, int fromBase) {

            int power = 0;

            while(Math.Pow(fromBase, power) <= number) {

                yield return (long)Math.Pow(fromBase, power++);
            }
        }
        /// <summary>
        /// convert decimal base number to other bases
        /// </summary>
        public static string ToBase(long number, int newBase) {

            var result = new StringBuilder();

            foreach(long power in GetBasePowers(number, newBase).Reverse()) {

                result.Append(ValueToChar((int)(number / power)));
                number = number % power;
            }

            return result.ToString();
        }
        /// <summary>
        /// arbitrary base multiplication
        /// </summary>
        public static string Multiply1(string operand1, string operand2, int fromBase) {

            return ToBase(ToDecimal(operand1, fromBase) * ToDecimal(operand2, fromBase), fromBase);
        }
        /// <summary>
        /// calculate sub-products
        /// </summary>
        public static List<List<int>> GetSubProducts(string operand1, string operand2, int fromBase) { 
        
            var products = new List<List<int>>();
            int carry = 0;

            foreach(char multiplier in operand2.Reverse()) {

                var rowProduct = new List<int>(new int[products.Count]);

                foreach(char toMultiply in operand1.Reverse()) {

                    int subProduct = CharToValue(multiplier) * CharToValue(toMultiply) + carry;
                    carry = subProduct / fromBase;
                    rowProduct.Add(subProduct % fromBase);
                }

                if(carry > 0) {

                    rowProduct.Add(carry);
                }

                rowProduct.Reverse();
                products.Add(rowProduct);
            }

            return products;
        }
        /// <summary>
        /// reduce sub-products to produce final result
        /// </summary>
        public static string ReduceSubProducts(List<List<int>> products, int fromBase) {

            var result = new StringBuilder();
            int carry = 0;

            for(int i = products[0].Count - 1; i >= 0; i--) {

                int subSum = products.Select(row => row[i]).Sum() + carry;
                carry = subSum / fromBase;
                result.Append(ValueToChar(subSum % fromBase));
            }

            return string.Join("", result.ToString().Reverse());
        }
        /// <summary>
        /// arbitrary base multiplication
        /// </summary>
        public static string Multiply2(string operand1, string operand2, int fromBase) {

            var products = GetSubProducts(operand1, operand2, fromBase);
            
            for(int i = 0, maxRow = products.Max(row => row.Count); i < products.Count; i++) {
                //align row products
                products[i] = new int[maxRow - products[i].Count].Concat(products[i]).ToList();
            }

            return ReduceSubProducts(products, fromBase);
        }
    }
}