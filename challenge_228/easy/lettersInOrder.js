/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if word letters are arranged
		 * in alphabetical orders or reversed
		 * alphabetical orders
		 * @param String
		 *
		 * word : word to be examined
		 *
		 * returns String
		 */
		//solution 1
		function checkOrder1(word) {
			let inOrder = true, reversed = true;
			for(let i = 0; i < word.length - 1; i++) {
				inOrder = inOrder ? word[i].charCodeAt() <= word[i + 1].charCodeAt() : false;
				reversed = reversed ? word[i].charCodeAt() >= word[i + 1].charCodeAt() : false;
				if(!inOrder && !reversed) {
					return "NOT IN ORDER";
				}
			}
			return inOrder ? "IN ORDER" : "REVERSE ORDER";
		} 
		//solution 2
		function checkOrder2(word) {
			let ordered = word.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
			return word == ordered ? "IN ORDER" : (word == ordered.split("").reverse().join("") ? "REVERSE ORDER" : "NOT IN ORDER");
		}
		console.log(`%cSolution 1: `, "color : red;");
		//default input
		console.log(`%cDefault Input: `, "color : orange;");
		let input = "almost";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
		input = "cereal";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : orange;");
    input = "billowy";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
    input = "biopsy";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
    input = "chinos";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
    input = "defaced";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
    input = "chintz";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
    input = "sponged";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
    input = "bijoux";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
    input = "abhors";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
    input = "fiddle";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
    input = "begins";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
    input = "chimps";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
    input = "wronged";
		console.log(`${input} %c${checkOrder1(input)}`, "color : yellow;");
		console.log(`%cSolution 2: `, "color : red;");
		//default input
		console.log(`%cDefault Input: `, "color : orange;");
		input = "almost";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
		input = "cereal";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : orange;");
    input = "billowy";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
    input = "biopsy";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
    input = "chinos";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
    input = "defaced";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
    input = "chintz";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
    input = "sponged";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
    input = "bijoux";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
    input = "abhors";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
    input = "fiddle";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
    input = "begins";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
    input = "chimps";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
    input = "wronged";
		console.log(`${input} %c${checkOrder2(input)}`, "color : yellow;");
	});
})();		