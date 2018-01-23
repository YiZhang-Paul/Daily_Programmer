/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {

		class Trie {

			constructor(words) {

				this.root = {};
				this.addList(words);
			}

			add(word) {

				let node = this.root;

				for(let i = 0; i < word.length; i++) {

					if(!node.hasOwnProperty(word[i])) {

						node[word[i]] = {};
					}

					node = node[word[i]];
				}
			}

			addList(words) {

				words.forEach(word => {

					this.add(word);
				});
			}

			traverse(word) {

				let node = this.root;

				for(let i = 0; i < word.length; i++) {

					if(!node.hasOwnProperty(word[i])) {

						return null;
					}

					node = node[word[i]];
				}

				return node;
			}

			isPrefix(word) {

				let node = this.traverse(word);

				if(node === null) {

					return false;
				}

				return Object.keys(node).length > 0;
			}
		}

		class Embedder {

			isEmbedded(suspect, reference) {

				if(suspect.length >= reference.length) {

					return suspect === reference;
				}

				for(let i = 0, j = 0; i < reference.length; i++) {

					if(reference[i] !== suspect[j]) {

						continue;
					}

					if(++j === suspect.length) {

						return true;
					}
				}

				return false;
			}

			getCommonLetters(word1, word2) {

				return Array.from(word1).filter(letter => word2.includes(letter));
			}

			getRange(start, count) {

				let range = new Array(count).fill(0);

				return range.map((number, index) => index + start);
			}

			getCombination(options, total, current = [], combinations = []) {

				if(current.length === total || options.length === 0) {

					if(current.length === total) {

						combinations.push(current);
					}

					return [[]];
				}

				for(let i = 0; i < options.length; i++) {

					let otherOptions = options.slice(i + 1);
					let newCurrent = [...current, options[i]];
					this.getCombination(otherOptions, total, newCurrent, combinations);
				}

				return combinations;
			}

			excludeIndexes(array, indexes) {

				indexes = new Set(indexes);

				return array.filter((item, index) => !indexes.has(index));
			}

			tryExcludePattern(pattern, word, depth = 2) {

				let indexes = this.getRange(0, pattern.length);

				for(let i = 0; i < Math.min(depth, pattern.length); i++) {

					let excludes = this.getCombination(indexes, i);

					for(let j = 0; j < excludes.length; j++) {

						let remain = this.excludeIndexes(pattern, excludes[j]);

						if(this.isEmbedded(remain.join(""), word)) {

							return remain;
						}
					}
				}

				return null;
			}

			trySlicePattern(pattern, word) {

				for(let i = 1; i < pattern.length; i++) {

					let remain = pattern.slice(i);

					if(this.isEmbedded(remain.join(""), word)) {

						return remain;
					}
				}

				return null;
			}

			maxCommonPattern(word1, word2) {

				let common = this.getCommonLetters(word1, word2);
				let pattern = this.tryExcludePattern(common, word2);

				return pattern === null ? this.trySlicePattern(common, word2) : pattern;
			}

			segmentize(word, breakpoints) {

				let segments = [];

				for(let i = 0; i < breakpoints.length; i++) {

					const index = word.indexOf(breakpoints[i]) + 1;
					segments.push(word.slice(0, index));
					word = word.slice(index);
				}

				segments[segments.length - 1] += word;

				return segments;
			}

			replace(word, index, toReplace) {

				return word.slice(0, index) + toReplace + word.slice(index + 1);
			}

			embed(toEmbed, embedded) {

				let pattern = this.maxCommonPattern(toEmbed, embedded);
				let segments = this.segmentize(toEmbed, pattern);

				for(let i = 0, index = -1; i < pattern.length; i++) {

					index = embedded.indexOf(pattern[i], index + 1);
					embedded = this.replace(embedded, index, segments[i]);
				}

				return embedded;
			}
		}

		function toList(words) {

			return words.split("\n")
						.map(word => word.trim().toLowerCase())
						.filter(word => /\w/.test(word));
		}

		function getWords(url) {

			return new Promise((resolve, reject) => {

				let xhttp = window.XMLHttpRequest ?
					new window.XMLHttpRequest() :
					new ActiveXObject("Microsoft.XMLHTTP");

				xhttp.onreadystatechange = function() {

					if(this.readyState === 4 && this.status === 200) {

						resolve(toList(this.responseText));
					}
				};

				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}

		function orderByAscending(numbers) {

			return numbers.sort((a, b) => a - b);
		}

		function orderByDescending(words) {

			return words.sort((a, b) => b.length - a.length);
		}

		function excludeIndex(text, index) {

			return text.slice(0, index) + text.slice(index + 1);
		}

		function removePrefix(words) {

			let trie = new Trie(words);

			return words.filter(word => !trie.isPrefix(word));
		}

		function pickShorter(word1, word2) {

			return word1.length < word2.length ? word1 : word2;
		}

		function getUsedIndexes(indexes, embedded) {

			indexes = orderByAscending(Array.from(indexes));

			return indexes.map(index => embedded[index]).join("");
		}

		function removeUnused(words, embedded, embedder) {

			let indexes = new Set();
			let used = "";

			for(let i = 0; i < words.length; i++) {

				if(embedder.isEmbedded(words[i], used)) {

					continue;
				}

				for(let j = 0, index = -1; j < words[i].length; j++) {

					index = embedded.indexOf(words[i][j], index + 1);
					indexes.add(index);
				}

				used = getUsedIndexes(indexes, embedded);
			}

			return used;
		}

		function trimEmbed(words, embedded) {

			for(let i = embedded.length - 1; i >= 0; i--) {

				const trimed = excludeIndex(embedded, i);

				if(isValidEmbed(trimed, words)) {

					embedded = trimed;
				}
			}

			return embedded;
		}

		function embed(words) {

			let embedder = new Embedder();
			words = orderByDescending(removePrefix(words));
			let embedded = words[0];

			for(let i = 1; i < words.length; i++) {

				if(embedder.isEmbedded(words[i], embedded)) {

					continue;
				}

				embedded = pickShorter(embedder.embed(words[i], embedded), embedder.embed(embedded, words[i]));
			}

			return trimEmbed(words, removeUnused(words, embedded, embedder));
		}

		function isValidEmbed(embed, words) {

			let embedder = new Embedder();

			return words.every(word => embedder.isEmbedded(word, embed));
		}

		function showOutput(url) {

			getWords(url).then(words => {

				const time = new Date().getTime();

				const embedded = embed(words);
				console.log(embedded, embedded.length);

				console.log(`%cTime Spent: ${new Date().getTime() - time}ms`, "color : yellow");

				const isValid = isValidEmbed(embedded, words);
				console.log(`%cIs Valid Result: %c${isValid}`, "color : yellow", "color : " + (isValid ? "lime;" : "red;"));

			}).catch(error => {console.log(error);});
		}

		//default input
		showOutput("defaultInput.txt");
		//challenge input
		showOutput("wordList.txt");
	});
})();