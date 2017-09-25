/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a string is properly wrapped by matching pair of quotes
		 * @param {String} [text] - string to be checked
		 *
		 * @return {boolean} [test result]
		 */
		function isValidString(text) {
			return new Set("'\"").has(text[0]) && text[0] == text[text.length - 1] && text[text.length - 2] != "\\";
		}
		/**
		 * split string by escape characters
		 * @param {String} [text] - string to be splitted
		 *
		 * @return {Array} [splitted string]
		 */
		function splitString(text) {
			return text.slice(1, -1).match(/[^\\]+|\\(\w|\W)/g);
		}
		/**
		 * get escape string
		 * @param {String} [escape] - escape string representation
		 *
		 * @return {String} [escape string]
		 */
		function getEscape(escape) {
			let escaped = "";
			switch(escape[1]) {
				case "'" : case "\"" : case "\\" :
					escaped = escape[1];
					break;		
				case "n" : 
					escaped = "\n";
					break;
				case "r" :
					escaped = "\r";
					break;
				case "t" :
					escaped = "\t";
					break;
				case "b" :
					escaped = "\b";
					break;
				case "f" :
					escaped = "\f";
					break;
				case "v" :
					escaped = "\v";
					break;
				case "0" :
					escaped = "\0";
					break;		
				default :
					return null;			
			}
			return escaped;
		}
		/**
		 * parse string
		 * @param {String} [parse] - string to parse
		 *
		 * @return {String} [parsed string]
		 */
		function parseString(parse) {
			if(!isValidString(parse.trim())) {
				return "Invalid String! (String Not Properly Ended.)";
			}
			let parsed = "", toParse = splitString(parse);
			for(let i = 0; i < toParse.length; i++) {
				if(toParse[i][0] == "\\" && !getEscape(toParse[i])) {
					return "Invalid String! (Bad Escape Code, " + toParse[i] + ")";
				}
				parsed += toParse[i][0] == "\\" ? getEscape(toParse[i]) : toParse[i];
			}
			return parsed;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "\"A random\\nstring\\\\\\\"\"";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${parseString(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "\"hello,\\nworld!\"";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${parseString(input)}`, "color : orange;");
		input = "\"\\\"\\\\\\\"\"";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${parseString(input)}`, "color : orange;");
		input = "\"an invalid\\nstring\\\"";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${parseString(input)}`, "color : orange;");
		input = "\"another invalid string \\q\"";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${parseString(input)}`, "color : orange;");
	});
})();		