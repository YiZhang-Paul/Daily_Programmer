/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {

		function toList(words) {

			return words.split("\n")
						.map(word => word.trim())
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

		function embed(words) {

			words = orderByDescending(removePrefix(words));
			let result = words[0];
			let embedder = new Embedder();

			words.slice(1).forEach(word => {

				if(!embedder.isEmbedded(word, result)) {

					result = getShorter(embedder.embed(word, result), embedder.embed(result, word));
				}
			});

			return result;
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