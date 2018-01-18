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

			return Array.from(subWords);
		}

		function isSubWord(subWord, words) {

			return words.some(word => word.includes(subWord));
		}

		function hasSubWord(word, subWords) {

			return subWords.some(subWord => word.includes(subWord));
		}

		function removeSubWord(word, subWord, overlap) {

			return word.length === subWord.length ? "" : word.slice(subWord.length - overlap);
		}

		function excludeElement(array, index) {

			return [...array.slice(0, index), ...array.slice(index + 1)];
		}

		function findLongest(arrays) {

			return arrays.sort((a, b) => b.length - a.length)[0];
		}

		function findBestConjunction(word, minSize, allWords, fixedOverlap = 0, allowAnyOverlap = false) {

			let subWords = findSubWords(word, minSize, allWords);
			let conjunctions = allowAnyOverlap ?
				findConjunctionsWithAnyOverlap(word, subWords) :
				findConjunctionsWithGivenOverlap(word, subWords, fixedOverlap);

			return findLongest(conjunctions);
		}

		function findConjunctionsWithGivenOverlap(word, subWords, overlap, current = [], conjunctions = []) {

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

				const wordRemain = removeSubWord(word, subWords[i], overlap);
				let subWordRemain = excludeElement(subWords, i);
				let newCurrent = [...current, subWords[i]];
				findConjunctionsWithGivenOverlap(wordRemain, subWordRemain, overlap, newCurrent, conjunctions);
			}

			return conjunctions;
		}

		function getRange(start, length) {

			let range = new Array(length).keys();

			return Array.from(range).map(value => value + start);
		}

		function isValidConjunction(subWord, conjunctions, indexCovered, allIndexCovered) {

			if(hasSubWord(subWord, conjunctions) || isSubWord(subWord, conjunctions)) {

				return false;
			}

			return !allIndexCovered.length || allIndexCovered.includes(indexCovered[0]);
		}

		function findConjunctionsWithAnyOverlap(word, subWords, indexCovered = [], current = [], conjunctions = []) {

			if(indexCovered.length === word.length) {

				conjunctions.push(current);

				return null;
			}

			for(let i = 0; i < subWords.length; i++) {

				let covered = getRange(word.indexOf(subWords[i]), subWords[i].length);

				if(!isValidConjunction(subWords[i], current, covered, indexCovered)) {

					continue;
				}

				let subWordRemain = subWords.slice(i + 1);
				let newIndexCovered = Array.from(new Set([...indexCovered, ...covered]));
				let newCurrent = [...current, subWords[i]];
				findConjunctionsWithAnyOverlap(word, subWordRemain, newIndexCovered, newCurrent, conjunctions);
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
			let word, minSize;
			console.log(`%cDefault Input: `, "color : red;");
			word = "something", minSize = 2;
			showResult(word, minSize, findBestConjunction(word, minSize, words));
			word = "awesomeness", minSize = 2;
			showResult(word, minSize, findBestConjunction(word, minSize, words));

			//challenge input
			console.log(`%cChallenge Input: `, "color : red;");
			word = "disproportionateness", minSize = 3;
			showResult(word, minSize, findBestConjunction(word, minSize, words));
			word = "dishonorableness", minSize = 4;
			showResult(word, minSize, findBestConjunction(word, minSize, words));
			word = "sotto", minSize = 2;
			showResult(word, minSize, findBestConjunction(word, minSize, words));

			//bonus input
			console.log(`%cBonus Input: `, "color : red;");
			word = "counterrevolutionary", minSize = 4;
			showResult(word, minSize, findBestConjunction(word, minSize, words, 1));
			word = "consciencestricken", minSize = 4;
			showResult(word, minSize, findBestConjunction(word, minSize, words, 0, true));
			console.log(`Time Spent: ${new Date().getTime() - time}ms`);
		});
  	});
})();