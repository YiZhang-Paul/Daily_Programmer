using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

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
            Rule = new Rule();
            Odds = GetTable("odds.txt");
            Payout = GetTable("payout.txt");
        }
        /// <summary>
        /// read table from file
        /// </summary>
        public Dictionary<string, string> GetTable(string fileName) {

            try {

                var table = new Dictionary<string, string>();

                foreach(string record in File.ReadAllLines(fileName)) {

                    string[] information = record.Split(',');
                    table.Add(information[0], information[1]);
                }

                return table;
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
        public bool CheckResult(string bet, string betValue, string spin) {

            switch(bet) {

                case "0" : case "00" : case "Straight up" : case "Street" :
                case "Corner" : case "Six line" : case "Top line" : case "Row" :
                case "1st column" : case "2nd column" : case "3rd column" :
                    //bet on single/multiple numbers
                    return Rule.HasValue(betValue, spin);

                case "Split" : case "1 to 18" : case "19 to 36" :
                case "1st dozen" : case "2nd dozen" : case "3rd dozen" :
                    //bet on range of numbers
                    return Rule.InRange(betValue, spin);

                case "Odd" : case "Even" :

                    int spinValue = Int32.Parse(spin);

                    return spinValue == 0 ? false : (bet == "Odd" ? spinValue % 2 == 1 : spinValue % 2 == 0);

                case "Red" : case "Black" :

                    return bet == "Red" ? Layout.IsRed(spin) : Layout.IsBlack(spin);
            }

            return false;
        }
        /// <summary>
        /// play roulette game
        /// </summary>
        /// <param name="amount">total amount of money placed for bet</param>
        /// <param name="bet">bet name</param>
        /// <param name="betValue">bet value</param>
        public string PlayGame(decimal amount, string bet, string betValue = null) {

            betValue = betValue ?? Rule.GetBetValue(bet, Layout);
            string spin = Wheel.Spin();
            bool result = CheckResult(bet, betValue, spin);

            return string.Join("\n", new string[] {
            
                "Your Bet: " + betValue,
                "Bet Type: " + bet,
                "Odds: " + Odds[bet],
                "Pay Out: " + Payout[bet],
                "Spin Result: " + spin,
                "You " + (result ? "Win" : "Lose") +"!"
            });
        }
    }
}