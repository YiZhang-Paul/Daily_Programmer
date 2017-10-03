/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * capitalize a word
		 * @param {String} [word] - word to be capitalized
		 *
		 * @return {String} [capitalized word]
		 */
		function capitalize(word) {
			return word[0].toUpperCase() + word.slice(1).toLowerCase();
		}
		/**
		 * decode segment
		 * @param {String} [segment] - segment to decode
		 * @param {Array} [dictionary] - dictionary for decoding
		 *
		 * @return {String} [decoded segment] 
		 */
		function decode(segment, dictionary) {
			if(/\d/.test(segment)) {
				const word = dictionary[Number(segment.match(/\d+/)[0])];
				const modifier = /[^\d]/.test(segment) ? segment.slice(-1) : null;
				return modifier ? (modifier == "^" ? capitalize(word) : word.toUpperCase()) : word.toLowerCase();
			}
			return new Set("RE").has(segment) ? (segment == "R" ? "\n" : "") : segment;
		}
		/**
		 * decompress message
		 * @param {int} [size] - total words in the dictionary
		 * @param {String} [data] - words in dictionary and messages to decompress
		 *
		 * @return {String} [decompressed message]
		 */
		function decompress(size, data) {
			let lines = data.split("\n").map(line => line.trim());
			let dictionary = lines.slice(0, size);
			return lines.slice(size).reduce((acc, val) => {
				let segments = val.match(/\s(?![.,?!;:])|[^\s]+/g);
				return acc + segments.map(segment => decode(segment.toUpperCase(), dictionary)).join("");
			}, "").replace(/\n\s|\s\-\s/g, match => /\-/.test(match) ? "-" : "\n");
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `is
								 my
								 hello
								 name
								 stan
								 2! ! R 1^ 3 0 4^ . E`;
		console.log(`%c${decompress(5, input)}`, "color : orange;");		
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `i
						 do
						 house
						 with
						 mouse
						 in
						 not
						 like
						 them
						 ham
						 a
						 anywhere
						 green
						 eggs
						 and
						 here
						 or
						 there
						 sam
						 am
						 0^ 1 6 7 8 5 10 2 . R
						 0^ 1 6 7 8 3 10 4 . R
						 0^ 1 6 7 8 15 16 17 . R
						 0^ 1 6 7 8 11 . R
						 0^ 1 6 7 12 13 14 9 . R
						 0^ 1 6 7 8 , 18^ - 0^ - 19 . R E`;
		console.log(`%c${decompress(20, input)}`, "color : orange;");					 
	});
})();		