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
		console.log(makeDeck());
	});
})();		