using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace roulette {
    class Rule {

        private Layout _layout = new Layout();
        private Dictionary<string, string> _defaultBets = new Dictionary<string, string> { 
        
            {"top line", "0-00-1-2-3"},
            {"row", "0-00"},
            {"1 to 18", "1-18"},
            {"19 to 36", "19-36"},
            {"1st dozen", "1-12"},
            {"2nd dozen", "13-24"},
            {"3rd dozen", "25-36"}
        };
        /// <summary>
        /// extract numbers from player bets
        /// </summary>
        public string[] GetNumbers(string betValue) {

            return Regex.Matches(betValue, @"\d+")
                        .Cast<Match>()
                        .Select(match => match.Value)
                        .ToArray();
        }
        /// <summary>
        /// check if spin value is in bet value range
        /// </summary>
        public bool InRange(string betValue, string spin) {

            string[] range = GetNumbers(betValue);
            int spinValue = Int32.Parse(spin);

            return spinValue >= Int32.Parse(range[0]) && spinValue <= Int32.Parse(range[1]);
        }
        /// <summary>
        /// check if spin value is one of bet values
        /// </summary>
        public bool HasValue(string betValue, string spin) {

            return new HashSet<string>(GetNumbers(betValue)).Contains(spin);
        }
        /// <summary>
        /// generate default bet values
        /// </summary>
        public string GetBetValue(string bet, Layout layout) { 
        
            if(_defaultBets.ContainsKey(bet)) {

                return _defaultBets[bet];
            }

            if(Regex.IsMatch(bet, "column")) {

                int column = Int32.Parse(Regex.Match(bet, @"\d").Value) - 1;

                return string.Join("-", layout.GetColumn(column));
            }

            return "Not Specified";
        }
    }
}