/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a character is a word character
		 * @param {char} [char] - character to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isWordChar(char) {
			return !/\W/.test(char);
		}
		/**
		 * check if a character is a vowel
		 * @param {char} [char] - character to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isVowel(char) {
			return new Set("AEIOUYÅÄÖ").has(char.toUpperCase());
		}
		/**
		 * check if a character is a consonant
		 * @param {char} [char] - character to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isConsonant(char) {
			return isWordChar(char) && !isVowel(char);
		}
		/**
		 * encode sentence into Rövarspråket
		 * @param {String} [sentence] - sentence to be encoded
		 *
		 * @return {String} [encoded sentence]
		 */
		function encode(sentence) {
			return sentence.split("")
										 .map(char => isConsonant(char) ? char + "o" + char.toLowerCase() : char)
										 .join("");
		}
		/**
		 * decode sentence back into normal English sentence
		 * @param {String} [sentence] - sentence to be decoded
		 *
		 * @return {String} [decoded sentence]
		 */
		function decode(sentence) {
			for(let i = 0; i < sentence.length; i++) {
				sentence = isConsonant(sentence[i]) ? sentence.slice(0, i + 1) + sentence.slice(i + 3) : sentence;
			}
			return sentence;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "Jag talar Rövarspråket!";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${encode(input)}`, "color : orange;");
		input = "I'm speaking Robber's language!";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${encode(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "Tre Kronor är världens bästa ishockeylag."; 
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${encode(input)}`, "color : orange;");
		input = "Vår kung är coolare än er kung.";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${encode(input)}`, "color : orange;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = "Jojagog totalolaror Rorövovarorsospoproråkoketot!";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${decode(input)}`, "color : orange;");
		input = "I'mom sospopeakokinongog Rorobobboberor'sos lolanongoguagoge!";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${decode(input)}`, "color : orange;");
		input = "Totrore Kokrorononoror äror vovärorloldodenonsos bobäsostota isoshohocockokeylolagog.";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${decode(input)}`, "color : orange;");
		input = "Vovåror kokunongog äror cocoololarore änon eror kokunongog.";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${decode(input)}`, "color : orange;");
	});
})();		