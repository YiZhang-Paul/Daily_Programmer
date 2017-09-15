/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * add fractions together
		 * @param {String} [fractions] - fractions to add
		 *
		 * @return {String} [resulting fraction]
		 */
		function addFraction(fractions) {
			let allFraction = fractions.split("\n").map(fraction => fraction.match(/\d+/g).map(Number));
			const denominator = allFraction.reduce((acc, val) => acc * val[1], 1);
			const numerator = allFraction.reduce((acc, val) => acc + denominator / val[1] * val[0], 0);
			return numerator + "/" + denominator;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `1/6
							   3/10`;
		console.log(addFraction(input));							   
	});
})();		