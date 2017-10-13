using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cribbageHand {
    class CribbageChecker {
        private StandardDeck deck = new StandardDeck();

        /**
         * check game result
         * @param {string[]} [hand] - current hand
         * 
         * @return {string} [game result]
         */
        public string GetResult(string[] hand) {
            List<string[]> fifteens = GetFifteen(hand, new List<string>(), new List<string[]>());
            string[] runs = GetRun(hand);
            List<string[]> pairs = GetPairs(hand);
            int flushes = GetFlush(hand);
            string[] nobs = GetNobs(hand);
            //get scores
            int fifteenScore = fifteens.Count() * 2;
            int pairsScore = pairs.Select(pair => (pair.Length - 1) * pair.Length).Sum();
            int totalScore = fifteenScore + runs.Length + pairsScore + flushes + nobs.Length;
            //display messages
            StringBuilder message = new StringBuilder();
            message.Append(fifteens.Count != 0 ? (fifteens.Count == 1 ? "a Fifteen" : fifteens.Count + " Fifteens") + " - " + fifteenScore + ", " : "");
            message.Append(runs.Length != 0 ? "a Run of " + runs.Length + " - " + runs.Length + ", " : "");
            message.Append(pairs.Count != 0 ? (pairs.Count == 1 ? "a Pair" : pairs.Count + " Pairs") + " - " + pairsScore + ", " : "");
            message.Append(flushes != 0 ? "a Flush of " + flushes + " - " + flushes  + ", " : "");
            message.Append(nobs.Length != 0 ? (nobs.Length == 1 ? "a Nob" : nobs.Length + " Nobs") + " - " + nobs.Length + ", " : "");
            return totalScore + " Points. (" + message.ToString().Substring(0, message.Length - 2) + ")";
        }
        /**
         * check for fifteens in a hand
         * @param {string[]} [hand] - current hand to check
         * @param {List<string>} [cards] - current card combinations
         * @param {List<string[]>} [combinations] - current list of all valid combinations
         * @param {int} [target] - target sum of card values
         * @param {int} [sum] - current sum of card values
         * 
         * @return {List<string[]>} [all fifteens]
         */
        public List<string[]> GetFifteen(string[] hand, List<string> cards, List<string[]> combinations, int target = 15, int sum = 0) { 
            if(sum >= target || hand.Length == 0) {
                if(sum == target) {
                    combinations.Add(cards.ToArray());
                }
                return null;
            }
            for(int i = 0; i < hand.Length; i++) {
                string[] otherCard = hand.TakeWhile((card, index) => index != i).ToArray();
                var curCards = new List<string>(cards.Concat(new string[] { hand[i] }));
                GetFifteen(otherCard, curCards, combinations, target, sum + this.deck.GetValue(hand[i]));
            }
            return combinations;
        }
        /**
         * check for runs in a hand
         * @param {string[]} [hand] - current hand to check
         * 
         * @return {string[]} [all cards in the run]
         */
        public string[] GetRun(string[] hand) {
            var sortedHand = hand.OrderBy(card => this.deck.GetRank(card));
            List<string> runs = new List<string>();
            foreach(string card in sortedHand) {
                if(runs.Count == 0 || this.deck.GetRank(card) - this.deck.GetRank(runs.Last()) == 1) {
                    runs.Add(card);
                } else if(runs.Count < 3) {
                    runs = new List<string>(new string[] { card });
                }
            }
            return runs.Count >= 3 ? runs.ToArray() : new string[0];
        }
        /**
         * count occurrence of each rank
         * @param {string[]} [hand] - current hand to check
         * 
         * @return {Dictionary<int, List<string>>} [occurrence of each rank]
         */
        public Dictionary<int, List<string>> GetOccurrence(string[] hand) { 
            var counter = new Dictionary<int, List<string>>();
            foreach(string card in hand) {
                int rank = this.deck.GetRank(card);
                counter[rank] = counter.ContainsKey(rank) ? counter[rank] : new List<string>();
                counter[rank].Add(card);
            }
            return counter;
        }
        /**
         * check for pairs in a hand
         * @param {string[]} [hand] - current hand to check
         * 
         * @return {List<string[]>} [all pairs]
         */
        public List<string[]> GetPairs(string[] hand) {
            var counter = GetOccurrence(hand);
            var pairs = from pair in counter
                       where pair.Value.Count >= 2
                      select pair.Value.ToArray();
            return pairs.ToList();
        }
        /**
         * check for flush in a hand
         * @param {string[]} [hand] - current hand to check
         * 
         * @return {int} [flush count]
         */
        public int GetFlush(string[] hand) {
            var suits = hand.Select(card => this.deck.GetSuit(card));
            if(new HashSet<char>(suits).Count == 1) {
                return 5;
            }
            return new HashSet<char>(suits.Take(suits.Count() - 1)).Count == 1 ? 4 : 0;
        }
        /**
         * check for all Nobs in a hand
         * @param {string[]} [hand] - current hand to check
         * 
         * @return {string[]} [all Nobs]
         */
        public string[] GetNobs(string[] hand) {
            List<string> nobs = new List<string>();
            for(int i = 0; i < hand.Length - 1; i++) {
                bool isJack = this.deck.GetRank(hand[i]) == 11;
                bool sameSuit = this.deck.GetSuit(hand[i]) == this.deck.GetSuit(hand.Last());
                if(isJack && sameSuit) {
                    nobs.Add(hand[i]);
                }
            }
            return nobs.ToArray();
        }
    }
}
