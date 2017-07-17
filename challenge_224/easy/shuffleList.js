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
			let otherItem = [...items.slice(0, index), ...items.slice(index + 1)]; 
			return fisherYatesShuffle(otherItem, [...shuffled, items[index]]);
		} 
		/**
		 * shuffle an array of items using 
		 * Durstenfeld shuffles
		 * @param array [], array []
		 *
		 * items    : items to be shuffled
		 * shuffled : shuffled array
		 *
		 * returns array []
		 */
		function durstenfeldShuffle(items, shuffled = []) {
			if(items.length == 1) {
				return [items[0], ...shuffled];
			}
			let index = Math.floor(Math.random() * items.length);
			let otherItem = index == items.length - 1 ? 
				items.slice(0, -1) : [...items.slice(0, index), items[items.length - 1], ...items.slice(index + 1, -1)];
			return durstenfeldShuffle(otherItem, [items[index], ...shuffled]);
		} 
		/**
	 	 * shuffle an array of items using
	 	 * Faro shuffles
	 	 * @param array [], String
	 	 *
	 	 * items     : items to be shuffled
	 	 * direction : direction of shuffle
		 *
		 * returns array [] 
     */
    function faroShuffle(items, direction) {
    	let center = items.length % 2 ? 
    		(items.length + (direction == "out" ? 1 : -1)) * 0.5 : items.length * 0.5; 
    	let splits = direction == "out" ? 
    		[items.slice(0, center), items.slice(center)] : [items.slice(center), items.slice(0, center)];
    	return splits[0].reduce((acc, val, index) => 
    		[...acc, val, splits[1][index] || null], []).filter(item => item); 
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
		console.log(`%cDurstenfeld Shuffles: `, "color : red;");
		input = [1, 2, 3, 4, 5, 6, 7, 8];
		console.log(`%c${input.join(" ")}`, "color : yellow;");
		console.log(durstenfeldShuffle(input).join(" "));
		console.log(durstenfeldShuffle(input).join(" "));
		console.log(durstenfeldShuffle(input).join(" "));
		input = ["apple", "blackberry", "cherry", "dragonfruit", "grapefruit", "kumquat", "mango", "nectarine", "persimmon", "raspberry", "raspberry"];
		console.log(`%c${input.join(" ")}`, "color : yellow;");
		console.log(durstenfeldShuffle(input).join(" "));
		console.log(durstenfeldShuffle(input).join(" "));
		console.log(durstenfeldShuffle(input).join(" "));
		input = ["a", "e", "i", "o", "u"];
		console.log(`%c${input.join(" ")}`, "color : yellow;");
		console.log(durstenfeldShuffle(input).join(" "));
		console.log(durstenfeldShuffle(input).join(" "));
		console.log(durstenfeldShuffle(input).join(" "));
		console.log(`%cFaro Shuffles(out): `, "color : red;");
		input = [1, 2, 3, 4, 5, 6, 7, 8];
		console.log(`%c${input.join(" ")}`, "color : yellow;");
		console.log(faroShuffle(input, "out").join(" "));
		input = ["apple", "blackberry", "cherry", "dragonfruit", "grapefruit", "kumquat", "mango", "nectarine", "persimmon", "raspberry", "raspberry"];
		console.log(`%c${input.join(" ")}`, "color : yellow;");
		console.log(faroShuffle(input, "out").join(" "));
		input = ["a", "e", "i", "o", "u"];
		console.log(`%c${input.join(" ")}`, "color : yellow;");
		console.log(faroShuffle(input, "out").join(" "));
		console.log(`%cFaro Shuffles(in): `, "color : red;");
		input = [1, 2, 3, 4, 5, 6, 7, 8];
		console.log(`%c${input.join(" ")}`, "color : yellow;");
		console.log(faroShuffle(input, "in").join(" "));
		input = ["apple", "blackberry", "cherry", "dragonfruit", "grapefruit", "kumquat", "mango", "nectarine", "persimmon", "raspberry", "raspberry"];
		console.log(`%c${input.join(" ")}`, "color : yellow;");
		console.log(faroShuffle(input, "in").join(" "));
		input = ["a", "e", "i", "o", "u"];
		console.log(`%c${input.join(" ")}`, "color : yellow;");
		console.log(faroShuffle(input, "in").join(" "));
	});
})();		