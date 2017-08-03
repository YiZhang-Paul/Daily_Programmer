/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * reverse factorial
		 * @param {int} [number] - number to be reversed
		 * @param {int} [curFact] - current factorial
		 *
		 * @return {int} [reversed number]
		 */
		function reverseFactorial(number, curFact = 2) {
			return number == curFact ? curFact + "!" : (number % curFact || number < curFact ? "NONE" : reverseFactorial(number / curFact, curFact + 1));
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = 120;
		console.log(`${input} -> %c${reverseFactorial(input)}`, "color : orange;");
    input = 150;
		console.log(`${input} -> %c${reverseFactorial(input)}`, "color : orange;");
    //challenge input
		console.log(`%cChallenge Input: `, "color : red;");
    input = 3628800;
		console.log(`${input} -> %c${reverseFactorial(input)}`, "color : orange;");
    input = 479001600;
		console.log(`${input} -> %c${reverseFactorial(input)}`, "color : orange;");
    input = 6;
		console.log(`${input} -> %c${reverseFactorial(input)}`, "color : orange;");
    input = 18;
		console.log(`${input} -> %c${reverseFactorial(input)}`, "color : orange;");
	});
})();			