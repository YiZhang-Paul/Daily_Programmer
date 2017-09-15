/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate deck of cards
		 *
		 * @return {Object} [deck of cards]
		 */
		function getDeck() {
			let deck = new Set();
			for(let i = 1; i <= 13; i++) {
				for(let j = 1; j <= 4; j++) {
					deck.add(i * 10 + j);
				}
			}
			return deck;
		}
		console.log(getDeck());
	});
})();		