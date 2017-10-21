using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace hexdumpToASCII {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(HexDump("file.txt"));
            Console.WriteLine("\n");
            //bonus input
            Console.WriteLine(HexDump("file.txt", true));
        }
        /*
         * read file into bytes
         * @param {string} [name] - name of file
         *
         * @return {byte[]} [all bytes in file]
         */
        public static byte[] ReadToByte(string name) {

            string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, name);

            try {

                return File.ReadAllBytes(path);
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }
        
            return null;
        }
        /*
         * HEX dump a file
         * @param {string} [name] - name of file
         * @param {bool} [ascii] - attempt printing ASCII strings
         *
         * @return {string} [HEX dump of file]
         */
        public static string HexDump(string name, bool ascii = false) {

            byte[] allBytes = ReadToByte(name);

            if(allBytes == null) {

                return null;
            }

            var dump = new StringBuilder();

            for(int i = 0, j = 0; i < allBytes.Length; i++) {

                if(i % 16 == 0) {
                    //row headers
                    dump.Append(j++.ToString("X8") + " ");
                }

                string hex = allBytes[i].ToString("X2");
                string separator = i % 16 == 15 ? "\n" : " ";
                dump.Append((ascii ? ToASCII(hex) : hex) + separator);
            }

            return dump.ToString();
        }
        /*
         * convert a HEX string to ASCII string
         * @param {string} [hex] - HEX string to convert
         *
         * @return {string} [ASCII strings]
         */
        public static string ToASCII(string hex) {

            int charCode;

            if(Int32.TryParse(hex, out charCode)) {

                return Char.ConvertFromUtf32(charCode).ToString() + " ";
            }

            return "  ";
        }
    }
}