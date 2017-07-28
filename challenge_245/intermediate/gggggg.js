/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * construct translate table
		 * @param {String} [alphabet] - alphabet for translation
		 *
		 * @return {Array} [translate table and max/min length of letter]
		 */
		function makeTranslateTable(alphabet) {
			alphabet = alphabet.split(" ");
			let table = new Map(), maxLen = alphabet[1].length, minLen = maxLen;
			for(let i = 0; i < alphabet.length; i += 2) {
				table.set(alphabet[i + 1], alphabet[i]);
				maxLen = Math.max(maxLen, alphabet[i + 1].length);
				minLen = Math.min(minLen, alphabet[i + 1].length);
			}
			return [table, maxLen, minLen];
		}
		/**
		 * decode segment of words
		 * @param {String} [segment] - word segment
		 * @param {int} [maxLen] - maximum length of letter
		 * @param {int} [minLen] - minimum length of letter
		 * @param {Object} [table] - translate table
		 *
		 * @return {String} [decoded segment]
		 */
		function decodeSegment(segment, maxLen, minLen, table) {
			let decoded = "";
			while(segment.length) {
				for(let i = maxLen; i >= minLen; i--) {
					let letter = segment.slice(0, i);
					if(table.has(letter)) {
						segment = segment.slice(i);
						decoded += table.get(letter);
						break;
					}
				}
			}
			return decoded;
		}
		/**
		 * decode language
		 * @param {String} [input] - input to be decoded
		 *
		 * @return {String} [decoded output]
		 */
		function decodeAll(input) {
			input = input.split("\n").map(line => line.trim());
			let [alphabet, code] = [input[0], input[1].match(/[a-zA-Z]+|[/,!\s]*/g)];
			let [table, maxLen, minLen] = makeTranslateTable(alphabet);
			return code.map(segment => 
				/[a-zA-Z]+/.test(segment) ? decodeSegment(segment, maxLen, minLen, table) : segment).join("");
		}
		//part 1 input
		console.log(`%cPart 1 Input: `, "color : red;");						 
		let input = `H GgG d gGg e ggG l GGg o gGG r Ggg w ggg
								 GgGggGGGgGGggGG, ggggGGGggGGggGg!`;
		console.log(`${input.split("\n").map(line => line.trim()).join("\n")} --------> %c${decodeAll(input)}`, "color : orange;");						 
		input = `a GgG d GggGg e GggGG g GGGgg h GGGgG i GGGGg l GGGGG m ggg o GGg p Gggg r gG y ggG
						 GGGgGGGgGGggGGgGggG /gG/GggGgGgGGGGGgGGGGGggGGggggGGGgGGGgggGGgGggggggGggGGgG!`;
		console.log(`${input.split("\n").map(line => line.trim()).join("\n")} --------> %c${decodeAll(input)}`, "color : orange;");
	});
})();		