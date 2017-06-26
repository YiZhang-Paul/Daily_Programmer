/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
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
				let produce = aString[0] == "a" ? "bc" : (aString[0] == "b" ? "a" : "aaa");
				aString = aString.slice(2) + produce;
				tags.push(aString);
			}
			return tags;
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
			let aString = decode(aEncode);
			let produce = null, counter = 0;
			let tags = [];
			while(aString.length > 1 || aEncode.length != 3) {	
				counter++;
				//generate next produce
				if(aString == decode(aEncode)) {
					produce = aString[0] == "a" ? "bc" : (aString[0] == "b" ? "a" : "aaa");
					aString = aString.slice(2) + produce;
				}
				//append produce
				if(produce && Number(aEncode[0]) && counter % 6 <= 3) {
					aEncode += encode(produce);
					produce = null;
				}
				//remove leading bit
				aEncode = aEncode.slice(1);
				tags.push(aEncode);	
			}
			return tags;
		} 
		//challenge input 1
		console.log("Challenge 1:");
		collatzTag("aaa").forEach(tag => {
			console.log(tag);
		});
		//challenge input 2
		console.log("Challenge 2:");
		collatzTag("aaaaaaa").forEach(tag => {
			console.log(tag);
		});
		//bonus input
		console.log("Bonus:");
		cyclicTag("100100100").forEach(tag => {
			console.log(tag);
		});
	});
})(); 		