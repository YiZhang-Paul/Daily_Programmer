/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * war game class
		 * @param array [], array []
		 *
		 * deck1 : deck for player 1
		 * deck2 : deck for player 2
		 */	
		class War {
			constructor(deck1, deck2) {
				this.player1 = null;
				this.player2 = null;
				this.cardPool = null;
			}
		} 
		/**
		 * player class
		 * @param array []
		 *
		 * deck : holding deck
		 */
		class Player {
			constructor(deck) {
				this.deck = deck;
			}
		} 
		/**
		 * card pool class
		 */
		class CardPool {
			constructor() {
				this.battleCard = [];
				this.tiedCard = [];
				this.warCard = [];
			}
		}  
	});
})();