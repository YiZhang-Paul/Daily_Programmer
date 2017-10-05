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
				this.totalWin = 0;
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
				let move = 0;
				do {
					move = Number(prompt(message));
				} while (isNaN(move) || move < 1 || move > 5);
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
		/**
		 * play a round of game
		 * @param {Object} [player1] - player 1
		 * @param {Object} [player2] - player 2
		 * @param {Object} [rule] - game rule
		 *
		 * @return {String} [round result]
		 */
		function playRound(player1, player2, rule) {
			const move1 = player1.type == "AI" ? player1.autoMove() : player1.getMove();
			const move2 = player2.type == "AI" ? player2.autoMove() : player2.getMove();
			const roundInfo = `${player1.name} (${player1.type}) Picks: ${move1}\n${player2.name} (${player2.type}) Picks: ${move2}\n\n`;
			if(move1 == move2) {
				return `${roundInfo}Game Tied!\n`;
			}
			const [winMove, loseMove] = rule[move1][move2] ? [move1, move2] : [move2, move1];
			let [winner, loser] = winMove == move1 ? [player1, player2] : [player2, player1];
			winner.totalWin++;
			return `${roundInfo}${winMove} ${rule[winMove][loseMove]} ${loseMove}. ${winner.name} (${winner.type}) Wins!\n`;
		}
		/**
		 * play a given number of games
		 * @param {Array} [player1Info] - player 1 information
		 * @param {Array} [player2Info] - player 2 information
		 * @param {int} [rounds] - total rounds of game
		 *
		 * @return {Array} [game result]
		 */
		function playGame(player1Info, player2Info, rounds = 5) {
			const rule = Object.freeze({
				Rock : {Scissors : "Crushes", Lizard : "Crushes"},
				Paper : {Spock : "Disproves", Rock : "Covers"},
				Scissors : {Paper : "Cuts", Lizard : "Decapitates"},
				Lizard : {Spock : "Poisons", Paper : "Eats"},
				Spock : {Scissors : "Smashes", Rock : "Vaporizes"}
			});
			let [player1, player2] = [new Player(...player1Info), new Player(...player2Info)];
			let result = "";
			for(let i = 0; i < rounds; i++) {
				result += `Round ${i + 1}:\n${playRound(player1, player2, rule)}\n`;
			}
			return [player1, player2, rounds, result];
		}
		console.log(playGame(["John", "AI"], ["Tim", "AI"]));
	});
})();		