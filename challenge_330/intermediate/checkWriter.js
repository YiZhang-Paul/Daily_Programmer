/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//translate table
		const table = {
			1 : "one", 2 : "two", 3 : "three", 4 : "four", 5 : "five",
			6 : "six", 7 : "seven", 8 : "eight", 9 : "nine", 10 : "ten",
			11 : "eleven", 12 : "twelve", 13 : "thirteen", 14 : "fourteen",
			15 : "fifteen", 16 : "sixteen", 17 : "seventeen", 18 : "eighteen",
			19 : "nineteen", 20 : "twenty", 30 : "thirty", 40 : "fourty", 50 : "fifty",
			60 : "sixty", 70 : "seventy", 80 : "eighty", 90 : "ninety", 100 : "hundred", 
			1000 : "thousand", 1000000 : "million", 1000000000 : "billion", "&" : "and"
		};
		/**
		 * convert number to word
		 * @param {float} [number] - number to be convereted
		 * @param {Object} [table] - translate table
		 *
		 * @return {String} [converted word]
		 */
		function numberToWord(number, table) {
			const numStr = number.toFixed(2);
			let cent = numStr.slice(-2);
			let dollar = numStr.slice(0, -3);
			let segments = [];
			for(let i = dollar.length - 3; i >= -2; i -= 3) {
				let segment = dollar.slice(Math.max(i, 0), i + 3);
				segments.unshift((segment.length == 3 ? "" : "0".repeat(3 - segment.length)) + segment);
			}
			for(let i = segments.length - 1; i >= 0; i--) {
				let subSegment = [];
				if(segments[i][0] != "0") {
					let leadDigit = Number(segments[i][0]);
					subSegment.push(leadDigit, leadDigit * 100);
					if(segments[i].slice(1) != "00") {
						subSegment.push("&");
					}
				}
				if(Number(segments[i][1]) > 1) {
					subSegment.push(Number(segments[i][1]) * 10, Number(segments[i][2]));
				} else {
					subSegment.push(Number(segments[i].slice(1)));
				}
				segments[i] = [...subSegment, segments.length - 1 - i ? Math.pow(1000, segments.length - 1 - i) : 0];
			}
			console.log(segments);
			console.log(segments.map(segment => segment.map(num => table[num]).join(" ")));
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = 1400112.0;
		console.log(numberToWord(input, table));
	});
})();		