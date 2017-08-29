/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find lucky numbers
		 * @param {int} [range] - upper limit
		 *
		 * @return {Array} [lucky numbers in range]
		 */
		function getLuckyNumbers(range) {
			let remain = new Array(range).fill(0).map((num, index) => index + 1);
			let pick = 2, step = 0;
			while(pick <= remain.length) {
				let survived = [];
				for(let i = 0; i < remain.length; i++) {
					if((i + 1) % pick) {
						survived.push(remain[i]);
					}
				}
				[remain, pick] = [survived, survived[++step]];
			}
			return remain;
		}
		/**
		 * find nearest lucky numbers
		 * @param {int} [target] - target number
		 *
		 * @return {String} [nearest numbers]
		 */
		function nearestLuckyNumber(target) {
			let range = Math.pow(10, String(target).length);
			let luckyNums = getLuckyNumbers(range);
			let index = luckyNums.findIndex(num => target <= num);
			return luckyNums[index] == target ? 
				`${target} is a Lucky Number.` : `${luckyNums[index - 1]} < ${target} < ${luckyNums[index]}`;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = 103;
		console.log(`%c${input} -> %c${nearestLuckyNumber(input)}`, "color : skyblue;", "color : orange;");
    input = 225;
		console.log(`%c${input} -> %c${nearestLuckyNumber(input)}`, "color : skyblue;", "color : orange;");
    input = 997;
		console.log(`%c${input} -> %c${nearestLuckyNumber(input)}`, "color : skyblue;", "color : orange;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		let time = new Date().getTime();
		input = 100000;
		console.log(getLuckyNumbers(input));
		console.log(`%c${input} Found in: %c${new Date().getTime() - time}ms`, "color : skyblue;", "color : orange;");
		time = new Date().getTime();
		input = 1000000;
		console.log(getLuckyNumbers(input));
		console.log(`%c${input} Found in: %c${new Date().getTime() - time}ms`, "color : skyblue;", "color : orange;");
	});
})();		