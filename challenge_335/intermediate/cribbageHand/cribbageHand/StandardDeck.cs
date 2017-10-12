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
    }
}
