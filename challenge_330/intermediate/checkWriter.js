/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//translate table
		const table = {
			0 : "zero", 1 : "one", 2 : "two", 3 : "three", 4 : "four", 5 : "five",
			6 : "six", 7 : "seven", 8 : "eight", 9 : "nine", 10 : "ten",
			11 : "eleven", 12 : "twelve", 13 : "thirteen", 14 : "fourteen",
			15 : "fifteen", 16 : "sixteen", 17 : "seventeen", 18 : "eighteen",
			19 : "nineteen", 20 : "twenty", 30 : "thirty", 40 : "fourty", 50 : "fifty",
			60 : "sixty", 70 : "seventy", 80 : "eighty", 90 : "ninety", 100 : "hundred", 
			1000 : "thousand", 1000000 : "million", 1000000000 : "billion", "&" : "and"
		};
		/**
		 * capitalize sentence or word
		 * @param {String} [text] - text to be capitalized
		 *
		 * @return {String} [capitalized text]
		 */
		function capitalize(text) {
			return text[0].toUpperCase() + text.slice(1);
		}
		/**
		 * convert number to word
		 * @param {float} [number] - number to be convereted
		 * @param {Object} [table] - translate table
		 *
		 * @return {String} [converted word]
		 */
		function numberToWord(number, table) {
			const numStr = number.toFixed(2).replace(/[.]/, "0");
			let segments = [];
			for(let i = numStr.length - 3; i >= -2; i -= 3) {
				let segment = numStr.slice(Math.max(i, 0), i + 3);
				segments.unshift((segment.length == 3 ? "" : "0".repeat(3 - segment.length)) + segment);
			}
			for(let i = segments.length - 1; i >= 0; i--) {
				let subSegment = [];
				let [leadDigit, trailDigits] = [Number(segments[i][0]), Number(segments[i].slice(1))];
				if(leadDigit) {
					subSegment.push(leadDigit, 100);
					if(trailDigits) {
						subSegment.push("&");
					}
				}
				if(trailDigits) {
					if(segments[i][1] == "0" || segments[i][1] == "1" || segments[i][2] == "0") {
						subSegment.push(trailDigits);
					} else {
						subSegment.push(Number(segments[i][1]) * 10, Number(segments[i][2]));
					}
				}
				subSegment = subSegment.length ? subSegment : [0];
				segments[i] = [...subSegment];
				if(segments.length - 2 - i > 0) {
					segments[i].push(Math.pow(1000, segments.length - 2 - i));
				}
			}
			let words = segments.map(segment => segment.map(num => table[num]).join(" "));
			return capitalize(`${words.slice(0, -1).join(", ")} dollars and ${words[words.length - 1]} cents.`);
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = 400120.0;
		console.log(numberToWord(input, table));
	});
})();		