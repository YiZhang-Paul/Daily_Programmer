/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * record original index for each number in the list
		 * @param {Array} [list] - number list
		 *
		 * @return {Object} [number indexes]
		 */
		function recordIndex(list) {
			let record = new Map();
			list.forEach((number, index) => {
				record.set(number, index);
			});
			return record;
		}
		/**
		 * check if two numbers are consecutive numbers
		 * @param {int} [number1] - number 1
		 * @param {int} [number2] - number 2
		 * @param {int} [gap] - gap between consecutive numbers
		 *
		 * @return {boolean} [test result]
		 */
		function isConsecutive(number1, number2, gap) {
			return number2 - number1 === gap;
		}
		/**
		 * calculate consecutive distance rating for a single list
		 * @param {Array} [list] - number list
		 * @param {int} [gap] - gap between consecutive numbers
		 *
		 * @return {int} [distance rating]
		 */
		function getRating(list, gap) {
			let indexes = recordIndex(list);
			let rating = 0, sorted = list.slice().sort((a, b) => a - b);
			for(let i = 0; i < sorted.length - 1; i++) {
				for(let j = 0; j < gap; j++) {
					const [current, target] = [sorted[i], sorted[i + 1 + j]];
					if(target !== undefined && isConsecutive(current, target, gap)) {
						rating += Math.abs(indexes.get(current) - indexes.get(target));
						break;
					}
				}
			}
			return rating;
		}
		/**
		 * calculate consecutive distance rating for all lists
		 * @param {String} [numbers] - numbers string
		 * @param {int} [gap] - gap between consecutive numbers
		 *
		 * @return {String} [all distance ratings]
		 */
		function getAllRating(numbers, gap = 1) {
			let lists = numbers.split("\n").map(list => list.match(/\d+/g).map(Number));
			let ratings = "";
			lists.forEach(list => {
				ratings += `${getRating(list, gap)}\n`;
			});
			return ratings;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "1 7 2 11 8 34 3";
		console.log(`%c${input.split("\n").map(row => row.trim()).join("\n")}`, "color : skyblue;");
		console.log(`%c${getAllRating(input)}`, "color : orange;");
		input = `31 63 53 56 96 62 73 25 54 55 64
             77 39 35 38 41 42 76 73 40 31 10
             30 63 57 87 37 31 58 83 34 76 38
             18 62 55 92 88 57 90 10 11 96 12
             26 8 7 25 52 17 45 64 11 35 12
             89 57 21 55 56 81 54 100 22 62 50`;
		console.log(`%c${input.split("\n").map(row => row.trim()).join("\n")}`, "color : skyblue;");
		console.log(`%c${getAllRating(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `76 74 45 48 13 75 16 14 79 58 78 82 46 89 81 88 27 64 21 63
             37 35 88 57 55 29 96 11 25 42 24 81 82 58 15 2 3 41 43 36
             54 64 52 39 36 98 32 87 95 12 40 79 41 13 53 35 48 42 33 75
             21 87 89 26 85 59 54 2 24 25 41 46 88 60 63 23 91 62 61 6
             94 66 18 57 58 54 93 53 19 16 55 22 51 8 67 20 17 56 21 59
             6 19 45 46 7 70 36 2 56 47 33 75 94 50 34 35 73 72 39 5`;
    console.log(`%c${input.split("\n").map(row => row.trim()).join("\n")}`, "color : skyblue;");
		console.log(`%c${getAllRating(input)}`, "color : orange;");  
		//bonus input
		console.log(`%cBonus Input: `, "color : red;"); 
		input = `76 74 45 48 13 75 16 14 79 58 78 82 46 89 81 88 27 64 21 63
             37 35 88 57 55 29 96 11 25 42 24 81 82 58 15 2 3 41 43 36
             54 64 52 39 36 98 32 87 95 12 40 79 41 13 53 35 48 42 33 75
             21 87 89 26 85 59 54 2 24 25 41 46 88 60 63 23 91 62 61 6
             94 66 18 57 58 54 93 53 19 16 55 22 51 8 67 20 17 56 21 59
             6 19 45 46 7 70 36 2 56 47 33 75 94 50 34 35 73 72 39 5`;
    console.log(`%c${input.split("\n").map(row => row.trim()).join("\n")}`, "color : skyblue;");
		console.log(`%c${getAllRating(input, 3)}`, "color : orange;");       
	});
})();		