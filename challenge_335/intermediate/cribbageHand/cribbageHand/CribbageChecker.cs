using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cribbageHand {
    class CribbageChecker {
        public StandardDeck Deck { get; set; }

        public CribbageChecker() {
            Deck = new StandardDeck();
        }
        /**
         * get game score
         * @param {string[]} [hand] - current hand
         * 
         * @return {int} [game score]
         */
        public int GetScore(string[] hand) {
            int flush = GetFlush(hand);
            List<string> nobs = GetNobs(hand);
            return nobs.Count;
        }
        /**
         * check for flush in a hand
         * @param {string[]} [hand] - current hand to check
         * 
         * @return {int} [flush count]
         */
        public int GetFlush(string[] hand) {
            var suits = hand.Select(card => Deck.GetSuit(card));
            if(new HashSet<char>(suits).Count == 1) {
                return 5;
            }
            return new HashSet<char>(suits.Take(suits.Count() - 1)).Count == 1 ? 4 : 0;
        }
        /**
         * check for all Nobs in a hand
         * @param {string[]} [hand] - current hand to check
         * 
         * @return {List<string>} [all Nobs]
         */
        public List<string> GetNobs(string[] hand) {
            List<string> nobs = new List<string>();
            for(int i = 0; i < hand.Length - 1; i++) {
                bool isJack = Deck.GetRank(hand[i]) == 11;
                bool sameSuit = Deck.GetSuit(hand[i]) == Deck.GetSuit(hand.Last());
                if(isJack && sameSuit) {
                    nobs.Add(hand[i]);
                }
            }
            return nobs;
        }
    }
}
