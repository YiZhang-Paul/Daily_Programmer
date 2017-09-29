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

		console.log(describeNumber("111221"));
	});
})();		