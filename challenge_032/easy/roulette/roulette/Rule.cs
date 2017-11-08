using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace roulette {
    class Rule {

        private string[] _rangeBets = new string[] {
        
            "split", "1 to 18", "19 to 36", "1st dozen", "2nd dozen", "3rd dozen"
        };
        private string[] _numberBets = new string[] {
        
            "0", "00", "street", "corner", "six line", "row", "top line",  
            "straight up", "1st column", "2nd column", "3rd column"
        };
        private Dictionary<string, string> _defaultWinSpace = new Dictionary<string, string> { 
        
            {"0", "0"},
            {"00", "00"},
            {"top line", "0-00-1-2-3"},
            {"row", "0-00"},
            {"1 to 18", "1-18"},
            {"19 to 36", "19-36"},
            {"1st dozen", "1-12"},
            {"2nd dozen", "13-24"},
            {"3rd dozen", "25-36"},
            {"odd", "Not Specified"},
            {"even", "Not Specified"},
            {"red", "Not Specified"},
            {"black", "Not Specified"}
        };

        public HashSet<string> RangeBets { get; private set; }
        public HashSet<string> NumberBets { get; private set; }
        public Layout Layout { get; private set; }

        public Rule(Layout layout) {

            RangeBets = new HashSet<string>(_rangeBets);
            NumberBets = new HashSet<string>(_numberBets);
            Layout = layout;

            foreach(string betName in new string[] { "1st column", "2nd column", "3rd column" }) {

                int columnIndex = Int32.Parse(Regex.Match(betName, @"\d").Value) - 1;
                _defaultWinSpace.Add(betName, string.Join("-", layout.GetColumn(columnIndex)));
            }
        }
        /// <summary>
        /// check if a bet name is valid
        /// </summary>
        public bool IsValidName(string betName) {

            return RangeBets.Contains(betName) || NumberBets.Contains(betName) || _defaultWinSpace.ContainsKey(betName);
        }
        /// <summary>
        /// check for valid straight up
        /// </summary>
        public bool IsStraightUp(string winSpace) {

            int value = Int32.Parse(winSpace);

            return value > 0 && value < 37;
        }
        /// <summary>
        /// check for valid split
        /// </summary>
        public bool IsSplit(string winSpace) {

            string[] pockets = GetPockets(winSpace);
            int firstPocket = Int32.Parse(pockets[0]);

            if(pockets.Length != 2 || firstPocket < 1 || firstPocket > 36) {

                return false;
            }

            return Layout.IsAdjacent(pockets[0], pockets[1]);
        }
        /// <summary>
        /// check for valid street
        /// </summary>
        public bool IsStreet(string winSpace) {

            int[] pockets = GetPockets(winSpace).Select(Int32.Parse).ToArray();

            if(pockets.Length != 3 || pockets[0] < 1 || pockets[0] > 34) {

                return false;
            }

            return (pockets[0] - 1) % 3 == 0 && pockets[2] - pockets[1] == 1 && pockets[1] - pockets[0] == 1;
        }
        /// <summary>
        /// check for valid corner
        /// </summary>
        public bool IsCorner(string winSpace) {

            string[] pockets = GetPockets(winSpace);
            int firstPocket = Int32.Parse(pockets[0]);
            int lastPocket = Int32.Parse(pockets.Last());

            if(pockets.Length != 4 || firstPocket < 1 || firstPocket > 32 || lastPocket - firstPocket != 4) {

                return false;
            }

            return Layout.IsAdjacent(pockets[0], pockets[1]) && Layout.IsAdjacent(pockets[0], pockets[2]);
        }
        /// <summary>
        /// check for valid six line
        /// </summary>
        public bool IsSixLine(string winSpace) {

            string[] pockets = GetPockets(winSpace);
            int firstPocket = Int32.Parse(pockets[0]);
            int lastPocket = Int32.Parse(pockets.Last());

            if(pockets.Length != 6 || (firstPocket - 1) % 3 != 0 || firstPocket < 1 || firstPocket > 31) {

                return false;
            }

            return lastPocket - firstPocket == 5;
        }
        /// <summary>
        /// validate bet input information
        /// </summary>
        public bool Validate(string betName, string winSpace) {

            if(!IsValidName(betName)) {

                Console.WriteLine("Invalid Bet Name");

                return false;
            }

            if(_defaultWinSpace.ContainsKey(betName) && winSpace != null) {

                Console.WriteLine("No Winning Spaces Allowed");

                return false;
            }

            if(!_defaultWinSpace.ContainsKey(betName) && winSpace == null) {

                Console.WriteLine("Winning Spaces not Provided");

                return false;
            }

            switch(betName) {

                case "straight up" : return IsStraightUp(winSpace);
                case "split" : return IsSplit(winSpace);
                case "street" : return IsStreet(winSpace);
                case "corner" : return IsCorner(winSpace);
                case "six line" : return IsSixLine(winSpace);
                default: return false;
            }
        }
        /// <summary>
        /// extract numbers from player bets
        /// </summary>
        public string[] GetPockets(string winSpace) {

            return Regex.Matches(winSpace, @"\d+")
                        .Cast<Match>()
                        .Select(match => match.Value)
                        .OrderBy(value => Int32.Parse(value))
                        .ToArray();
        }
        /// <summary>
        /// check if spin value is in bet value range
        /// </summary>
        public bool InRange(string winSpace, string pocket) {

            string[] range = GetPockets(winSpace);
            int pocketValue = Int32.Parse(pocket);

            return pocketValue >= Int32.Parse(range[0]) && pocketValue <= Int32.Parse(range[1]);
        }
        /// <summary>
        /// check if spin value is one of bet values
        /// </summary>
        public bool HasPocket(string winSpace, string pocket) {

            return new HashSet<string>(GetPockets(winSpace)).Contains(pocket);
        }
        /// <summary>
        /// generate default bet values
        /// </summary>
        public string GetWinSpace(string betName, Layout layout) { 
        
            return _defaultWinSpace.ContainsKey(betName) ? _defaultWinSpace[betName] : "Not Specified";
        }
    }
}