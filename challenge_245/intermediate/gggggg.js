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
				table.set(alphabet[i], alphabet[i + 1]);
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
		 * count occurrences of all characters
		 * @param {Array} [chars] - all characters
		 *
		 * @return {Array} [character nodes]
		 */
		function countChars(chars) {
			let frequency = chars.reduce((acc, val) => {
				acc[val] = acc[val] ? acc[val] + 1 : 1;  
				return acc;
			}, {});
			let nodes = [];
			for(let char in frequency) {
				nodes.push({type : "char", letter : char, total : frequency[char]});
			}
			return nodes;													 
		}
		/**
		 * sort nodes by number of occurrence
		 * @param {Array} [nodes] - nodes to be sorted
		 *
		 * @return {Array} [sorted nodes]
		 */
		function sortNode(nodes) {
			return nodes.slice().sort((a, b) => a.total == b.total ? (a.type == "char" ? 1 : -1) : a.total - b.total);
		}
		/**
		 * construct Huffman tree
		 * @param {Array} [chars] - all characters
		 *
		 * @return {Object} [tree root node]
		 */
		function makeHuffmanTree(chars) {
			let nodes = sortNode(countChars(chars));
			while(nodes.length != 1) {
				let lowest = nodes.splice(0, 2);
				nodes.unshift({type : "heap", total : lowest[0].total + lowest[1].total, "0" : lowest[0], "1" : lowest[1]});
				nodes = sortNode(nodes);
			}
			return nodes[0];
		}
		/**
		 * traverse Huffman tree
		 * @param {Object} [node] - root node of tree
		 * @param {String} [curRoute] - current traverse route
		 *
		 * @return {Array} [Huffman's code]
		 */
		function traverseTree(node, curRoute = "") {
			if(node.type == "char") {
				return node.letter + " " + curRoute.split("").map(branch => branch == "0" ? "G" : "g").join("");
			}
			let routes = [];
			for(let i = 0; i < 2; i++) {
				if(node[String(i)]) {
					let result = traverseTree(node[String(i)], curRoute + i);
					if(Array.isArray(result)) {
						routes.push(...result);
					} else {
						routes.push(result);
					}
				}
			}
			return routes;
		} 
		/**
		 * generate letters
		 * @param {Array} [chars] - original letters to be transformed
		 *
		 * @return {Array} [list of original letters and generated letters]
		 */
		function makeLetter(chars) {
			return traverseTree(makeHuffmanTree(chars));
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
			let letters = makeLetter(input.match(/[a-zA-Z]/g));
			let table = makeTranslateTable(letters.sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt()).join(" "))[0];
			let encoded = input.match(/[a-zA-Z]+|[/,!.'"?\s]*/g)
			                   .map(segment => /[a-zA-Z]+/.test(segment) ? encodeSegment(segment, table) : segment).join("");
			return letters.join(" ") + "\n" + encoded;
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
		input = `A gGGgGGgg B ggGgGgGGgg C gGGgGGGGG H ggGgGgGGGg I GgGgGgg L ggGgGgGGgG N gGGgGGGGgG S gGGgGGGGgg T ggGgGgGgG W ggGgGgGGGG Y gGGgGGgG a gggg b GgGgGG c GgGG d GgGgg e gggG f gGGgGg g GGGGG h GGGg i gGGG j ggGgGgg k ggGgGG l ggGgg m GGGGg n Gggg o GGg p GgGgGgG r GggG s ggGG t gGgG u gGggg v gGGgGGGg w gGggG x ggGgGgGgg y gGGgg
             ggGgGgGGGggggGGggGgggG'ggGG gGgGGGGggggG gGgGGGGggGGGGgggGGGGG. gGGgGGgGGGggGggg ggGGgggggGGGGgGgg gggg "ggGgGggggggGgGGggGgGGGgGgggggggGggG gGGGggGG gggg GgGGGggGGGggGggG."
             GgGgGggggGG gGGGgGgG gGGGGggg gGgGGGGggggG ggGGggggGGGGggggG gGGgGgggggGGGGggGGGggGgggGGgg? gGGgGGgGgggGggGG. gGGgGGGGgGGGg GGgGggggggG'ggGG ggggGggGGGGGGgGggggGGGGgggGGGGG gGgGGGGggggggGgG.
             gGGgGGggggGG ggGGGGgGGGGggggGGGgGggggggG gGggGGGGgGGg gGGGggGG gggg ggGGGgGGgGGGgggGGggggGgGgGGGggGGgGgG gGggGGGGgGGg ggGGgGgGgGgggGgGgggGGGgggGggGG GgGGGggGGGggGggGggGG, GgGgGgg ggggGGGGg gGgGgggGggGggggGgggGGGGgggGGGGG gGGggGGggGggg, ggGGGgGgGgGgggGGgGGgGGGgGGgGggGGGGgGGggggggGggggGgggGGgg, gGGGGggg ggGGGgGGgGGGgggGGgggGgGGgggG, GgggGGg GGgGggggggG GgGGggggggGggggGggggGG ggGgGggggggGgGGggGgGGGgGgggggggGggGggGG GgGGGggGGGggGggGggGG. GgGgGgggGGgGg gGGggGGggGggg gGggGggggGggggGgG gGgGGGg GgGgGGgggG "ggGGGgGgGgGgggGGgGGgGGGgGGgGggGGGGgGG" ggGgggGGGggGgGGgggG gGGggGGggGggg ggGGgggggGGGGgGgg, gGgGGGGggggGGggg gGGggGGggGggg ggGGGGGgGGggGgggggGggGgGggGggg'gGgG gggGgGGGgGgGGGGggggGGggG. ggGgGgGgGGGGggggGgGGgg'GggGgggG GgggGGggGgG gGgGGGGggggG ggGGggggGGGGggggG gGgGGGGggGGGGgggGGGGG.
             GgGgGgggGGgGg gGGggGGggGggg'GggGgggG ggGGgggggGGgggGGGGgggGGGGG "GgGGGggGGGggGggG gGGgGgggggGGGGggGGGggGgggGGgg" gGGggGGggGggg'GggGgggG GggGgggGgGGgGggggGGggGGggGgGGGGgggGGGGG gGgGGGg gGgGGGGggggG gGgGggggggGgGgGggGGgGgggGGgGGGGggGGGGgGG GGGGGGggGGGggGgggGgGgGgGgGGGGgggGGGGG GGggGGgGg gGGgGGGGGGGgGggGgGGgGGGggGGGGgGgggggggggG, gGggGGGGggGGGGgGGGGGg gGGGGgggGgGGggGgggGgggGgGgggggGggGG gGgGGGGggGGGGgggGGGGGggGG gGGgGgGggGGGgGGGGg GggggGggggGgGGgGGGggGggggGgGGggGgGGgggGGggGggGG gGgGGGg GgGgGGggGgggGggggggG ggGgGgggggggGGggggGG gGgGGGg GggGgggggGGgGGGggggGGgggggGG.
             gGGgGGGGggGGg gGGggGGggGgggGggG GggGgggGggggggGGGGgGggggGGGGgggGGGGG gGGgGgGGgGggG GgGGggggggGggggGgggGGGGgggGGGGG gggg ggGgGggggggGgGGggGgGGGgGgggggggGggG gggg GgGGGggGGGggGggG gGGGggGG GgGgGGgggGGgGGgggggGgggggGGgggG GggGggggGgggGgGggGGgGGGGg GgGgGgGgggGGGgGgGgGgGggGgggggG "GgGGggggggGggggGgg gGgGGGGggggG GgGgGGggGggggggGgGGggGgGG GGgGggggggGggGG GgGGGggGGGggGggGggGG?" ggGgGgGGgGgggGgGgG'ggGG GGGGGgggGgGgG GGGGGGggGggggGgGGggGgGGggGgggggGggGG ggggGgggGgGgg GgGgGGggGggggggGgGGggGgGGGgGgGGgGGGGggGGgGggggGG gGGGGggg gGgGGGGggggGGggGgggG, gGgGGGGggggGGggg, gGgGGGgGGg.
             gGGgGGggggGggggGGGGg, GgGGggggggGggggGgggGGGGgggGGGGG ggGGGGgGGGGggggGGGgGggggggG gggg GGGggGgggGGGGgggggGggg GGgGggG ggggGggg ggggGgGgGgGgggG? GgGgGgggGgG'ggGG GgggGGggGgG GGgGggggggG GGgGggG gGgGGGGggggG GGggGgGGGGggggGGggG, gGgGGGGggggggGgG'ggGG GgggGGggGgG GGGgGGggGggG gGgGggggggGgGgGggGGgGgggGGgGGGGggGGgg gGggGGGgGggGggGgGGggGG. ggGgGgGgGGGGggggGgGGgg'GggGgggG GgGgGGGGggGgGGGGg. gGGgGGgg ggGgGggggggGgGGggGgGGGgGgggggggGggG gGGGggGG gggg ggGgGggggggGgGGggGgGGGgGgggggggGggG ggggGgggGgGgg gggg GGGGggggGGGGGgGgGgGGgggGGggG GGggGGgGg gGgGGGGggggG GgGGGggGGGggGggG gGGgGgggggGGGGggGGGggGgggGGgg. ggGgGgGGgggGggggGgG gGgGGGGggggggGgG'ggGG GgggGGggGgG gGggGGGGggggggGgG gGGggGGggGggg ggGGgggggGGGGgGgg. gGGgGGgGGGggGggg ggGGgggggGGGGgGgg gggg ggGgGggggggGgGGggGgGGGgGgggggggGggG gGGGggGG gggg GgGGGggGGGggGggG, gGggGGGGggGGGGgGGGGGg gGGGggGG GgggGGggGgG gGgGGggGgGggggggG gGgggGgggggGgggggGggGGggGG gGGggGGggGggg'GggGgggG GGgggGgGGgggggGGgg gGggGgGGGgGgGGGGg GgGGggggggGggggGgggGGGGgggGGGGG ggggggGggggGgg GGGGggggGGGGGgGgGgGGgggGGggGggGG GGggGGgGg gGgGGGGggggG GgGGGggGGGggGggG gGGgGgggggGGGGggGGGggGgggGGgg GgGGGggGGGggGggGggGG, gGggGGGGggGGGGgGGGGGg GGGGggggGggggGgggggGG gGGggGGggGggg'GgGgg GgGGggggggGggggGgg GgGgGGggGgggGggggggG ggGgGgggggggGGggggGG, GggGgggggGGgGGGggggGGgggggGG, ggggGgggGgGgg GGggGgGGGGggggGGggG GgGgGGgGGGGggGGgGggggGG GgGGGggGGGggGggGggGG, gGgGGGgGGg. ggGgGgGGGGGGGggGGGGgGGGGGg gGGggGGggGggg ggGGgggggGGGGgGgg gGGggGGggGggg GgGggGGgGggg'gGgG.
             GgGgGgggGgG'ggGG GGgggGgGGgggggGGgg gGgGGGg ggGgGgggGgggggGGgGgG ggggGgGggGGGGggGGGgGgG gGGggGGggGggg'GggGgggG gGggGGggGGGgGgggGGGGG, gGGggGGggGggg ggGgGGGgggGGggGggG?`;
		console.log(`%cDecode Back Into: -> `, "color : red;");
		console.log(decodeAll(input));
	});
})();