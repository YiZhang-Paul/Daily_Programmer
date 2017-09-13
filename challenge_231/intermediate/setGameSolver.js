/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if three cards form a set
		 * @param {Array} [cards] - cards to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isValidSet(cards) {
			return cards[0].split("").every((attribute, index) => {
				const attributes = new Set(cards.map(card => card[index]));
				return attributes.size == 1 || attributes.size == cards.length;
			});
		}
	});
})();		