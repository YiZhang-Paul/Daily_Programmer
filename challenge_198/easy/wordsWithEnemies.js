/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * count letters in a word
		 * @param {String} [word] - word to be counted
		 *
		 * @return {Object} [letter count of the word]
		 */
		function countLetter(word) {
			let count = {};
			for(let i = 0; i < word.length; i++) {
				count[word[i]] = count[word[i]] ? count[word[i]] + 1 : 1;
			}
			return count;
		}
		/**
		 * print out remaining letter of a word
		 * @param {Object} [count] - count of remaining letters
		 *
		 * @return {String} [remaining letters]
		 */
		function remainLetter(count) {
			return Object.keys(count).reduce((acc, val) => acc + val.repeat(count[val]), "");
		}
		/**
		 * cancel letters in each word
		 * @param {String} [word1] - word 1
		 * @param {String} [word2] - word 2
		 *
		 * @return {Array} [words after canceling out]
		 */
		function cancelWord(word1, word2) {
			let [count1, count2] = [word1, word2].map(countLetter);
			for(let letter in count1) {
				if(count2[letter]) {
					const cancel = Math.min(count1[letter], count2[letter]);
					count1[letter] -= cancel;
					count2[letter] -= cancel;
				}
			}
			return [count1, count2].map(remainLetter);
		}
		/**
		 * fire word at each other
		 * @param {String} [word1] - word 1
		 * @param {String} [word2] - word 2
		 *
		 * @return {Array} [game result]
		 */
		function fireWord(word1, word2) {
			const [remain1, remain2] = cancelWord(word1, word2);
			const [winCount, loseCount] = [remain1.length, remain2.length].sort((a, b) => b - a);
			const result = remain1.length == remain2.length ? "Tie" : (remain1.length > remain2.length ? "Left" : "Right");
			return `Remain -> Left: ${remain1}, Right: ${remain2}\nResult -> ${result == "Tie" ? "Tie" : result + " Side Wins " + winCount + " Letters to " + loseCount + " Letters Donated."}`;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "hat cat";
		console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
		input = "miss hiss";
		console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
 		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
    input = "because cause";
    console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
    input = "hello below";
    console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
    input = "hit miss";
    console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
    input = "rekt pwn";
    console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
    input = "combo jumbo";
    console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
    input = "critical optical";
    console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
    input = "isoenzyme apoenzyme";
    console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
    input = "tribesman brainstem";
    console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
    input = "blames nimble";
    console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
    input = "yakuza wizard";
    console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
    input = "longbow blowup";		
    console.log(`%c${input}: `, "color : skyblue;");
		console.log(`%c${fireWord(...input.split(" "))}`, "color : orange;");
	});
})();		