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
				this.player1 = new Player(deck1);
				this.player2 = new Player(deck2);
				this.cardPool = new CardPool();
				this.state = "battle";
				//this.proceedGame();
				

				this[this.state]();
			}
			/**
			 * proceed a game
			 */
			proceedGame() {
				while(this.state != "finished") {
					this[this.state]();
				}
			} 
			/**
			 * game states
			 */
			//battle state
			battle() {
				let card1 = this.player1.drawCard(1)[0];
				let card2 = this.player2.drawCard(1)[0];
				this.cardPool.battleCard.push(...[card1, card2].sort((a, b) => b - a));
				if(card1 == card2) {
					this.state = "war";
				} else {
					let winner = card1 > card2 ? this.player1 : this.player2;
					winner.retrieveCard(this.state, this.cardPool);
				}
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
			/**
			 * draw card on top of a deck
			 * @param int
			 * 
			 * number : total number of cards to draw
			 *
			 * returns array []
			 */
			drawCard(number) {
				let cards = [];
				for(let i = 0; i < number; i++) {
					cards.push(this.deck.shift());
				}
				return cards;
			} 
			/**
			 * retrieve card after a round
			 * @param String, obj {}
			 *
			 * state : current state of game
			 * pool  : pool of current cards
			 */
			retrieveCard(state, pool) {
				switch(state) {
					case "battle" :
						this.deck = [...this.deck, ...pool.clearPool(pool.battleCard)];
						break;
				}
			} 
		} 
		/**
		 * card pool class
		 */
		class CardPool {
			constructor() {
				this.battleCard = [];
				this.warCard = [];
			}
			/**
			 * clear pool
			 * @param array []
			 *
			 * pool : pool to be cleared
			 *
			 * returns array []
			 */
			clearPool(pool) {
				return pool.splice(0, pool.length);
			} 
		}
		//challenge input
		let deck1 = [5, 1, 13, 10, 11, 3, 2, 10, 4, 12, 5, 11, 10, 5, 7, 6, 6, 11, 9, 6, 3, 13, 6, 1, 8, 1]; 
    let deck2 = [9, 12, 8, 3, 11, 10, 1, 4, 2, 4, 7, 9, 13, 8, 2, 13, 7, 4, 2, 8, 9, 12, 3, 12, 7, 5];   
    let war = new War(deck1, deck2);
	});
})();