/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create word snake
		 * @param {String} [words] - words used to create word snake
		 *
		 * @return {String} [word snake]
		 */
		function makeSnake(words) {
			words = words.match(/[a-zA-Z]+/g);
			let wordSnake = words[0] + "\n", width = words[0].length - 1;
			for(let i = 1; i < words.length; i++) {
				if(i % 2) {
					for(let j = 1; j < words[i].length; j++) {
						wordSnake += " ".repeat(width) + words[i][j] + (j == words[i].length - 1 ? "" : "\n");
					}
					continue;
				}
				wordSnake += words[i].slice(1) + "\n";
				width += words[i].length - 1;
			}
			return wordSnake;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `SHENANIGANS SALTY YOUNGSTER ROUND DOUBLET TERABYTE ESSENCE`;
		console.log(`%c${makeSnake(input)}`, "color : orange;");
		input = `DELOREAN NEUTER RAMSHACKLE EAR RUMP PALINDROME EXEMPLARY YARD`;
		console.log(`%c${makeSnake(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `CAN NINCOMPOOP PANTS SCRIMSHAW WASTELAND DIRK KOMBAT TEMP PLUNGE ESTER REGRET TOMBOY`;
		console.log(`%c${makeSnake(input)}`, "color : orange;");
		input = `NICKEL LEDERHOSEN NARCOTRAFFICANTE EAT TO OATS SOUP PAST TELEMARKETER RUST THINGAMAJIG GROSS SALTPETER REISSUE ELEPHANTITIS`;
		console.log(`%c${makeSnake(input)}`, "color : orange;");
	});
})();			