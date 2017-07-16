/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * shuffle an array of items using 
		 * Fisher-Yates shuffles
		 * @param array [], array []
		 *
		 * items    : items to be shuffled
		 * shuffled : shuffled array
		 *
		 * returns array []
		 */ 
		function fisherYatesShuffle(items, shuffled = []) {
			if(!items.length) {
				return shuffled;
			}
			let index = Math.floor(Math.random() * items.length);
			return fisherYatesShuffle([...items.slice(0, index), ...items.slice(index + 1)], [...shuffled, items[index]]);
		} 
		console.log(`%cFisher-Yates Shuffles: `, "color : red;");
		let input = [1, 2, 3, 4, 5, 6, 7, 8];
		console.log(`%c${input.join(" ")}`, "color : yellow;");
		console.log(fisherYatesShuffle(input).join(" "));
		console.log(fisherYatesShuffle(input).join(" "));
		console.log(fisherYatesShuffle(input).join(" "));
		input = ["apple", "blackberry", "cherry", "dragonfruit", "grapefruit", "kumquat", "mango", "nectarine", "persimmon", "raspberry", "raspberry"];
		console.log(`%c${input.join(" ")}`, "color : yellow;");
		console.log(fisherYatesShuffle(input).join(" "));
		console.log(fisherYatesShuffle(input).join(" "));
		console.log(fisherYatesShuffle(input).join(" "));
		input = ["a", "e", "i", "o", "u"];
		console.log(`%c${input.join(" ")}`, "color : yellow;");
		console.log(fisherYatesShuffle(input).join(" "));
		console.log(fisherYatesShuffle(input).join(" "));
		console.log(fisherYatesShuffle(input).join(" "));
		//console.log(`%cDurstenfeld Shuffles: `, "color : red;");
		//input = [1, 2, 3, 4, 5, 6, 7, 8];
		//console.log(`%c${input.join(" ")}`, "color : yellow;");
		//input = ["apple", "blackberry", "cherry", "dragonfruit", "grapefruit", "kumquat", "mango", "nectarine", "persimmon", "raspberry", "raspberry"];
		//console.log(`%c${input.join(" ")}`, "color : yellow;");
		//input = ["a", "e", "i", "o", "u"];
		//console.log(`%c${input.join(" ")}`, "color : yellow;");
		//console.log(`%cFaro Shuffles(out): `, "color : red;");
		//input = [1, 2, 3, 4, 5, 6, 7, 8];
		//console.log(`%c${input.join(" ")}`, "color : yellow;");
		//input = ["apple", "blackberry", "cherry", "dragonfruit", "grapefruit", "kumquat", "mango", "nectarine", "persimmon", "raspberry", "raspberry"];
		//console.log(`%c${input.join(" ")}`, "color : yellow;");
		//input = ["a", "e", "i", "o", "u"];
		//console.log(`%c${input.join(" ")}`, "color : yellow;");
		//console.log(`%cFaro Shuffles(in): `, "color : red;");
		//input = [1, 2, 3, 4, 5, 6, 7, 8];
		//console.log(`%c${input.join(" ")}`, "color : yellow;");
		//input = ["apple", "blackberry", "cherry", "dragonfruit", "grapefruit", "kumquat", "mango", "nectarine", "persimmon", "raspberry", "raspberry"];
		//console.log(`%c${input.join(" ")}`, "color : yellow;");
		//input = ["a", "e", "i", "o", "u"];
		//console.log(`%c${input.join(" ")}`, "color : yellow;");
	});
})();		