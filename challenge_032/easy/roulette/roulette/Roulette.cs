using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace roulette {
    class Roulette {

        public Wheel Wheel { get; private set; }
        public Layout Layout { get; private set; }
        public Rule Rule { get; private set; }
        public Dictionary<string, string> Odds { get; private set; }
        public Dictionary<string, string> Payout { get; private set; }

        public Roulette() {
            
            Wheel = new Wheel();
            Layout = new Layout();
            Rule = new Rule(Layout);
            Odds = GetTable("odds.txt");
            Payout = GetTable("payout.txt");
        }
        /// <summary>
        /// read table from file
        /// </summary>
        public Dictionary<string, string> GetTable(string fileName) {

            try {

                return File.ReadAllLines(fileName)
                           .Select(line => line.Split(','))
                           .ToDictionary(line => line[0], line => line[1]);
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return null;
        }
        /// <summary>
        /// check game result
        /// </summary>
        public bool CheckResult(string betName, string winSpace, string pocket) {

            if(Rule.NumberBets.Contains(betName)) {
                //bet on single/multiple numbers
                return Rule.HasPocket(winSpace, pocket);
            }

            if(Rule.RangeBets.Contains(betName)) {
                //bet on range of numbers
                return Rule.InRange(winSpace, pocket);
            }

            if(Int32.Parse(pocket) != 0 && (betName == "odd" || betName == "even")) {

                return betName == "odd" ? Int32.Parse(pocket) % 2 == 1 : Int32.Parse(pocket) % 2 == 0;
            }

            if(betName == "red" || betName == "black") {

                return betName == "red" ? Layout.IsRed(pocket) : Layout.IsBlack(pocket);
            }

            return false;
        }
        /// <summary>
        /// calculate total payout/lose
        /// </summary>
        public decimal GetPayout(decimal bid, bool win, string betName) { 
        
            if(!win) {

                return bid;
            }

            return bid * Decimal.Parse(Regex.Match(Payout[betName], @"\d*\.?\d+").Value);
        }
        /// <summary>
        /// play roulette game
        /// </summary>
        /// <param name="bid">total amount of money placed for bet</param>
        /// <param name="betName">bet name</param>
        /// <param name="winSpace">bet value</param>
        public string PlayGame(decimal bid, string betName, string winSpace = null) {

            if(!Rule.Validate(betName, winSpace)) {

                return "Invalid Bet";
            }

            winSpace = winSpace ?? Rule.GetWinSpace(betName, Layout);
            string pocket = Wheel.Spin();
            bool win = CheckResult(betName, winSpace, pocket);
            decimal payout = GetPayout(bid, win, betName);

            return string.Join("\n", new string[] {
            
                "Winning Spaces: " + winSpace,
                "Bet Name: " + Formatter.CapitalizeAll(betName),
                "Odds: " + Odds[betName],
                "Payout: " + Payout[betName],
                "Pocket: " + pocket,
                "You " + (win ? "Win" : "Lose") +"!",
                "Payout: $" + payout + (win ? " Gain" : " Lost") + "!"
            });
        }
    }
}