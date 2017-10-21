using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace arithmeticTables {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(GetArithmeticTable('+', 8));
            Console.WriteLine(GetArithmeticTable('-', 8));
            Console.WriteLine(GetArithmeticTable('*', 8));
            Console.WriteLine(GetArithmeticTable('/', 8));
        }
        /*
         * construct arithmetic table
         * @param {char} [operators] - operator to use
         * @param {int} [limit] - upper limit of arithmetic table
         *
         * @return {string} [arithmetic table]
         */
        public static string GetArithmeticTable(char operators, int limit) {

            int colWidth = GetColWidth(operators, limit);
            int headerWidth = limit.ToString().Length + 1;
            var table = new StringBuilder(GetHeader(operators, limit, headerWidth, colWidth));

            for(int i = 0; i <= limit; i++) {

                table.Append(i.ToString().PadLeft(headerWidth) + " | ");

                for(int j = 0; j <= limit; j++) {

                    bool dividByZero = operators == '/' && j == 0;
                    string result = dividByZero ? "N/A" : GetResult(operators, i, j).ToString();
                    table.Append(result.PadLeft(colWidth) + (j == limit ? "\n" : " "));
                }
            }

            return table.ToString();
        }
        /*
         * construct header for arithmetic table
         * @param {char} [operators] - operator to use
         * @param {int} [limit] - upper limit of arithmetic table
         * @param {int} [headerWidth] - header width
         * @param {int} [colWidth] - column width
         *
         * @return {string} [header of table]
         */
        public static string GetHeader(char operators, int limit, int headerWidth, int colWidth) {

            var header = new StringBuilder(operators.ToString().PadLeft(headerWidth) + " | ");

            for(int i = 0; i <= limit; i++) {

                header.Append(i.ToString().PadLeft(colWidth) + " ");
            }

            return header.Append("\n" + "".PadRight(header.Length, '-') + "\n").ToString();
        }
        /*
         * get column width
         * @param {char} [operators] - operator to use
         * @param {int} [limit] - upper limit of arithmetic table
         *
         * @return {int} [maximum length of all results]
         */
        public static int GetColWidth(char operators, int limit) { 

            switch(operators) {
            
                case '+' :

                    return (limit * 2).ToString().Length;

                case '-' :

                    return limit.ToString().Length + 1;

                case '*' :

                    return (limit * limit).ToString().Length;

                case '/' :

                    return Math.Max(3, limit.ToString().Length + 3);
            }

            return 0;
        }
        /*
         * get calculation result
         * @param {char} [operators] - operators to use
         * @param {int} [operand1] - operand 1
         * @param {int} [operand2] - operand 2
         *
         * @return {double} [calculation result]
         */
        public static double GetResult(char operators, int operand1, int operand2) {

            switch(operators) {

                case '+' :

                    return operand1 + operand2;

                case '-' :

                    return operand1 - operand2;

                case '*' :

                    return operand1 * operand2;

                case '/' :

                    return Math.Round((double)operand1 / (double)operand2, 1);
            }

            return 0;
        }
    }
}