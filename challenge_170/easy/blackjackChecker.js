/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * retrieve card value
		 * @param {String} [card] - card name
		 *
		 * @return {int} [card value]
		 */
		function getCardValue(card) {
			const table = Object.freeze({
				ace : 11, two : 2, three : 3, four : 4, five : 5, six : 6, seven : 7,
				eight : 8, nine : 9, ten : 10, jack : 10, queen : 10, king : 10
			});
			return table[card.match(/\w+/)[0].toLowerCase()];
		}
		/**
		 * calculate total value of hand
		 * @param {Array} [cards] - cards in hand
		 *
		 * @return {int} [total value of hand]
		 */
		function getHandValue(cards) {
			let total = 0, aces = 0;
			cards.split(",").forEach(card => {
				const value = getCardValue(card);
				total += value;
				aces += value == 11 ? 1 : 0;
			});
			while(total > 21 && aces) {
				total -= 10;
				aces--;
			}
			return total;
		}
		/**
		 * check if a player has win hand
		 * @param {Array} [cards] - cards in hand
		 *
		 * @return {boolean} [test result]
		 */
		function isWinHand(cards) {
			return cards.split(",").length == 5 && getHandValue(cards) <= 21;
		}
		/**
		 * check if a player has lost hand
		 * @param {Array} [cards] - cards in hand
		 *
		 * @return {boolean} [test result]
		 */
		function isLoseHand(cards) {
			return getHandValue(cards) > 21;
		}
		/**
		 * pick highest value of hand
		 * @param {Array} [players] - remaining players in the game
		 *
		 * @return {String} [only player with the highest value of hand]
		 */
		function getMaxHand(players) {
			let tied = false, winner = null, maxHand = 0;
			players.forEach(player => {
				const curHand = getHandValue(player[1]);
				if(curHand >= maxHand) {
					tied = curHand == maxHand;
					[winner, maxHand] = [player[0], curHand];
				}
			});
			return !tied ? winner.trim() : null;
		}
		/**
		 * determine game outcome
		 * @param {String} [players] - players in the game
		 *
		 * @return {String} [game result]
		 */
		function getResult(players) {
			let eligible = players.split("\n").map(player => player.split(":")).filter(player => !isLoseHand(player[1]));
			let winHands = eligible.filter(player => isWinHand(player[1]));
			if(!eligible.length || winHands.length) {
				return winHands.length == 1 ? `${winHands[0][0].trim()} Has Won With a 5-card Trick!` : "Game Tied!";
			}
			const winner = getMaxHand(eligible);
			return winner ? `${winner} Has Won!` : "Game Tied!";
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `Alice: Ace of Diamonds, Ten of Clubs
								 Bob: Three of Hearts, Six of Spades, Seven of Spades
								 Chris: Ten of Hearts, Three of Diamonds, Jack of Clubs`;
		console.log(`%c${getResult(input)}`, "color : orange;");
	 	input = `Alice: Ace of Diamonds, Ten of Clubs
						 Bob: Three of Hearts, Six of Spades, Seven of Spades
						 Chris: Ten of Hearts, Three of Diamonds, Jack of Clubs
						 David: Two of Hearts, Three of Clubs, Three of Hearts, Five of Hearts, Six of Hearts`;
		console.log(`%c${getResult(input)}`, "color : orange;");
		input = `Alice: Ace of Diamonds, Ace of Spades, Ace of Clubs, Ace of Hearts
						 Bob: Three of Hearts, Six of Spades, Seven of Spades, Ten of Diamonds
						 Chris: Ten of Hearts, Three of Diamonds`;
		console.log(`%c${getResult(input)}`, "color : orange;");
		input = `Alice: Nine of Diamonds, Five of Clubs, Jack of Spades
						 Bob: King of Diamonds, Six of Spades, Seven of Spades
						 Chris: Ten of Hearts, Three of Diamonds, Jack of Clubs`;
		console.log(`%c${getResult(input)}`, "color : orange;");
		input = `Alice: Two of Clubs, Three of Clubs, Two of Diamonds, Six of Diamonds, Four of Diamonds
						 Bob: Four of Spades, Three of Hearts, Two of Spades, Six of Spades, Four of Hearts
						 Chris: King of Spades, Queen of Hearts, Ace of Diamonds`;
		console.log(`%c${getResult(input)}`, "color : orange;");
		input = `Alice: Ten of Hearts, Jack of Spades
						 Bob: King of Diamonds, Five of Hearts, Five of Clubs
						 Chris: Queen of Spades, King of Hearts`;
		console.log(`%c${getResult(input)}`, "color : orange;");
	});
})();