/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * count total occurrence of each letter in an array
		 * @param {Array} [chars] - all characters
		 *
		 * @return {Object} [letter counts]
		 */
		function countLetter(chars) {
			return chars.reduce((acc, val) => {
				acc[val] = acc[val] ? acc[val] + 1 : 1;
				return acc;
			}, {});
		}
		/**
		 * check if a word can be formed by given set of characters
		 * @param {String} [word] - word to be tested
		 * @param {Object} [chars] - all characters available
		 *
		 * @return {boolean} [test result]
		 */
		function canFormWord(word, chars) {
			let letters = countLetter(word.split(""));
			for(let letter in letters) {
				if(!chars[letter] || letters[letter] > chars[letter]) {
					return false;
				}
			}
			return true;
		}
		/**
		 * find largest word can be formed by given set of characters
		 * @param {String} [input] - input containing words and characters
		 *
		 * @return {Array} [largest words]
		 */
		function largestWord(input) {
			input = input.split("\n").map(line => line.trim());
			let words = input[0].split(" ").sort((a, b) => b.length - a.length);
			let chars = countLetter(input[1].split(" "));
			let longest = words.find(word => canFormWord(word, chars));
			return longest ? words.filter(word => word.length == longest.length && canFormWord(word, chars)).join(" ") : "No Words Found.";
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `abc cca aaaaaa bca
								 a b c`;
		console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);						 
		console.log(`%c-> ${largestWord(input)}`, "color : orange;");		
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");	
		input = `hello yyyyyyy yzyzyzyzyzyz mellow well yo kellow lellow abcdefhijkl hi is yellow just here to add strings fellow lellow llleow 
						 l e l o h m f y z a b w`;
		console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);						 
		console.log(`%c-> ${largestWord(input)}`, "color : orange;");						 
		input = `sad das day mad den foot ball down touch pass play
             z a d f o n`;				 					 		 
    console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);						 
		console.log(`%c-> ${largestWord(input)}`, "color : orange;");		         
	});
})();				