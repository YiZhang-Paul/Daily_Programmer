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
		 * encoder
		 * @param String
		 *
		 * code : code to be encoded
		 *
		 * returns String
		 */
		function encode(code) {
			let encoded = "";
			for(let i = 0; i < code.length; i++) {
				encoded += code[i] == "a" ? "100" : (code[i] == "b" ? "010" : "001");
			}
			return encoded;
		} 
		/**
		 * decoder
		 * @param String
		 *
		 * code : code to be decoded
		 *
		 * returns String
		 */ 
		function decode(code) {
			if(code.length % 3) {
				return "";
			}
			let decoded = "";
			for(let i = 0; i < code.length; i += 3) {
				let segment = code.slice(i, i + 3);
				decoded += segment == "100" ? "a" : (segment == "010" ? "b" : "c");
			}
			return decoded;
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
			let aString = "", tags = [];
			for(let i = 0; i < aEncode.length; i += 3) {
				aString += converter(aEncode.slice(i, i + 3));
			}
			let counter = 0;
			while(aString.length > 1) {
				let produce = aString[0] == "a" ? "bc" : (aString[0] == "b" ? "a" : "aaa");
				aString = aString.slice(2) + produce;
				let encodedProduce = "";
				for(let i = 0; i < produce.length; i++) {
					encodedProduce += converter(produce[i]);
				}
				counter++;
				aEncode = Number(aEncode[0]) && counter % 6 < 3 ? aEncode.slice(1) + encodedProduce : aEncode.slice(1);
				console.log(aEncode);	
			}
			return tags;
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