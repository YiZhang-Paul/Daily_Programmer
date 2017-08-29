/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find lucky numbers
		 * @param {int} [limit] - upper limit
		 *
		 * @return {Array} [lucky numbers in range]
		 */
		function getLuckyNumbers(limit) {
			let allNums = new Array(limit).fill(0).map((num, index) => index + 1);
			let curPick = 2;
			while(curPick <= allNums.length) {
				let newNums = [], nextPick = allNums[curPick];
				for(let i = 0; i < allNums.length; i++) {
					if((i + 1) % curPick) {
						newNums.push(allNums[i]);
					}
				}
				[allNums, curPick] = [newNums, nextPick];
			}
			return allNums;
		}
		console.log(getLuckyNumbers(25));
		let time = new Date().getTime();
		console.log(getLuckyNumbers(10000000));
		console.log(`${new Date().getTime() - time}ms`);
		time = new Date().getTime();
		console.log(getLuckyNumbers(100000));
		console.log(`${new Date().getTime() - time}ms`);
	});
})();		