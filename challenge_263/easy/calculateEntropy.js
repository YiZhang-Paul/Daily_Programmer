/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * calculate Shannon Entropy
		 * @param {String} [sequence] - sequence to be evaluated
		 * @param {int} [decimal] - number of decimal places to leave 
		 *
		 * @return {float} [calculated entropy]
		 */
		function calculateEntropy(sequence, decimal = 5) {
			let entropy = Array.from(new Set(sequence)).reduce((acc, char) => {
				let occurrence = sequence.split("").filter(letter => letter == char).length;
				return acc + -(occurrence / sequence.length * Math.log2(occurrence / sequence.length));
			}, 0);
			return Math.round(entropy * Math.pow(10, decimal)) / Math.pow(10, decimal);
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "1223334444";
		console.log(`%c${input} -> %c${calculateEntropy(input)}`, "color : skyblue;", "color : orange;");
    input = "Hello, world!";
		console.log(`%c${input} -> %c${calculateEntropy(input)}`, "color : skyblue;", "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "122333444455555666666777777788888888";
		console.log(`%c${input} -> %c${calculateEntropy(input, 9)}`, "color : skyblue;", "color : orange;");
		input = "563881467447538846567288767728553786";
		console.log(`%c${input} -> %c${calculateEntropy(input, 9)}`, "color : skyblue;", "color : orange;");
		input = "https://www.reddit.com/r/dailyprogrammer";
		console.log(`%c${input} -> %c${calculateEntropy(input, 9)}`, "color : skyblue;", "color : orange;");
		input = "int main(int argc, char *argv[])";
		console.log(`%c${input} -> %c${calculateEntropy(input, 9)}`, "color : skyblue;", "color : orange;");
	});
})();		