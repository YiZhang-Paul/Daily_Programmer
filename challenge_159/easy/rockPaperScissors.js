/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * player class
		 * @param {String} [name] - player name
		 * @param {String} [type] - player type
		 */
		class Player {
			constructor(name = "Computer", type = "AI") {
				this.name = name;
				this.type = type;
				this.moves = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
			}
			/**
			 * auto move
			 *
			 * @return {String} [move]
			 */
			autoMove() {
				return this.moves[Math.floor(Math.random() * this.moves.length)];
			}
			/**
			 * get move from user
			 *
			 * @return {String} [move]
			 */
			getMove() {
				const message = "Please Enter Your Move:\n1 -> Rock\n2 -> Paper\n3 -> Scissors\n4 -> Lizard\n5 -> Spock";
				let move = Number(prompt(message));
				while(isNaN(move) || move < 1 || move > 5) {
					move = Number(prompt(message));
				}
				return this.moves[move - 1];
			}
		}
		/**
		 * calculate percentage
		 * @param {int} [denominator] - denominator
		 * @param {int} [numerator] - numerator
		 *
		 * @return {String} [precentage]
		 */
		function getPercentage(denominator, numerator = 1) {
			return (denominator / numerator * 100).toFixed(2) + "%";
		}
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
		 * @return {Array} [game result]
		 */
		function playRound(player1, player2, gameRule = rule) {
			let roundInfo = `${player1.name} Picks: ${player1.move}.\n${player2.name} Picks: ${player2.move}.\n\n`;
			if(player1.move == player2.move) {
				return `${roundInfo}Game Tied!`;
			}
			const [win, lose] = rule[player1.move][player2.move] ? [player1, player2] : [player2, player1];
			return [win, lose, `${roundInfo}${win.move} ${rule[win.move][lose.move]} ${lose.move}. ${win.name} Wins!`];
		}

	});
})();		