/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * validate input
		 * @param {String} [input] - input to be validated
		 *
		 * @return {Array} [validated input]
		 */
		function validateInput(input) {
			let lines = input.split("\n").map(line => line.trim());
			let breakIndex = lines.indexOf("");
			let [operation, array1, array2] = [lines[0], lines.slice(1, breakIndex), lines.slice(breakIndex + 1)];
			array1 = array1.length == 1 && array1[0].length > 1 ? array1[0].split("") : array1; 
			array2 = array2.length == 1 && array2[0].length > 1 ? array2[0].split("") : array2; 
			return [operation, array1, array2];
		}
		/**
		 * bracket insertion
		 * @param {Array} [array1] - array to insert
		 * @param {Array} [array2] - array to be inserted
		 *
		 * @return {Array} [array after insertion]
		 */
		function insertBracket(array1, array2) {
			array2 = array2.reduce((acc, val, index) => 
				index % 2 ? [...acc.slice(0, -1), [...acc[acc.length - 1], val]] : [...acc, [val]], []);
			let inserted = [], curPair, curInsert;
			if(array1.length > array2.length) {
				for(let i = 0; i < array1.length; i++) {
					[curPair, curInsert] = [array2[i % array2.length], array1[i % array1.length]];
					inserted.push([curPair[0], curInsert, curPair[1]].join(""));
				}
			} else {
				for(let i = 0; i < array2.length; i++) {
					[curPair, curInsert] = [array2[i], array1[i % array1.length]];
					inserted.push([curPair[0], curInsert, curPair[1]].join(""));
				}
			}
			return inserted;
		}
		/**
		 * weave insertion
		 * @param {Array} [array1] - array to insert
		 * @param {Array} [array2] - array to be inserted
		 *
		 * @return {Array} [array after insertion]
		 */
		function insertWeave(array1, array2) {
			array1 = array1.length > array2.length ? array1.slice(0, array2.length) : array1;
			let inserted = [];
			for(let i = 0; i < array2.length - 1; i++) {
				inserted.push(array2[i], array1[i % array1.length]);
			}
			return [...inserted, array2[array2.length - 1]];
		}
		/**
		 * interleave arrays
		 * @param {String} [instruction] - instruction to be completed
		 *
		 * @return {Array} [interleaved array]
		 */
		function interleaveArray(instruction) {
			let [operation, array1, array2] = validateInput(instruction);
			if(operation == "Bracket") {
				return insertBracket(array1, array2);
			}
			return insertWeave(array1, array2);
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");	
		let input = `Bracket
                 +-
                 
                 234567`;
		console.log(`%c${input.split("\n").map(line => line.trim()).join("\n")}`, "color : skyblue;");                 
		console.log("After Insertion -> ");                 
    console.log(`%c${interleaveArray(input).join("\n")}`, "color : orange;");
    input = `Bracket
             2+3
             4-5
             6+7
             
             ()`;
    console.log(`%c${input.split("\n").map(line => line.trim()).join("\n")}`, "color : skyblue;");                 
		console.log("After Insertion -> ");                 
    console.log(`%c${interleaveArray(input).join("\n")}`, "color : orange;");
    input = `Weave
             *
             
             (2+3)
             (4-5)
             (6+7)`;
    console.log(`%c${input.split("\n").map(line => line.trim()).join("\n")}`, "color : skyblue;");                 
		console.log("After Insertion -> ");                 
    console.log(`%c${interleaveArray(input).join("\n")}`, "color : orange;");
	});
})();		