/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create a deck of card
		 *
		 * @return {Array} [deck of card]
		 */
		function makeDeck() {
			let deck = [];
			for(let i = 1; i <= 13; i++) {
				for(let suit of "DCHS") {
					deck.push(i + suit);
				}
			}
			return deck;
		}
		/**
		 * shuffle a deck of card
		 * @param {Array} [deck] - deck of card to shuffle
		 *
		 * @return {Array} [shuffled cards]
		 */
		function shuffleDeck(deck) {
			let shuffled = [];
			while(deck.length) {
				shuffled.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
			}
			return shuffled;
		}
		/**
		 * get card name 
		 * @param {String} [card] - card to read
		 *
		 * @return {String} [card name]
		 */
		function getCardName(card) {
			const suits = Object.freeze({
				D : "Diamonds", C : "Clubs", H : "Hearts", S : "Spades"	
			});
			const numbers = Object.freeze({
				1 : "Ace", 2 : "Two", 3 : "Three", 4 : "Four", 5 : "Five", 6 : "Six", 7 : "Seven", 
				8 : "Eight", 9 : "Nine", 10 : "Ten", 11 : "Jack", 12 : "Queen", 13 : "King"
			});
			const [number, suit] = card.match(/\d+|\D+/g);
			return `${numbers[number]} of ${suits[suit]}`;
		}
		/**
		 * get card value
		 * @param {String} [card] - card to check
		 *
		 * @return {int} [card value]
		 */
		function getCardValue(card) {
			const number = Number(card.match(/\d+/)[0]);
			return number == 1 ? 11 : Math.min(number, 10);
		}
		/**
		 * get total value of hand
		 * @param {Array} [hand] - deal of hand
		 *
		 * @return {int} [total value of hand]
		 */
		function getHandValue(hand) {
			let total = 0, hasAce = false;
			hand.forEach(card => {
				const value = getCardValue(card);
				total += value == 11 && hasAce ? 1 : value;
				hasAce = value == 11 ? true : hasAce;
			});
			return total;
		}
		/**
		 * deal hands of 2s
		 * @param {Array} [deck] - card deck to deal from
		 *
		 * @return {Array} [hands of deal]
		 */
		function dealCards(deck) {
			return [deck.shift(), deck.shift()];
		}
		/**
		 * hit on a hand
		 * @param {Array} [deck] - card deck to deal from
		 * @param {Array} [hand] - current hand of cards
		 *
		 * @return {Array} [current hand with new card]
		 */
		function hitCard(deck, hand) {
			return [...hand, deck.shift()];
		}
		/**
		 * greedly hit on cards until reach/exceed 21 points
		 * @param {Array} [deck] - card deck to deal from
		 *
		 * @return {Array} [current hand]
		 */
		function greedyHit(deck) {
			let hand = dealCards(deck);
			while(getHandValue(hand) < 21 && deck.length) {
				hand = hitCard(deck, hand);
			}
			return hand;
		}
		/**
		 * check if a deal of hand is natural blackjack
		 * @param {Array} [hand] - current hand of cards
		 *
		 * @return {boolean} [test result]
		 */
		function isNaturalBlackjack(hand) {
			return hand.length == 2 && getHandValue(hand) == 21;
		}
		/**
		 * find all hands dealt and natural blackjacks if any
		 * @param {int} [total] - total number of card decks
		 *
		 * @return {Array} [natural blackjacks and other hands]
		 */
		function getAllHands(total) {
			let blackjacks = [], otherHands = [];
			for(let i = 0; i < total; i++) {
				let deck = shuffleDeck(makeDeck());
				while(deck.length > 1) {
					let hand = greedyHit(deck);
					(isNaturalBlackjack(hand) ? blackjacks : otherHands).push(hand);
				}
			}
			return [blackjacks, otherHands];
		}
		/**
		 * find likelihood of natural blackjacks and display result
		 * @param {int} [total] - total number of card decks
		 *
		 * @return {String} [possibility of natural blackjacks]
		 */
		function getResult(total = 1) {
			let [blackjacks, otherHands] = getAllHands(total);
			let result = `After ${otherHands.length + blackjacks.length} Hands There Was ${blackjacks.length} Blackjacks at ${(blackjacks.length / (otherHands.length + blackjacks.length) * 100).toFixed(2)}%\n`;
			blackjacks.forEach((blackjack, index) => {
				result += `Natural Blackjack No.${index + 1}: ${blackjack.map(card => getCardName(card)).join(" & ")}\n`;
			});
			return result;
		}
		console.log(shuffleDeck(makeDeck()));
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = 1;
		console.log(`%c${input} Decks of Cards -> `, "color : skyblue;");
		console.log(`%c${getResult(input)}`, "color : orange;");
		input = 2;
		console.log(`%c${input} Decks of Cards -> `, "color : skyblue;");
		console.log(`%c${getResult(input)}`, "color : orange;");
		input = 5;
		console.log(`%c${input} Decks of Cards -> `, "color : skyblue;");
		console.log(`%c${getResult(input)}`, "color : orange;");
		input = 10;
		console.log(`%c${input} Decks of Cards -> `, "color : skyblue;");
		console.log(`%c${getResult(input)}`, "color : orange;");
		input = 20;
		console.log(`%c${input} Decks of Cards -> `, "color : skyblue;");
		console.log(`%c${getResult(input)}`, "color : orange;");
	});
})();		