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
		console.log(shuffleDeck(makeDeck()));
	});
})();		