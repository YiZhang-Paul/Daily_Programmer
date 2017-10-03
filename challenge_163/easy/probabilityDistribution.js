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
			return distribution.map(chance => (chance / rolls * 100).toFixed(2) + "%");
		}
		/**
		 * display probability distribution table
		 * @param {Array} [sizes] - sample sizes for each group
		 * 
		 * @return {String} [probability distribution table]
		 */
		function getDistributionTable(sizes) {
			let table = `# of Rolls ${[1, 2, 3, 4, 5, 6].join("s     ")}s\n${"=".repeat(52)}\n`;
			sizes.forEach(size => {
				const header = size + " ".repeat(10 - String(size).length);
				const content = findDistribution(size).map(chance => " ".repeat(6 - chance.length) + chance).join(" ");
				table += `${header} ${content}\n`;
			});
			return table;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(`%c${getDistributionTable([10, 100, 1000, 10000, 100000, 1000000])}`, "color : orange;");
	});
})();		