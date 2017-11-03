using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace matrixCipher {
    class Program {
        static void Main(string[] args) {

            //challenge input
            Console.WriteLine(Encode("The cake is a lie!", 3));
            Console.WriteLine(Encode("The cake is a lie!", 7));
            Console.WriteLine(Decode("T_kiaihces_eea__l!", 3));
            Console.WriteLine(Decode("Telh_ieie_s!c_vaamk_z", 7));
            //bonus input
            string code = "I_rso_wotTe,taef_h__hl__socaeihtemonraaheamd_svemsp_l_ems_ayiN___Anofeadt.yueo_oh_..__leaA_.iaastnY.snw__do__d_nyeuhl_foor_eiaotushlvrr.'oapee.avnv_d__he,ey_gOf___oiunrbpaunieeer_r_l_geos_ctoingoloyfq_rcam__ilainpotlimadufhjv_llt_emiw_aevsdnrsdriengieysr_p_tc_,tlfteuc_uitwrrawavzo_irhlez_ftrelszloyyry_bir__e_huv_no_eadeauuyvsbs_mtoe_l.rb_urat_eeh_y_pOsreg_fjnp,rocucee___otn_cpgbmujltaayprgiayr_uepfb_btt,velyahe_s,eogeraq__ue__ncysr.hcdzoo__ar_duftTcioi'tahkmnarwxeeeegeae_r__j";
            Console.WriteLine(CrackCode(code, "It_seems"));
        }
        /// <summary>
        /// decrypt message using matrix cipher with a given starting pattern
        /// </summary>
        public static string CrackCode(string message, string pattern) { 
        
            if(message[0] != pattern[0]) {

                return "";
            }

            int[] keys = GetKeys(message, pattern);

            return keys.Length == 0 ? "" : string.Join("\n", keys.Select(key => Decode(message, key)));
        }
        /// <summary>
        /// calculate all possible keys of encrypted message
        /// </summary>
        public static int[] GetKeys(string message, string pattern) { 
        
            var keys = new List<int>();

            foreach(Match match in Regex.Matches(message, pattern[1].ToString())) {

                int key = message.Length % match.Index == 0 ? message.Length / match.Index : -1;

                if(key != -1 && IsValidKey(message, pattern, key)) {

                    keys.Add(key);
                }
            }

            return keys.ToArray();
        }
        /// <summary>
        /// check if a key is valid
        /// </summary>
        public static bool IsValidKey(string message, string pattern, int key) {

            for(int i = 0, curIndex = 0; i < Math.Ceiling((double)pattern.Length / key); i++) {
                //check every character in pattern to see if they are on the correct index of message
                for(int j = 0; j < Math.Min(pattern.Length - i * key, key); j++) {

                    if(message[i + j * message.Length / key] != pattern[curIndex++]) {
                    
                        return false;
                    }
                }
            }

            return true;
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

                    int index = i + j * key;
                    encoded.Append(index >= message.Length ? GetLetter(random) : message[index]);
                }
            }

            return Regex.Replace(encoded.ToString(), " ", "_");
        }
        /// <summary>
        /// decrypt message using matrix cipher
        /// </summary>
        public static string Decode(string encoded, int key) {

            var decoded = new StringBuilder();
            int rows = (int)Math.Ceiling((double)encoded.Length / key);

            for(int i = 0; i < rows; i++) {

                for(int j = 0; j < key; j++) {

                    decoded.Append(encoded[i + j * rows]);
                }
            }

            return Regex.Replace(decoded.ToString(), "_", " ");
        }
    }
}