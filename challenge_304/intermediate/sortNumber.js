/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * construct relation table between all numbers
		 * @param array []
		 *
		 * numList : list of all numbers
		 *
		 * returns obj {}
		 */
		function makeTable(numList) {
			let table = {};
			for(let i = 0; i < numList.length - 1; i++) {
				for(let j = i + 1; j < numList.length; j++) {
					table[`${numList[i]}/${numList[j]}`] = null;
				}
			}
			return table;
		} 
		/**
		 * check if all relationships have been gathered
		 * @param obj {}
		 *
		 * table : relation table for all numbers
		 * 
		 * returns boolean
		 */
		function tableComplete(table) {
			return Object.keys(table).every(key => table[key]);
		} 
		/**
		 * get relation key
		 * @param int, int, obj {}
		 *
		 * num1  : number 1
		 * num2  : number 2
		 * table : relation table 
		 *
		 * returns String
		 */
		function getKey(num1, num2, table) {
			return Object.keys(table).indexOf(`${num1}/${num2}`) != -1 ? `${num1}/${num2}` : `${num2}/${num1}`;
		} 
		/**
		 * get known relationships
		 * @param int, obj {}
		 *
		 * number : number to be checked
		 * table  : relation table
		 *
		 * returns array []
		 */
		function knownRelation(number, table) {
			return Object.keys(table)
				.filter(key => table[key] && key.split("/").indexOf(number.toString()) != -1)
				.map(key => Number(key.split("/").filter(num => num != number.toString())[0]));
		} 
		/**
		 * check if a number is smaller 
		 * than another number through table
		 * @param int, int, obj {}
		 *
		 * num1  : number to be tested
		 * num2  : number to be tested against
		 * table : relation table
		 *
		 * returns boolean
		 */
		function isSmaller(num1, num2, table) {
			return table[getKey(num1, num2, table)] == num1;
		} 
		/**
		 * check if a number is larger
		 * than another number through table
		 * @param int, int, obj {}
		 *
		 * num1  : number to be tested
		 * num2  : number to be tested against
		 * table : relation table
		 *
		 * returns boolean
		 */
		function isLarger(num1, num2, table) {
			return table[getKey(num1, num2, table)] == num2;
		} 
		/**
		 * fill in relation table
		 * @param int, int
		 * 
		 * num1  : number 1
		 * num2  : number 2
		 * table : relation table to be filled in
		 */
		function fillTable(num1, num2, table) {
			table[getKey(num1, num2, table)] = Math.min(num1, num2);
			fillMutual(num1, num2, table);
			fillMutual(num2, num1, table);
		} 
		/**
		 * check mutual relationship between three numbers
		 * @param int, int, int, table
		 * 
		 * num1  : number 1 
		 * num2  : number 2
		 * num3  : number 3
		 * table : relation table 
		 *
		 * returns boolean
		 */
		function canLink(num1, num2, num3, table) {
			let ascend = isSmaller(num1, num2, table) && isSmaller(num2, num3, table);
			let descend = isLarger(num1, num2, table) && isLarger(num2, num3, table);
			return ascend || descend;
		} 
		/**
		 * check and fill up mutual relationship
		 * @param int, int, obj {}
		 *
		 * num1  : number 1
		 * num2  : number 2
		 * table : relation table 
		 */
		function fillMutual(num1, num2, table) {
			let num1Relation = knownRelation(num1, table);
			for(let i = 0; i < num1Relation.length; i++) {
				if(canLink(num2, num1, num1Relation[i], table)) {
					table[getKey(num2, num1Relation[i], table)] = Math.min(num2, num1Relation[i]);
				}
			}
		} 
		/**
		 * compare numbers 5 at a time
		 * @param array [], obj {}
		 *
		 * numbers : numbers to be compared
		 * table   : table to record number relationships
		 */
		function compareNumber(numbers, table) {
			numbers.sort((a, b) => a - b);
			for(let i = 0; i < numbers.length - 1; i++) {
				for(let j = i + 1; j < numbers.length; j++) {
					fillTable(numbers[i], numbers[j], table);
				}
			}
		} 
		//challenge input
		let input = [107, 47, 102, 64, 50, 100, 28, 91, 27, 5, 22, 114, 23, 42, 13, 3, 93, 8, 92, 79, 53, 83, 63, 7, 15, 66, 105, 57, 14, 65, 58, 113, 112, 1, 62, 103, 120, 72, 111, 51, 9, 36, 119, 99, 30, 20, 25, 84, 16, 116, 98, 18, 37, 108, 10, 80, 101, 35, 75, 39, 109, 17, 38, 117, 60, 46, 85, 31, 41, 12, 29, 26, 74, 77, 21, 4, 70, 61, 88, 44, 49, 94, 122, 2, 97, 73, 69, 71, 86, 45, 96, 104, 89, 68, 40, 6, 87, 115, 54, 123, 125, 90, 32, 118, 52, 11, 33, 106, 95, 76, 19, 82, 56, 121, 55, 34, 24, 43, 124, 81, 48, 110, 78, 67, 59];
		let table = makeTable(input);
		compareNumber(input.slice(0, 5), table);
		compareNumber(input.slice(4, 9), table);
		fillTable(102, 100, table);
		console.log(table);
		console.log(Object.keys(table).filter(key => table[key]));
	});
})();		