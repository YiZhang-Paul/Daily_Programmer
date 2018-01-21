/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {

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

		function orderByAscending(words) {

			return words.sort((a, b) => a - b);
		}

		function orderByDescending(words) {

			return words.sort((a, b) => b.length - a.length);
		}

		function removePrefix(words) {

			let trie = new Trie(words);

			return words.filter(word => !trie.isPrefix(word));
		}

		function getShorter(word1, word2) {

			return word1.length < word2.length ? word1 : word2;
		}

		function includeLetterAtIndex(indexes, embedded) {

			indexes = orderByAscending(Array.from(indexes));

			return indexes.map(index => embedded[index]).join("");
		}

		function trimEmbed(words, embedded, embedder) {

			let indexes = new Set();

			for(let i = 0; i < words.length; i++) {

				for(let j = 0, index = -1; j < words[i].length; j++) {

					index = embedded.indexOf(words[i][j], index + 1);
					indexes.add(index);
				}
			}

			return includeLetterAtIndex(indexes, embedded);
		}

		function embed(words) {

			let embedder = new Embedder();
			words = orderByDescending(removePrefix(words));
			let embedded = words[0];

			for(let i = 1; i < words.length; i++) {

				if(embedder.isEmbedded(words[i], embedded)) {

					continue;
				}

				embedded = getShorter(embedder.embed(words[i], embedded), embedder.embed(embedded, words[i]));
			}

			return trimEmbed(words, embedded, embedder);
		}

		function isValidEmbed(embed, words) {

			let embedder = new Embedder();

			return words.every(word => embedder.isEmbedded(word, embed));
		}

		getWords("wordList.txt").then(words => {

			const time = new Date().getTime();

			const embedded = embed(words);
			console.log(embedded, embedded.length);

			console.log(`%cTime Spent: ${new Date().getTime() - time}ms`, "color : yellow");

			const isValid = isValidEmbed(embedded, words);
			console.log(`%cIs Valid Result: %c${isValid}`, "color : yellow", "color : " + (isValid ? "lime;" : "red;"));

		}).catch(error => {console.log(error);});
	});
})();