/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate collatz tag 
		 * @param String
		 *
		 * aString : string of a's
		 * 
		 * returns array []
		 */ 
		function collatzTag(aString) {
			let tags = [];
			while(aString.length > 1) {
				aString = aString.slice(2) + (aString[0] == "a" ? "bc" : (aString[0] == "b" ? "a" : "aaa"));
				tags.push(aString);
			}
			return tags;
		}
		/**
		 * encoder/decoder
		 * @param String
		 *
		 * code : code to be encoded/decoded
		 *
		 * returns String
		 */
		function converter(code) {
			let converted;
			switch(code) {
				case "a" : case "100" :
					converted = code == "a" ? "100" : "a";
					break;
				case "b" : case "010" :
					converted = code == "b" ? "010" : "b";
					break;
				case "c" : case "001" :
					converted = code == "c" ? "001" : "c";
					break;		
			}
			return converted;
		} 
		/**
		 * generate cyclic tag
		 * @param String
		 * 
		 * aEncode : encoded string of a's
		 *
		 * returns array [] 
		 */
		function cyclicTag(aEncode) {
			let splitEncode = encode => {
				let segment = [];
				for(let i = 0; i < encode.length; i += 3) {
					segment.push(encode.slice(i, i + 3));
				}	
				return segment;
			};
			console.log(splitEncode(aEncode));
			let tags = [];

		} 
		cyclicTag("100100100");
		//challenge input 1
		//console.log("Challenge 1:");
		collatzTag("aaa").forEach(tag => {
			//console.log(tag);
		});
		//challenge input 2
		//console.log("Challenge 2:");
		collatzTag("aaaaaaa").forEach(tag => {
			//console.log(tag);
		});
	});
})(); 		