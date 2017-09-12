/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * scramble a word
		 * @param {String} [word] - word to be scrambled
		 *
		 * @return {String} [scrambled word]
		 */
		function scrambleWord(word) {
			const letters = word.slice(1, word.length - 1).match(/[a-zA-Z]/g);
			let scrambled = "";
			for(let i = 0; i < word.length - 2; i++) {
				if(word[scrambled.length + 1] == "'") {
					scrambled += "'";
					continue;
				}
				scrambled += letters.splice(Math.floor(Math.random() * letters.length), 1)[0];
			}
			return (scrambled.length == 2 && /'/.test(scrambled)) || scrambled != word.slice(1, word.length - 1) ? 
				word[0] + scrambled + word[word.length - 1] : scrambleWord(word);
		}
		/**
		 * scramble words in sentence
		 * @param {String} [sentence] - sentence to be scrambled
		 *
		 * @return {String} [scrambled sentence]
		 */
		function scrambleSentence(sentence) {
			return sentence.replace(/[a-zA-Z']{4,}/g, scrambleWord);
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place. The rest can be a total mess and you can still read it without a problem. This is because the human mind does not read every letter by itself, but the word as a whole. Such a condition is appropriately called Typoglycemia.`;		
		console.log(`%c${input}`, "color : skyblue;");
		console.log(`%cScramble Into -> `, "color : red;");
		console.log(`%c${scrambleSentence(input)}`, "color : orange;");
	});
})();		