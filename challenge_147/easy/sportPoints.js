/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a score is a valid score
		 * @param {int} [score] - score to check
		 *
		 * @return {String} [test result]
		 */
		function isValidScore(score) {
			if(score % 3 === 0 || score < 6) {
				return score % 3 === 0 ? "Valid Score." : "Invalid Score.";
			}
			return new Set([7, 8]).has(score % 3 + 6) ? "Valid Score." : "Invalid Score.";
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(`%c35 -> %c${isValidScore(35)}`, "color : skyblue;", "color : orange;");
		console.log(`%c2 -> %c${isValidScore(2)}`, "color : skyblue;", "color : orange;");
	});
})();		