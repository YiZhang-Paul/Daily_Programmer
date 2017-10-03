/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * decode segments
		 * @param {String} [segment] - segment to decode
		 * @param {Array} [dictionary] - dictionary for decoding
		 *
		 * @return {String} [decoded segment]
		 */
		function decode(segment, dictionary) {
			let decoded = "";
			if(/\d/.test(segment)) {
				const word = dictionary[Number(segment.match(/\d+/)[0])];
				const modifier = /[^\d]/.test(segment) ? segment.match(/[^\d]/)[0] : null;
				decoded = modifier ? 
					(modifier == "!" ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)) : word.toLowerCase();
			} else if(new Set("RE").has(segment.toUpperCase())) {
				decoded = segment.toUpperCase() == "R" ? "\n" : "";
			} else {
				decoded = segment;
			}
			return decoded;
		}
		/**
		 * decompress code
		 * @param {int} [size] - size of dictionary
		 * @param {String} [info] - words in dictionary and codes to decompress
		 *
		 * @return {Array} [decompressed codes]
		 */
		function decompress(size, info) {
			let lines = info.split("\n").map(line => line.trim());
			let dictionary = lines.slice(0, size);
			return lines.slice(size).map(code => 
				code.match(/\s(?![.,?!;:])|[^\s]+/g).map(segment => decode(segment, dictionary)).join(""));
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `is
								 my
								 hello
								 name
								 stan
								 2! ! R 1^ 3 0 4^ . E`;
		console.log(`%c${decompress(5, input).join("\r")}`, "color : orange;");		
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
		console.log(`%c${decompress(20, input).join("\r")}`, "color : orange;");					 
	});
})();		