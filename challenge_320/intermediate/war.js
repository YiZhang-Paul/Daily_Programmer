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
				this.player1 = new Player(deck1, 1);
				this.player2 = new Player(deck2, 2);
				console.log("initial");
				console.log(this.player1.deck);
				console.log(this.player2.deck);
				this.cardPool = new CardPool();
				this.state = "battle";
				this.proceedGame();
			}
			/**
			 * proceed a game
			 */
			proceedGame() {
				let round = 1;
				while(this.state != "finished") {
					this[this.state]();
					console.log("round " + round);
					console.log(this.player1.deck);
					console.log(this.player2.deck);
					round++;
				}
			} 
			/**
			 * check game end and determine winner
			 */
			checkGameEnd() {
				if(!this.player1.deck.length || !this.player2.deck.length) {
					this.state = "finished";
					let winner;
					if(this.player1.deck.length) {
						winner = 1;
					} else if(this.player2.deck.length) {
						winner = 2;
					} else {
						winner = 0;
					}
					console.log(winner); 
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
					this.checkGameEnd();
				}
			} 
			//war state
			war() {
				this.checkGameEnd();
				if(this.state != "finished") {
					let warDecks = Math.min(this.player1.deck.length, this.player2.deck.length, 4);
					let faceDowns1 = this.player1.drawCard(warDecks - 1);
					let faceDowns2 = this.player2.drawCard(warDecks - 1);
					let faceUp1 = this.player1.drawCard(1)[0];
					let faceUp2 = this.player2.drawCard(1)[0];
					if(faceUp1 == faceUp2) {
						this.cardPool.battleCard.push(faceUp1, faceUp2);
						this.cardPool.warCard.push([faceDowns1, faceDowns2]);
					} else {
						this.cardPool.warCard.push([[...faceDowns1, faceUp1], [...faceDowns2, faceUp2]]);
					}
					if(faceUp1 == faceUp2) {
						this.war();
					} else {
						let winner = faceUp1 > faceUp2 ? this.player1 : this.player2;
						winner.retrieveCard(this.state, this.cardPool);
						this.state = "battle";
						this.checkGameEnd();
					}
				}
			}
		} 
		/**
		 * player class
		 * @param array [], int
		 *
		 * deck   : holding deck
		 * number : player number
		 */
		class Player {
			constructor(deck, number) {
				this.deck = deck;
				this.number = number;
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
				if(state == "battle") {
					this.deck = [...this.deck, ...pool.clearPool(pool.battleCard)];
				} else {
					for(let i = 0; i < pool.warCard.length; i++) {
						let warCards = [pool.clearPool(pool.warCard[i])][0];
						warCards = this.number == 1 ? [...warCards[0], ...warCards[1]] : [...warCards[1], ...warCards[0]];
						this.deck = [...this.deck, ...warCards];
					}
					this.deck = [...this.deck, ...pool.clearPool(pool.battleCard)];
					pool.warCard = [];
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