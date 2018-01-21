/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {

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

		console.log(isEmbedded("aa", "a") === false);
		console.log(isEmbedded("aa", "aa") === true);
		console.log(isEmbedded("aa", "ac") === false);
		console.log(isEmbedded("aa", "abda") === true);
		console.log(isEmbedded("aa", "abad") === true);
		console.log(isEmbedded("aa", "abcd") === false);

		getWords("wordList.txt").then(list => {

			console.log(list);

		}).catch(error => {console.log(error);});
	});
})();