/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {

		class Trie {

			constructor(words) {

				this.root = {};

				if(words.length > 0) {

					this.addWords(words);
				}
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

			addWords(words) {

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

		function formatWords(words) {

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

						resolve(formatWords(this.responseText));
					}
				};

				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}

		function isEmbedded(suspect, reference) {

			if(reference.length <= suspect.length) {

				return reference === suspect;
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

		getWords("wordList.txt").then(list => {

			const time = new Date().getTime();

			let trie = new Trie(list);
			console.log(trie);

			console.log(`Time Spent: ${new Date().getTime() - time}ms`);

		}).catch(error => {console.log(error);});
	});
})();