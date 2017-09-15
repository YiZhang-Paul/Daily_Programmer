/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate deck of cards
		 *
		 * @return {Array} [deck of cards]
		 */
		function getDeck() {
			let deck = [];
			for(let i = 1; i <= 13; i++) {
				for(let j = 1; j <= 4; j++) {
					deck.push(i * 10 + j);
				}
			}
			return deck;
		}
		/**
		 * draw given amount of cards from card deck
		 * @param {Array} [cards] - all available cards
		 * @param {int} [total] - total number of cards to be drawn
		 *
		 * @return {Array} [cards drawn]
		 */
		function drawCard(cards, total = 1) {
			let drawn = [];
			for(let i = 0; i < total; i++) {
				drawn.push(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
			}
			return drawn;
		}
		/**
		 * deal cards for a round
		 * @param {Array} [cards] - all available cards
		 * @param {int} [players] - total number of players
		 *
		 * @return {Object} [all cards dealt for the round]
		 */
		function dealCard(cards = getDeck(), players = 8) {
			let deal = [];
			for(let i = 0; i < players; i++) {
				deal.push(drawCard(cards, 2));
			}
			return {
				deal : deal,
				flop : drawCard(cards, 4).slice(1),
				turn : drawCard(cards, 2).slice(1),
				river : drawCard(cards, 2).slice(1)
			};
		}
		console.log(dealCard());
	});
})();		