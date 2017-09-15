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
		function dealCard(cards, players) {
			return {
				deal : new Array(players).fill(0).map(player => drawCard(cards, 2)),
				flop : drawCard(cards, 4).slice(1),
				turn : drawCard(cards, 2).slice(1),
				river : drawCard(cards, 2).slice(1)
			};
		}
		/**
		 * read card
		 * @param {int} [card] - card to be read
		 *
		 * @return {String} [card name]
		 */
		function readCard(card) {
			const numbers = {1 : "Ace", 11 : "Jack", 12 : "Queen", 13 : "King"};
			const shades = {1 : "Clubs", 2 : "Diamonds", 3 : "Spades", 4 : "Hearts"};
			const [number, shade] = [Math.floor(card / 10), card % 10];
			return `${numbers[number] || number} of ${shades[shade]}`;
		}
		/**
		 * display deal for a round
		 * @param {Array} [cards] - all available cards
		 * @param {int} [players] - total number of players
		 *
		 * @return {String} [round information]
		 */
		function displayDeal(cards, players) {
			let info = "How Many Players (2 - 8) ? " + players + "\n\n";
			let round = dealCard(cards, players);
			round.deal.forEach((player, index) => {
				info += `${index ? "CPU " + index : "Your"} Hand: ${player.map(card => readCard(card)).join(", ")}\n`;
			});
			info += "\n";
			Object.keys(round).filter(key => key != "deal").forEach(set => {
				info += `${set[0].toUpperCase() + set.slice(1)}: ${round[set].map(card => readCard(card)).join(", ")}\n`;
			});
			return info;
		}
		/**
		 * start a round
		 * @param {int} [players] - total number of players
		 *
		 * @return {String} [round information]
		 */
		function beginRound() {
			const message = "How Many Players (2 - 8) ? ";
			let players = Number(prompt(message));
			while(isNaN(players) || players < 2 || players > 8) {
				players = Number(prompt(message));
			}
			return displayDeal(getDeck(), players);
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(`%c${beginRound()}`, "color : orange;");
	});
})();		