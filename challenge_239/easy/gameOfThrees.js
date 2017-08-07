/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * play game of three
		 * @param {int} [number] - starting number
		 *
		 * @return {String} [steps to 1]
		 */
		function gameOfThree(number) {
			let steps = "";
			while(number != 1) {
				let change = number % 3 === 0 ? 0 : (number + 1) % 3 === 0 ? 1 : -1;
				steps += number + " " + change + "\n";
				number = (number + change) / 3;
			}
			return steps + "1";
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = 100;
		console.log(`${input} ->`);
		console.log(`%c${gameOfThree(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = 31337357;
		console.log(`${input} ->`);
		console.log(`%c${gameOfThree(input)}`, "color : orange;");
	});
})();		