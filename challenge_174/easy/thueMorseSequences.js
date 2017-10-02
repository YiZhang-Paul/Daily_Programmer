/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate Thus-Morse sequence
		 * @param {int} [order] - Nth order of sequence to be generated
		 *
		 * @return {Array} [Nth order of sequence]
		 */
		function getMorseSequence(order = 0) {
			if(order <= 1) {
				return order ? "01" : "0";
			}
			let sequence = "01";
			for(let i = 2; i <= order; i++) {
				const halfLen = sequence.length * 0.5;
				sequence += sequence.slice(halfLen) + sequence.slice(0, halfLen);
			}
			return [sequence];
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		for(let i = 0; i <= 6; i++) {
			console.log(`%c${i}th: ${getMorseSequence(i)}`, "color : orange;");
		}
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		console.log(getMorseSequence(25));
	});
})();		