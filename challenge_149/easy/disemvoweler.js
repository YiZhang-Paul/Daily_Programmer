/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * remove vowels of sentence
		 * @param {String} [sentence] - sentence to remove vowels from
		 *
		 * @return {Array} [non-vowel and vowel characters]
		 */
		function disemvowel(sentence) {
			let [nonVowel, vowel] = [sentence.match(/[^\Waeiou]/gi), sentence.match(/[aeiou]/gi)];
			return [nonVowel.join(""), vowel.join("")];
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "two drums and a cymbal fall off a cliff";
		let result = disemvowel(input);
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%cNon-vowel -> %c${result[0]}`, "color : skyblue;", "color : orange;");
		console.log(`%cVowel -> %c${result[1]}`, "color : skyblue;", "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "all those who believe in psychokinesis raise my hand";
		result = disemvowel(input);
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%cNon-vowel -> %c${result[0]}`, "color : skyblue;", "color : orange;");
		console.log(`%cVowel -> %c${result[1]}`, "color : skyblue;", "color : orange;");
		input = "did you hear about the excellent farmer who was outstanding in his field";
		result = disemvowel(input);
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%cNon-vowel -> %c${result[0]}`, "color : skyblue;", "color : orange;");
		console.log(`%cVowel -> %c${result[1]}`, "color : skyblue;", "color : orange;");
	});
})();		