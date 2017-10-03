/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * roll a dice
		 *
		 * @return {int} [point of roll]
		 */
		function rollDice() {
			return Math.floor(Math.random() * 6) + 1;
		}
		/**
		 * roll dice for a given amount of time and calculate probability distribution
		 * @param {int} [rolls] - total times of dice roll
		 *
		 * @return {Array} [probability distribution]
		 */
		function findDistribution(rolls) {
			let distribution = new Array(6).fill(0);
			for(let i = 0; i < rolls; i++) {
				distribution[rollDice() - 1]++;
			}
			return distribution.map(chance => Math.round(chance / rolls * 10000) / 100);
		}
		console.log(findDistribution(10));
	});
})();		