/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get letter position in alphabet
		 * @param char
		 *
		 * letter : letter to be examined
		 *
		 * returns int
		 */
		function getPosition(letter) {
			return letter.toUpperCase().charCodeAt() - 64;
		} 
		/**
		 * calculate letter weight
		 * @param int, int
		 *
		 * distance : letter distance to balance point
		 * position : letter position in alphabet
		 *
		 * returns int
		 */
		function getCharWeight(distance, position) {
			return distance * position;
		} 
		/**
		 * calculate total weight for a group of letters
		 * @param array [], String
		 *
		 * letters   : letters to be examined
		 * direction : direction relative to balance point
		 * 
		 * returns int
		 */
		function totalWeight(letters, direction) {
			let chars = direction.toLowerCase() == "l" ? letters.slice().reverse() : letters.slice();
			return chars.reduce((acc, val, index) => 
				acc + getCharWeight(index + 1, getPosition(val)), 0);
		} 
		/**
		 * find balance point for a word
		 * @param String
		 *
		 * word : word to be examined
		 *
		 * returns String
		 */
		function findBalance(word) {
			let chars = word.split("");
			for(let i = 1; i < word.length - 1; i++) {
				let [left, right] = [chars.slice(0, i), chars.slice(i + 1)];
				let [lWeight, rWeight] = [totalWeight(left, "l"), totalWeight(right, "r")];
				if(lWeight == rWeight) {
					return `${left.join("")} ${word[i]} ${right.join("")} - ${lWeight}`;
				}
			}
			return `${word} Does Not Balance.`;
		} 
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		console.log(findBalance("STEAD"));
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(findBalance("CONSUBSTANTIATION"));
		console.log(findBalance("WRONGHEADED"));
		console.log(findBalance("UNINTELLIGIBILITY"));
		console.log(findBalance("SUPERGLUE"));
	});
})();		