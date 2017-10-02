/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * retrieve card value
		 * @param {String} [card] [card name]
		 *
		 * @return {int} [card value]
		 */
		function getCardValue(card) {
			const table = {
				ace : 1, two : 2, three : 3, four : 4, five : 5, six : 6, seven : 7,
				eight : 8, nine : 9, ten : 10, jack : 10, queen : 10, king : 10
			};
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
				const cardValue = getCardValue(card);
				total += cardValue;
				aces += cardValue == 1 ? 1 : 0;
			});
			while(aces && total + 10 <= 21) {
				total += 10;
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
		 * check if a player has lose hand
		 * @param {Array} [cards] - cards in hand
		 *
		 * @return {boolean} [test result]
		 */
		function isLoseHand(cards) {
			return cards.split(",").length == 5 && getCardValue(cards) > 21;
		}
		console.log(isWinHand("Two of Hearts, Three of Clubs, Three of Hearts, Five of Hearts, Six of Hearts"));
		console.log(getHandValue("Two of Hearts, Three of Clubs, Three of Hearts, Five of Hearts, Six of Hearts"));
	});
})();		