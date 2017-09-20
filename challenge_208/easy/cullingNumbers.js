/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * remove duplicate numbers while retaining order
		 * @param {String} [numbers] - numbers to be checked
		 *
		 * @return {Array} [numbers without duplication]
		 */
		function cullingNumber(numbers) {
			let allNum = numbers.match(/\d+/g);
			for(let i = 0; i < allNum.length; i++) {
				for(let j = allNum.length - 1; j >= i + 1; j--) {
					if(allNum[i] == allNum[j]) {
						allNum.splice(j, 1);
					}
				}
			}
			return allNum;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "1 1 2 2 3 3 4 4";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${cullingNumber(input).join(" ")}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "3 1 3 4 4 1 4 5 2 1 4 4 4 4 1 4 3 2 5 5 2 2 2 4 2 4 4 4 4 1"; 
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${cullingNumber(input).join(" ")}`, "color : orange;");
		input = "65 36 23 27 42 43 3 40 3 40 23 32 23 26 23 67 13 99 65 1 3 65 13 27 36 4 65 57 13 7 89 58 23 74 23 50 65 8 99 86 23 78 89 54 89 61 19 85 65 19 31 52 3 95 89 81 13 46 89 59 36 14 42 41 19 81 13 26 36 18 65 46 99 75 89 21 19 67 65 16 31 8 89 63 42 47 13 31 23 10 42 63 42 1 13 51 65 31 23 28"; 
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${cullingNumber(input).join(" ")}`, "color : orange;");
	});
})();			