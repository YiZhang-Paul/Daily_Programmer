/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//translate table
		const table = {
			0 : "zero", 1 : "one", 2 : "two", 3 : "three", 4 : "four", 5 : "five", 
			6 : "six", 7 : "seven", 8 : "eight", 9 : "nine", 10 : "ten", 
			11 : "eleven", 12 : "twelve", 13 : "thirteen", 14 : "fourteen", 
			15 : "fifteen", 16 : "sixteen", 17 : "seventeen", 18 : "eighteen", 
			19 : "nineteen", 20 : "twenty", 30 : "thirty", 40 : "forty", 50 : "fifty", 
			60 : "sixty", 70 : "seventy", 80 : "eighty", 90 : "ninety", 100 : "hundred", 
			1000 : "thousand", 1000000 : "million", 1000000000 : "billion", 
			1000000000000 : "trillion", 1000000000000000 : "quadrillion", "&" : "and"
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
		 * segmentize number into groups of digits
		 * @param {String} [numStr] - stringified number
		 * @param {int} [size] - number of digits in each group
		 *
		 * @return {Array} [number segments]
		 */
		function toSegments(numStr, size = 3) {
			const segments = [];
			for(let i = numStr.length - size ; i >= 1 - size ; i -= size) {
				let segment = numStr.slice(Math.max(i, 0), i + 3);
				segments.unshift((segment.length == size ? "" : "0".repeat(size - segment.length)) + segment);
			}
			return segments;
		}
		/**
		 * read hundreds into separate numbers
		 * @param {String} [hundred] - hundred to be read
		 *
		 * @return {Array} [separated numbers that represent given hundred]
		 */
		function readHundred(hundred) {
			const subNums = [];
			const [lead, trails] = [Number(hundred[0]), Number(hundred.slice(1))];
			if(lead) {
				subNums.push(lead, 100, trails ? "&" : null);
			}
			if(trails) {
				let nums = Number(hundred[1]) <= 1 || hundred[2] == "0" ? 
					[trails] : [Number(hundred[1]) * 10, Number(hundred[2])];
				subNums.push(...nums);	
			}
			return subNums.filter(num => num !== null);
		}
		/**
		 * convert number to word
		 * @param {float} [number] - number to be converted
		 * @param {Object} [table] - translate table
		 *
		 * @return {String} [converted word]
		 */
		function numberToWord(number, table) {
			const numStr = number.toFixed(2).replace(/[.]/, "0");
			const segments = toSegments(numStr).map((segment, index, allSegments) => {
				if(!Number(segment)) {
					return [table[0]];
				}
				segment = [...readHundred(segment)];
				if(allSegments.length - 2 - index > 0) {
					segment.push(Math.pow(1000, allSegments.length - 2 - index));
				}
				return segment.map(num => table[num]).join(" ");
			});
			return capitalize(`${segments.slice(0, -1).join(", ")} dollars and ${segments[segments.length - 1]} cents.`);
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = 400120.0;
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${numberToWord(input, table)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = 333.88;
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${numberToWord(input, table)}`, "color : orange;");
		input = 742388.15;
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${numberToWord(input, table)}`, "color : orange;");
		input = 919616.12;
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${numberToWord(input, table)}`, "color : orange;");
		input = 12.11;
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${numberToWord(input, table)}`, "color : orange;");
		input = 2.0;
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${numberToWord(input, table)}`, "color : orange;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = 999999999999999.9;
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${numberToWord(input, table)}`, "color : orange;");
	});
})();		