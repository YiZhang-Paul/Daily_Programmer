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
				let move = NaN;
				do {
					move = Number(prompt(message));
				} while(isNaN(move) || move < 1 || move > 5);
				return this.moves[move - 1];
			}
		}
		/**
		 * calculate precentage
		 * @param {int} [denominator] - denominator
		 * @param {int} [numerator] - numerator
		 *
		 * @return {String} [percentage]
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
			const info = `${player1.name} (${player1.type}) Picks: ${move1}\n${player2.name} (${player2.type}) Picks: ${move2}\n\n`;
			if(move1 == move2) {
				return `${info}Game Tied!\n`;
			}
			const [winMove, loseMove] = rule[move1][move2] ? [move1, move2] : [move2, move1];
			let [winner, loser] = winMove == move1 ? [player1, player2] : [player2, player1];
			winner.totalWin++;
			return `${info}${winMove} ${rule[winMove][loseMove]} ${loseMove}. ${winner.name} (${winner.type}) Wins!\n`;
		}
		/**
		 * display game result
		 * @param {Object} [player1] - player 1
		 * @param {Object} [player2] - player 2
		 * @param {int} [rounds] - total rounds of game
		 * @param {String} [info] - round information
		 *
		 * @return {String} [game result]
		 */
		function displayResult(player1, player2, rounds, info) {
			const [win1, win2, tie] = [player1.totalWin, player2.totalWin, rounds - player1.totalWin - player2.totalWin];
			let result = `${info}End of Game Stats: \n`;
			result += `Total Games played: ${rounds}\n`;
			result += `${player1.name} (${player1.type}) Wins: ${win1} (${getPercentage(win1, rounds)})\n`;
			result += `${player2.name} (${player2.type}) Wins: ${win2} (${getPercentage(win2, rounds)})\n`;
			return result + `Ties: ${tie} (${getPercentage(tie, rounds)})\n\n\n`;
		}
		/**
		 * play a given number of rounds
		 * @param {Array} [info1] - player 1 information
		 * @param {Array} [info2] - player 2 information
		 * @param {int} [rounds] - total rounds of game
		 *
		 * @return {String} [game result]
		 */
		function playGame(info1, info2, rounds = 5) {
			const rule = Object.freeze({
				Rock : {Scissors : "Crushes", Lizard : "Crushes"},
				Paper : {Spock : "Disproves", Rock : "Covers"},
				Scissors : {Paper : "Cuts", Lizard : "Decapitates"},
				Lizard : {Spock : "Poisons", Paper : "Eats"},
				Spock : {Scissors : "Smashes", Rock : "Vaporizes"}
			});
			let [player1, player2] = [new Player(...info1), new Player(...info2)];
			let result = "";
			for(let i = 1; i <= rounds; i++) {
				result += `Round ${i}:\n${playRound(player1, player2, rule)}\n`;
			}
			return displayResult(player1, player2, rounds, result);
		}
		//challenge & bonus input
		console.log(`%cChallenge & Bonus Input: `, "color : red;");
		console.log(`%c${playGame(["John", "AI"], ["Tim", "AI"])}`, "color : orange;");
		console.log(`%c${playGame(["Raynor", "Human"], ["Larson", "AI"])}`, "color : orange;");
	});
})();		