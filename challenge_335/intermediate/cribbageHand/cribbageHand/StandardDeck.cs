using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cribbageHand {
    class StandardDeck {
        private const string RANK = "JQK";
        private const string SUIT = "HCSD";
        /**
         * generate a standard deck of cards
         * 
         * @return {string[]} [standard deck]
         */
        public string[] MakeDeck() {
            List<string> deck = new List<string>();
            for(int i = 1; i <= 13; i++) {
                for(int j = 0; j < 4; j++) {
                    string rank = i.ToString();
                    if(i == 1 || i > 10) {
                        rank = i == 1 ? "A" : RANK[i % 10 - 1].ToString();
                    }
                    deck.Add(rank + SUIT[j]);
                }
            }
            return deck.ToArray();
        }
        /**
         * get deck value
         * @param {string} [card] - card to read
         * 
         * @return {int} [card value]
         */
        public int GetValue(string card) {
            return Math.Min(GetRank(card), 10);
        }
        /**
         * get deck rank
         * @param {string} [card] - card to read
         * 
         * @return {int} [card rank]
         */
        public int GetRank(string card) {
            if(Char.IsLetter(card[0])) {
                switch(card[0]) {
                    case 'A' : return 1;
                    case 'J' : return 11;
                    case 'Q' : return 12;
                    case 'K' : return 13;
                }
            }
            return Int32.Parse(card.Substring(0, card.Length - 1));
        }
        /**
         * get deck suit
         * @param {string} [card] - card to read
         * 
         * @return {char} [card suit]
         */
        public char GetSuit(string card) {
            return card.Last();
        }
    }
}
