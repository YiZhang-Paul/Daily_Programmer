using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace caesarCipher {
    class Program {
        static void Main(string[] args) {

            int key = 6;
            string text = "Spzalu - zayhunl dvtlu sfpun pu wvukz kpzaypibapun zdvykz pz uv ihzpz mvy h zfzalt vm nvclyutlua.  Zbwyltl leljbapcl wvdly klypclz myvt h thukhal myvt aol thzzlz, uva myvt zvtl mhyjpjhs hxbhapj jlyltvuf. Fvb jhu'a lewlja av dplsk zbwyltl leljbapcl wvdly qbza 'jhbzl zvtl dhalyf ahya aoyld h zdvyk ha fvb! P tlhu, pm P dlua hyvbuk zhfpu' P dhz hu ltwlylyvy qbza iljhbzl zvtl tvpzalulk ipua ohk sviilk h zjptpahy ha tl aolf'k wba tl hdhf!... Ho, huk uvd dl zll aol cpvslujl puolylua pu aol zfzalt! Jvtl zll aol cpvslujl puolylua pu aol zfzalt! Olsw! Olsw! P't ilpun ylwylzzlk!";

            //challenge input
            Console.WriteLine(Encode("Daily programmer", key));
            Console.WriteLine(Decode("Jgore vxumxgsskx", key));
            //bonus input
            Console.WriteLine(string.Join("\n", CrackCode(text)));
        }
        /// <summary>
        /// retrieve shifted letter
        /// </summary>
        public static string GetLetter(string letter, int key) {

            int baseCode = letter == letter.ToUpper() ? 65 : 97;

            return Char.ConvertFromUtf32(baseCode + (Char.ConvertToUtf32(letter, 0) - baseCode + key) % 26);
        }
        /// <summary>
        /// encrypt message using Caesar cipher
        /// </summary>
        public static string Encode(string text, int key) {

            return Regex.Replace(text, "[A-Za-z]", match => GetLetter(match.Value, key));
        }
        /// <summary>
        /// decrypt message using Caesar cipher
        /// </summary>
        public static string Decode(string encoded, int key) {

            return Encode(encoded, 26 - key);
        }
        /// <summary>
        /// decrypt text using all possible keys
        /// </summary>
        public static string[] CrackCode(string text) {

            return Enumerable.Range(1, 26).Select(key => Decode(text, key) + "\n").ToArray();
        }
    }
}