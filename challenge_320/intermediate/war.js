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
				this.battleCard = [];
				this.warCard = [];
				this.state = "battle";
				this.proceedGame();
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
			/**
			 * game states
			 */
			//battle state
			battle() {
				let faceUp1 = this.player1.drawCard(1)[0];
				let faceUp2 = this.player2.drawCard(1)[0];
				this.battleCard = [faceUp1, faceUp2].sort((a, b) => b - a);
				if(faceUp1 == faceUp2) {
					this.state = "war";
				} else {
					let winner = faceUp1 > faceUp2 ? this.player1 : this.player2;
					winner.retrieveCard(this);
					this.checkGameEnd();
				}
			} 
			//war state
			war() {
				this.checkGameEnd();
				if(this.state != "finished") {
					let totalFaceDown = Math.min(this.player1.deck.length, this.player2.deck.length, 4) - 1;
					let faceDowns1 = this.player1.drawCard(totalFaceDown);
					let faceDowns2 = this.player2.drawCard(totalFaceDown);
					let faceUp1 = this.player1.drawCard(1)[0];
					let faceUp2 = this.player2.drawCard(1)[0];
					this.warCard.push([[...faceDowns1, faceUp1], [...faceDowns2, faceUp2]]);
					if(faceUp1 == faceUp2) {
						this.war();
					} else {
						let winner = faceUp1 > faceUp2 ? this.player1 : this.player2;
						winner.retrieveCard(this);
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
			 * @param obj {}
			 *
			 * game  : current game object
			 */
			retrieveCard(game) {
				if(game.state == "war") {
					for(let i = game.warCard.length - 1; i >= 0; i--) {
						let warCards = [game.clearPool(game.warCard[i])][0];
						this.deck = [...this.deck, ...(this.number == 1 ? [...warCards[0], ...warCards[1]] : [...warCards[1], ...warCards[0]])];
					}
					game.warCard = [];
				}
				this.deck = [...this.deck, ...game.clearPool(game.battleCard)];
			} 
		} 
		/** 
		 * challenge input
		 */
		//game 1 
		let deck1 = [5, 1, 13, 10, 11, 3, 2, 10, 4, 12, 5, 11, 10, 5, 7, 6, 6, 11, 9, 6, 3, 13, 6, 1, 8, 1]; 
    let deck2 = [9, 12, 8, 3, 11, 10, 1, 4, 2, 4, 7, 9, 13, 8, 2, 13, 7, 4, 2, 8, 9, 12, 3, 12, 7, 5];   
    let war = new War(deck1, deck2);
    //game 2
		deck1 = [3, 11, 6, 12, 2, 13, 5, 7, 10, 3, 10, 4, 12, 11, 1, 13, 12, 2, 1, 7, 10, 6, 12, 5, 8, 1]; 
		deck2 = [9, 10, 7, 9, 5, 2, 6, 1, 11, 11, 7, 9, 3, 4, 8, 3, 4, 8, 8, 4, 6, 9, 13, 2, 13, 5]; 
		war = new War(deck1, deck2);
		//game 3
		deck1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 
		deck2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 
   	war = new War(deck1, deck2);
	});
})();