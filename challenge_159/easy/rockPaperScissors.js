/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//game rule
		const rule = Object.freeze({
			Rock : {Scissors : "Crushes", Lizard : "Crushes"},
			Paper : {Spock : "Disproves", Rock : "Covers"},
			Scissors : {Paper : "Cuts", Lizard : "Decapitates"},
			Lizard : {Spock : "Poisons", Paper : "Eats"},
			Spock : {Scissors : "Smashes", Rock : "Vaporizes"}
		});
		/**
		 * play a round of game
		 * @param {Object} [player1] - player 1
		 * @param {Object} [player2] - player 2
		 * @param {Object} [gameRule] - game rule
		 *
		 * @return {String} [game result]
		 */
		function playRound(player1, player2, gameRule = rule) {
			let roundInfo = `${player1.name} Picks: ${player1.move}.\n${player2.name} Picks: ${player2.move}.\n\n`;
			if(player1.move == player2.move) {
				return `${roundInfo}Game Tied!`;
			}
			const [win, lose] = rule[player1.move][player2.move] ? [player1, player2] : [player2, player1];
			return `${roundInfo}${win.move} ${rule[win.move][lose.move]} ${lose.move}. ${win.name} Wins!`;
		}
		console.log(playRound({name : "Player", move : "Rock"}, {name : "Computer", move : "Rock"}));
	});
})();		