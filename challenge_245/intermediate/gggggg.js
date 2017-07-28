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
			input = [input[0], input.slice(1).join("\n")];
			let [alphabet, code] = [input[0], input[1].match(/[a-zA-Z]+|[/,!.'"?\s]*/g)];
			let [table, maxLen, minLen] = makeTranslateTable(alphabet);
			return code.map(segment => 
				/[a-zA-Z]+/.test(segment) ? decodeSegment(segment, maxLen, minLen, table) : segment).join("");
		}
		/**
		 * create letter patterns
		 * @param {int} [len] - total length of pattern
		 * @param {String} [curPattern] - current pattern
		 *
		 * @return {Array} [patterns]
		 */
		function makePattern(len, curPattern = "") {
			if(curPattern.length == len) {
				return curPattern;
			}
			let patterns = [];
			for(let i = 0; i < 2; i++) {
				let result = makePattern(len, curPattern + (i ? "g" : "G"));
				if(Array.isArray(result)) {
					patterns.push(...result);
				} else {
					patterns.push(result);
				}
			}
			return patterns;
		}
		/**
		 * check if a pattern is a prefix of another
		 * @param {String} [pattern1] - pattern 1
		 * @param {String} [pattern2] - pattern 2
		 *
		 * @return {boolean} [test result]
		 */
		function isPrefix(pattern1, pattern2) {
			return pattern1 == pattern2.slice(0, pattern1.length);
		}
		/**
		 * filter out all patterns that are prefix of others
		 * @param {Array} [patterns] - all patterns
		 *
		 * @return {Array} [filtered patterns]
		 */
		function filterPattern(patterns) {
			return patterns.filter((pattern, index) => 
				!patterns.slice(index + 1).some(other => isPrefix(pattern, other)));
		}
		/**
		 * generate letters
		 * @param {Array} [original] - original letters to be transformed
		 *
		 * @return {Array} [list of original letters and generated letters]
		 */
		function makeLetter(original) {
			let maxLen = 1, curTotal = Math.pow(2, maxLen);
			while(curTotal < original.length) {
				curTotal += Math.pow(2, ++maxLen);
			}
			let patterns = [];
			for(let i = 1; i <= maxLen + 1; i++) {
				patterns.push(...makePattern(i));
			}
			patterns = filterPattern(patterns);
			return [original.map((char, index) => `${patterns[index]} ${char}`).join(" "),
			        original.map((char, index) => `${char} ${patterns[index]}`).sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt()).join(" ")];
		}
		/**
		 * encode segment of words
		 * @param {String} [segment] - word segment
		 * @param {Object} [table] - translate table
		 *
		 * @return {String} [encoded segment]
		 */
		function encodeSegment(segment, table) {
			return segment.split("").map(char => table.get(char)).join("");
		}
		/**
		 * encode language
		 * @param {String} [input] - input to be encoded
		 *
		 * @return {String} [encoded output]
		 */
		function encodeAll(input) {
			let allChars = input.match(/[a-zA-Z]/g);
			let frequency = allChars.reduce((acc, val) => {
				acc[val] = acc[val] ? acc[val] + 1 : 1;
				return acc;
			}, {});
			let letters = makeLetter(Array.from(new Set(allChars)).sort((a, b) => frequency[b] - frequency[a]));
			let table = makeTranslateTable(letters[0])[0];
			let encoded = input.match(/[a-zA-Z]+|[/,!.'"?\s]*/g)
			                   .map(segment => /[a-zA-Z]+/.test(segment) ? encodeSegment(segment, table) : segment).join("");
			return letters[1] + "\n" + encoded;
		}			                
		//part 1 input
		console.log(`%cPart 1 Input: `, "color : red;");						 
		let input = `H GgG d gGg e ggG l GGg o gGG r Ggg w ggg
								 GgGggGGGgGGggGG, ggggGGGggGGggGg!`;
		console.log(`${input.split("\n").map(line => line.trim()).join("\n")} --------> %c${decodeAll(input)}`, "color : orange;");						 
		input = `a GgG d GggGg e GggGG g GGGgg h GGGgG i GGGGg l GGGGG m ggg o GGg p Gggg r gG y ggG
						 GGGgGGGgGGggGGgGggG /gG/GggGgGgGGGGGgGGGGGggGGggggGGGgGGGgggGGgGggggggGggGGgG!`;
		console.log(`${input.split("\n").map(line => line.trim()).join("\n")} --------> %c${decodeAll(input)}`, "color : orange;");
		//part 2 input
		input = "Hello, world!";
		console.log(`%cPart 2 Input: `, "color : red;");	
		console.log(`${input} ->`);
		console.log(`%c${encodeAll(input)}`, "color : orange;");
		//part 2 bonus
		input = `Here's the thing. You said a "jackdaw is a crow."
						 Is it in the same family? Yes. No one's arguing that.
						 As someone who is a scientist who studies crows, I am telling you, specifically, in science, no one calls jackdaws crows. If you want to be "specific" like you said, then you shouldn't either. They're not the same thing.
						 If you're saying "crow family" you're referring to the taxonomic grouping of Corvidae, which includes things from nutcrackers to blue jays to ravens.
						 So your reasoning for calling a jackdaw a crow is because random people "call the black ones crows?" Let's get grackles and blackbirds in there, then, too.
						 Also, calling someone a human or an ape? It's not one or the other, that's not how taxonomy works. They're both. A jackdaw is a jackdaw and a member of the crow family. But that's not what you said. You said a jackdaw is a crow, which is not true unless you're okay with calling all members of the crow family crows, which means you'd call blue jays, ravens, and other birds crows, too. Which you said you don't.
						 It's okay to just admit you're wrong, you know?`;
		console.log(`%cPart 2 Bonus Input: `, "color : red;");
		console.log(`${input.split("\n").map(line => line.trim()).join("\n")} ->`);
		console.log(`%c${encodeAll(input.split("\n").map(line => line.trim()).join("\n"))}`, "color : orange;");					 	
		input = `A GgGggg B gGGGGg C GgggGg H GgggGG I GgGgGg L gGGGGG N GggggG S Gggggg T GggGgG W gGGGgG Y GggGGG a GGGGGg b GgGGgg c GGgGGG d GGgggG e GGGGgG f GgGGgG g GgGGGG h GGgGGg i GGGgGg j GgGgGG k GgGGGg l GGgGgG m GGgggg n GGGggG o GGGGGG p GgGggG r GGGggg s GGGGgg t GGGgGG u GGgGgg v GggGGg w GGggGG x GggGgg y GGggGg
						 GgggGGGGGGgGGGGgggGGGGgG'GGGGgg GGGgGGGGgGGgGGGGgG GGGgGGGGgGGgGGGgGgGGGggGGgGGGG. GggGGGGGGGGGGGgGgg GGGGggGGGGGgGGGgGgGGgggG GGGGGg "GgGgGGGGGGGgGGgGGGGgGGGgGGgggGGGGGGgGGggGG GGGgGgGGGGgg GGGGGg GGgGGGGGGgggGGGGGGGGggGG."
						 GgGgGgGGGGgg GGGgGgGGGgGG GGGgGgGGGggG GGGgGGGGgGGgGGGGgG GGGGggGGGGGgGGggggGGGGgG GgGGgGGGGGGgGGggggGGGgGgGGgGgGGGggGg? GggGGGGGGGgGGGGGgg. GggggGGGGGGG GGGGGGGGGggGGGGGgG'GGGGgg GGGGGgGGGgggGgGGGGGGgGggGGGgGgGGGggGGgGGGG GGGgGGGGgGGgGGGGGgGGGgGG.
						 GgGgggGGGGgg GGGGggGGGGGGGGggggGGGGgGGGGGGGGGGggGGGGGgG GGggGGGGgGGgGGGGGG GGGgGgGGGGgg GGGGGg GGGGggGGgGGGGGGgGgGGGGgGGGGggGGGGgGGGGGgGgGGGGggGGGgGG GGggGGGGgGGgGGGGGG GGGGggGGGgGGGGgGggGGgggGGGGgGgGGGGgGGGGGgg GGgGGGGGGgggGGGGGGGGggGGGGGGgg, GgGgGg GGGGGgGGgggg GGGgGGGGGGgGGGgGgGGGgGgGGGGgGgGGGggGGgGGGG GGggGgGGGGGGGGgGgg, GGGGggGgGggGGGGGgGGGgGGGGGGgGgGgGGgGGGGgGgGGgGGGGGGGGgGGgGgGGGgGgGGGggGg, GGGgGgGGGggG GGGGggGGgGGGGGGgGgGGGGgGGGGggGGGgGGGGGGGgG, GGGggGGGGGGG GGGGGGGGGggGGGGGgG GGgGGGGGGGGgGGgGgGGGgGgGGGGGgg GgGgGGGGGGGgGGgGGGGgGGGgGGgggGGGGGGgGGggGGGGGGgg GGgGGGGGGgggGGGGGGGGggGGGGGGgg. GgGgGgGgGGgG GGggGgGGGGGGGGgGgg GGggGGGGGGGgGGGggGGGGgGG GGGgGGGGGGGG GgGGggGGGGgG "GGGGggGgGggGGGGGgGGGgGGGGGGgGgGgGGgGGGGgGgGGgGGG" GGgGgGGGGgGgGgGGGgGGGGgG GGggGgGGGGGGGGgGgg GGGGggGGGGGgGGGgGgGGgggG, GGGgGGGGgGGgGGGGgGGGGggG GGggGgGGGGGGGGgGgg GGGGggGGgGGgGGGGGGGGgGggGGgGgGGGgggGGGGggG'GGGgGG GGGGgGGGGgGgGGGgGGGGgGGgGGGGgGGGGggg. GggGgGGGgGGgGGGGgGGGggGg'GGGgggGGGGgG GGGggGGGGGGGGGGgGG GGGgGGGGgGGgGGGGgG GGGGggGGGGGgGGggggGGGGgG GGGgGGGGgGGgGGGgGgGGGggGGgGGGG.
						 GgGgGgGgGGgG GGggGgGGGGGGGGgGgg'GGGgggGGGGgG GGGGggGGGGGgGGggGgGGGgGgGGGggGGgGGGG "GGgGGGGGGgggGGGGGGGGggGG GgGGgGGGGGGgGGggggGGGgGgGGgGgGGGggGg" GGggGgGGGGGGGGgGgg'GGGgggGGGGgG GGGgggGGGGgGGgGGgGGGGGgGGGGgggGGGgggGGGgGgGGGggGGgGGGG GGGgGGGGGGGG GGGgGGGGgGGgGGGGgG GGGgGGGGGGGgGggGggGGGGGGGGGggGGGGGGGGGggggGGGgGgGGgGGG GgGGGGGGGgggGGGGGGGGgGggGgGggGGGGgGgGGGggGGgGGGG GGGGGGGgGGgG GgggGgGGGGGGGGGgggGggGGgGGGgGgGGgggGGGGGGgGGGGgG, GGggGGGGgGGgGGGgGgGGgGGGGGgGGg GGGgGgGGGggGGGgGGGGGgGgGGGgGggGGgggGGGGGgGGGGGgg GGGgGGGGgGGgGGGgGgGGGggGGgGGGGGGGGgg GgGGgGGGGgggGGGGGGGGgggg GGGggGGGgGggGGGgGGGGgGGGGGGgggGGGGGgGGgGGGGgGGGgGGGGgGGGGgggGGGGgg GGGgGGGGGGGG GgGGggGGgGgGGGgGggGGGGgG GgGgGGGGGGGgGGggGgGGGGgg GGGgGGGGGGGG GGGgggGGGGGgGggGGgGGGGgGGGGggGGGGGgg.
						 GgggggGGGGGG GGggGgGGGGGGGGgGggGGGggg GGGgggGGGGgGGGGGGgGGGGggGGGGGGGGGggGGGGgGgGGGggGGgGGGG GgGGgGGGGGGGGGGggg GGgGGGGGGGGgGGgGgGGGgGgGGGGgGgGGGggGGgGGGG GGGGGg GgGgGGGGGGGgGGgGGGGgGGGgGGgggGGGGGGgGGggGG GGGGGg GGgGGGGGGgggGGGGGGGGggGG GGGgGgGGGGgg GgGGggGGGGgGGGgGGGGGGGGgGGgGggGGGGggGGGGgG GGGgggGGGGGgGGGggGGGgggGGGGGGGGGgggg GgGggGGGGGgGGGGGGGGgGggGGGgGgGGGGGgG "GGgGGGGGGGGgGGgGgGGGgGgG GGGgGGGGgGGgGGGGgG GgGGggGGgGgGGGGGGgGGgGGGGgGGGg GGGGGGGGGggGGGGGgGGGGGgg GGgGGGGGGgggGGGGGGGGggGGGGGGgg?" gGGGGGGGGGgGGGGgGG'GGGGgg GgGGGGGGGGgGGGGgGG GgGGGGGGGgggGGGGGgGGgGGGGgGGGgGGgGgGGGGGgGGGGGgg GGGGGgGGGggGGGgggG GgGGggGGgGgGGGGGGgGGgGGGGgGGGgGgGGggGGGgGgGGGgggGGgggGGGGGgg GGGgGgGGGggG GGGgGGGGgGGgGGGGgGGGGgggGGGGgG, GGGgGGGGgGGgGGGGgGGGGggG, GGGgGGGGGGGGGGGGGG.
						 GgGgggGGgGgGGGGGggGGGGGG, GGgGGGGGGGGgGGgGgGGGgGgGGGGgGgGGGggGGgGGGG GGGGggGGGGGGGGggggGGGGgGGGGGGGGGGggGGGGGgG GGGGGg GGgGGgGGgGggGGggggGGGGGgGGGggG GGGGGGGGGggg GGGGGgGGGggG GGGGGgGgGggGGGGGgG? GgGgGgGGGgGG'GGGGgg GGGggGGGGGGGGGGgGG GGGGGGGGGggGGGGGgG GGGGGGGGGggg GGGgGGGGgGGgGGGGgG GGGGGGGGGgGGGGgGGgGGGGgGGGGggg, GGGgGGGGgGGgGGGGGgGGGgGG'GGGGgg GGGggGGGGGGGGGGgGG GGgGGgGGGGGGGGggGG GGGgGGGGGGGgGggGggGGGGGGGGGggGGGGGGGGGggggGGggGg GGggGGGGGGGGGGGgggGgGGGgGGGGgg. GggGgGGGgGGgGGGGgGGGggGg'GGGgggGGGGgG GgGGggGGGGGGGGGgGGGGgGGg. GgGggg GgGgGGGGGGGgGGgGGGGgGGGgGGgggGGGGGGgGGggGG GGGgGgGGGGgg GGGGGg GgGgGGGGGGGgGGgGGGGgGGGgGGgggGGGGGGgGGggGG GGGGGgGGGggGGGgggG GGGGGg GGggggGGGGgGGGggggGgGGggGGGGgGGGGggg GGGGGGGgGGgG GGGgGGGGgGGgGGGGgG GGgGGGGGGgggGGGGGGGGggGG GgGGgGGGGGGgGGggggGGGgGgGGgGgGGGggGg. gGGGGgGGgGggGGGgGG GGGgGGGGgGGgGGGGGgGGGgGG'GGGGgg GGGggGGGGGGGGGGgGG GGggGGGGgGGgGGGGGgGGGgGG GGggGgGGGGGGGGgGgg GGGGggGGGGGgGGGgGgGGgggG. GggGGGGGGGGGGGgGgg GGGGggGGGGGgGGGgGgGGgggG GGGGGg GgGgGGGGGGGgGGgGGGGgGGGgGGgggGGGGGGgGGggGG GGGgGgGGGGgg GGGGGg GGgGGGGGGgggGGGGGGGGggGG, GGggGGGGgGGgGGGgGgGGgGGGGGgGGg GGGgGgGGGGgg GGGggGGGGGGGGGGgGG GGGgGGGGGgggGGgGggGGGGgG GGgGggGGGggGGGgGgGGGGGgGGGGGggGGGGgg GGggGgGGGGGGGGgGgg'GGGgggGGGGgG GGGGGGGgGGGgGGGGGgGGggGg GGggGGGGGgGgGGGgGGGGgGGg GGgGGGGGGGGgGGgGgGGGgGgGGGGgGgGGGggGGgGGGG GGGGGgGGgGgGGGgGgG GGggggGGGGgGGGggggGgGGggGGGGgGGGGgggGGGGgg GGGGGGGgGGgG GGGgGGGGgGGgGGGGgG GGgGGGGGGgggGGGGGGGGggGG GgGGgGGGGGGgGGggggGGGgGgGGgGgGGGggGg GGgGGGGGGgggGGGGGGGGggGGGGGGgg, GGggGGGGgGGgGGGgGgGGgGGGGGgGGg GGggggGGGGgGGGGGGgGGGggGGGGGgg GGggGgGGGGGGGGgGgg'GGgggG GGgGGGGGGGGgGGgGgGGGgGgG GgGGggGGgGgGGGgGggGGGGgG GgGgGGGGGGGgGGggGgGGGGgg, GGGgggGGGGGgGggGGgGGGGgGGGGggGGGGGgg, GGGGGgGGGggGGGgggG GGGGGGGGGgGGGGgGGgGGGGgGGGGggg GgGGggGGGgGgGGGgggGGgggGGGGGgg GGgGGGGGGgggGGGGGGGGggGGGGGGgg, GGGgGGGGGGGGGGGGGG. gGGGgGGGgGGgGGGgGgGGgGGGGGgGGg GGggGgGGGGGGGGgGgg GGGGggGGGGGgGGGgGgGGgggG GGggGgGGGGGGGGgGgg GGgggGGGGGGGGGGggG'GGGgGG.
						 GgGgGgGGGgGG'GGGGgg GGGGGGGgGGGgGGGGGgGGggGg GGGgGGGGGGGG GgGgGGGGgGggGGGGggGGGgGG GGGGGgGGgggGGGggggGGGgGgGGGgGG GGggGgGGGGGGGGgGgg'GGGgggGGGGgG GGggGGGGGgggGGGGGGGGGggGGgGGGG, GGggGgGGGGGGGGgGgg GgGGGgGGGggGGGGGGGGGggGG?`;
		console.log(decodeAll(input));
	});
})();		