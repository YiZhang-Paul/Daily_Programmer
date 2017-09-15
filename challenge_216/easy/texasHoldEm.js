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
		 * deal cards for a round
		 * @param {Array} [cards] - all available cards
		 * @param {int} [players] - total number of players
		 *
		 * @return {Object} [all cards dealt for the round]
		 */
		function dealCard(cards = getDeck(), players = 8) {
			let deal = {};
			for(let i = 0; i < players; i++) {
				let curDeal = [];
				for(let j = 0; j < 2; j++) {
					curDeal.push(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
				}
				deal.players = deal.players ? [...deal.players, curDeal] : [curDeal];
			}
			return deal;
		}
		console.log(dealCard());
	});
})();		