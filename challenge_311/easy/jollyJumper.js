/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a number sequence is Jolly Jumper 
		 * @param array []
		 *
		 * numList : list of all numbers
		 *
		 * returns String
		 */
		function checkJolly(numList) {
			//generate all expected absolute values
			let jollyValue = new Set(new Array(numList[0] - 1).fill(null).map((num, index) => index + 1));
			for(let i = 1; i < numList.length - 1; i++) {
				let abs = Math.abs(numList[i] - numList[i + 1]);
				if(jollyValue.has(abs)) jollyValue.delete(abs);
				else break;
			}
			return jollyValue.size ? "NOT JOLLY" : "JOLLY";
		} 
		//default and challenge input
		let input = [4, 1, 4, 2, 3];
		console.log(`${input} -> ${checkJolly(input)}`);
		input = [8, 1, 6, -1, 8, 9, 5, 2, 7];
		console.log(`${input} -> ${checkJolly(input)}`);
		input = [5, 1, 4, 2, -1, 6];
		console.log(`${input} -> ${checkJolly(input)}`);
		input = [4, 19, 22, 24, 21];
		console.log(`${input} -> ${checkJolly(input)}`);
		input = [4, 19, 22, 24, 25];
		console.log(`${input} -> ${checkJolly(input)}`);
		input = [4, 2, -1, 0, 2];
		console.log(`${input} -> ${checkJolly(input)}`);
	});
})();	