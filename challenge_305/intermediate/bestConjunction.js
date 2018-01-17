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

						let words = formatWords(this.responseText);
						resolve(new Set(words));
					}
				};

				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}

		function addSubWords(word, minSize, allWords, subWords) {

			for(let i = minSize; i <= word.length; i++) {

				const subWord = word.slice(0, i);

				if(allWords.has(subWord)) {

					subWords.add(subWord);
				}
			}
		}

		function findSubWords(word, minSize, allWords) {

			let subWords = new Set();

			for(let i = 0; i <= word.length - minSize; i++) {

				addSubWords(word.slice(i), minSize, allWords, subWords);
			}

			return [...subWords];
		}

		function hasSubWord(word, subWords) {

			return subWords.some(subWord => word.includes(subWord));
		}

		function removeSubWord(word, subWord) {

			return word.replace(subWord, "");
		}

		function excludeElement(array, index) {

			return [...array.slice(0, index), ...array.slice(index + 1)];
		}

		function findLongestArray(arrays) {

			return arrays.sort((a, b) => b.length - a.length)[0];
		}

		function findBestConjunction(word, minSize, allWords) {

			let subWords = findSubWords(word, minSize, allWords);

			return findLongestArray(findConjunctions(word, subWords));
		}

		function findConjunctions(word, subWords, current = [], conjunctions = []) {

			if(!hasSubWord(word, subWords)) {

				if(word.length === 0) {

					conjunctions.push(current);
				}

				return null;
			}

			for(let i = 0; i < subWords.length; i++) {

				if(word.indexOf(subWords[i]) !== 0) {

					continue;
				}

				const otherLetter = removeSubWord(word, subWords[i]);
				let otherSubWord = excludeElement(subWords, i);
				let newCurrent = [...current, subWords[i]];
				findConjunctions(otherLetter, otherSubWord, newCurrent, conjunctions);
			}

			return conjunctions;
		}

		function showResult(word, minSize, result) {

			console.log(`%cMinimum Size ${minSize}: ${word} (${result.length} words: ${result.join(", ")})`, "color : yellow;");
		}

		//challenge & bonus input
		getWords("wordList.txt").then(words => {

			//default input
			let time = new Date().getTime();
			console.log(`%cDefault Input: `, "color : red;");
			showResult("something", 2, findBestConjunction("something", 2, words));
			showResult("awesomeness", 2, findBestConjunction("awesomeness", 2, words));

			//challenge input
			console.log(`%cChallenge Input: `, "color : red;");
			showResult("disproportionateness", 3, findBestConjunction("disproportionateness", 3, words));
			showResult("dishonorableness", 4, findBestConjunction("dishonorableness", 4, words));

			console.log(`%cBonus Input: `, "color : red;");
			console.log(`Time Spent: ${new Date().getTime() - time}ms`);
		});
  	});
})();