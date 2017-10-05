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
				const suit = "DCHS";
				for(let j = 0; j < suit.length; j++) {
					deck.push(i + suit[j]);
				}
			}
			return deck;
		}
		/**
		 * shuffle a deck of card
		 * @param {Array} [deck] - deck of card to shuffle
		 *
		 * @return {Array} [shuffled card]
		 */
		function shuffleDeck(deck) {
			let shuffled = [];
			while(deck.length) {
				shuffled.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
			}
			return shuffled;
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
		 * read card 
		 * @param {String} [card] - card to read
		 *
		 * @return {String} [card name]
		 */
		function readCard(card) {
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
		 * deal hands of 2s
		 * @param {Array} [deck] - card deck to deal from
		 *
		 * @return {Array} [hands of deal]
		 */
		function deal(deck) {
			return [deck.shift(), deck.shift()];
		}
		/**
		 * hit on a hand
		 * @param {Array} [deck] - card deck to deal from
		 * @param {Array} [hand] - current hands of card
		 *
		 * @return {Array} [current hand with new card]
		 */
		function hit(deck, hand) {
			return [...hand, deck.shift()];
		}
		/**
		 * get total value of hand
		 * @param {Array} [hand] - deal of hand
		 *
		 * @return {int} [total hand value]
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
		 * check if a deal of hand is natural blackjacks
		 * @param {Array} [hand] - deal of hand
		 *
		 * @return {boolean} [test result]
		 */
		function isBlackJack(hand) {
			return hand.length == 2 && getHandValue(hand) == 21;
		}
		
	});
})();		