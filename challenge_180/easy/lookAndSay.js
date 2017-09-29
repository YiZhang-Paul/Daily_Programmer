/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**	
		 * describe a number
		 * @param {String} [number] - number to describe
		 *
		 * @return {String} [number description]
		 */
		function describeNumber(number) {
			let description = "";
			let [curNum, counter] = [number[0], 1];
			for(let i = 1; i < number.length; i++) {
				if(number[i] != curNum) {
					description += counter + curNum;
					[curNum, counter] = [number[i], 1];
					continue;
				}
				counter++;
			}
			return description + counter + curNum;
		}
		/**
		 * generate Nth Look and Say number
		 * @param {int} [place] - Nth Look and Say number to generate
		 * @param {int} [seed] - seed number to start with
		 * 
		 * @return {String} [Nth Look and Say number]
		 */
		function getLookAndSayNumber(place, seed = 1) {
			let number = String(seed);
			for(let i = 0; i < place - 1; i++) {
				number = describeNumber(number);
			}
			return number;
		}
		//challenge & bonus input
		console.log(`%cChallenge & Bonus Input: `, "color : red;");
		for(let i = 1; i <= 10; i++) {
			console.log(`%cSeed: ${i} -> %cNumber: ${getLookAndSayNumber(6, i)}`, "color : skyblue;", "color : orange;");
		}
	});
})();		