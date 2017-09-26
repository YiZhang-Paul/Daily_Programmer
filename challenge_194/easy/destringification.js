/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * extract sub-strings
		 * @param {String} [parent] - parent string
		 *
		 * @return {Array} [extracted sub-strings]
		 */
		function getSubString(parent) {
			return parent.match(/"(\w|\W)*[^\\]"(?=\s)|"(\w|\W)*[^\\]"(?!(\w|\W))/g);
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
		 * @param {String} [escape] - escape string
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
			let subString = getSubString(parse);
			if(!subString) {
				return "Invalid String! (String Not Properly Ended)";
			}
			if(subString.length > 1) {
				return subString.map((sub, index) => `String ${index + 1}:\n${parseString(sub)}`).join("\n\n");
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
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = "\"hello\\nhello again\" \"\\\\\\\"world!\\\\\\\"\"";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${parseString(input)}`, "color : orange;");
	});
})();		