/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * round number to given decimal places
		 * @param {float} [number] - number to be rounded
		 * @param {int} [decimal] - round precision
		 * 
		 * @return {float} [rounded number]
		 */
		function toDecimal(number, decimal) {
			let precision = Math.pow(10, decimal);
			return Math.round(number * precision) / precision;
		}
		/**
		 * calculate standard deviation
		 * @param {String} [numbers] - numbers used as sample
		 *
		 * @return {float} [standard deviation]
		 */
		function getDeviation(numbers) {
			const allNums = numbers.match(/\d+/g).map(Number);
			const mean = toDecimal(allNums.reduce((acc, val) => acc + val) / allNums.length, 4);
			const totalDifference = allNums.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
			const variance = totalDifference / allNums.length;
			return toDecimal(Math.sqrt(variance), 4);
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "5 6 11 13 19 20 25 26 28 37";
		console.log(`%c${input} ->`, "color : skyblue");
		console.log(`%c${getDeviation(input)}`, "color : orange;");
		input = "37 81 86 91 97 108 109 112 112 114 115 117 121 123 141";
		console.log(`%c${input} ->`, "color : skyblue");
		console.log(`%c${getDeviation(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "266 344 375 399 409 433 436 440 449 476 502 504 530 584 587";
		console.log(`%c${input} ->`, "color : skyblue");
		console.log(`%c${getDeviation(input)}`, "color : orange;");
    input = "809 816 833 849 851 961 976 1009 1069 1125 1161 1172 1178 1187 1208 1215 1229 1241 1260 1373";
		console.log(`%c${input} ->`, "color : skyblue");
		console.log(`%c${getDeviation(input)}`, "color : orange;");
	});
})();		