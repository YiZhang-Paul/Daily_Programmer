/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * get total number of wild cards in a word
		 * @param String
		 *
		 * word : word to be checked
		 *
		 * returns int
		 */ 
		function totalWC(word) {
			return word.split("").filter(char => char == "*").length;
		} 
		/**
		 * get all possible patterns for a single wild card
		 * @param int
		 *
		 * maxLength : maximum length of wild card replaced string
		 *
		 * returns array []
		 */
		function wcPattern(maxLength) {
			let patterns = [];
			for(let i = 0; i <= maxLength; i++) {
				patterns.push("*".repeat(i));
			}
			return patterns;
		} 
		/**
		 * get all possible combination of wild card patterns
		 * @param array [], array []
		 *
		 * patterns   : available patterns for each single wild card 
		 * curCombine : current combination
		 * 
		 * returns array []
		 */
		function wcCombine(patterns, curCombine = []) {
			if(curCombine.length == patterns.length) {
				return curCombine;
			}
			let permutation = [];
			for(let i = 0; i < patterns[curCombine.length].length; i++) {
				let result = wcCombine(patterns, [...curCombine, patterns[curCombine.length][i]]);
				if(Array.isArray(result) && curCombine.length != patterns.length - 1) {
					permutation.push(...result);
				} else {
					permutation.push(result);
				}
			}
			return permutation;
		} 
		/**
		 * get all possible patterns for a word
		 * @param String
		 *
		 * word : word to be checked
		 *
		 * returns array []
		 */
		function wordPattern(word) {
			let wcCombined = wcCombine(new Array(totalWC(word)).fill(wcPattern(4)));
			return wcCombined.map(combine => {
				let chars = word.split("*");
				for(let i = 1, j = 0; i < chars.length; i += 2) {
					chars.splice(i, 0, combine[j++]);
				}
				return chars.join("");
			});
		} 
		/**
 		 * check if words can match beginning
 		 * @param String, String
 		 * 
 		 * word1 : word 1
 		 * word2 : word 2
 		 *
 		 * returns boolean 
 		 */
 		function canMatchBegin(word1, word2) {
 			if(word1[0] == "*" || word2[0] == "*") {
 				return true;
 			}
 			let toCompare = Math.min(word1.indexOf("*"), word2.indexOf("*"));
 			return word1.slice(0, toCompare) == word2.slice(0, toCompare);
 		} 
 		/**
 		 * check if words can match ends
 		 * @param String, String 
 		 * 
 		 * word1 : word 1
 		 * word2 : word 2
 		 *
 		 * returns boolean 
 		 */ 
 		function canMatchEnd(word1, word2) {
 			if(word1[word1.length - 1] == "*" || word2[word2.length - 1] == "*") {
 				return true;
 			}
 			let toCompare = Math.min((word1.length - 1 - word1.lastIndexOf("*")), (word2.length - 1 - word2.lastIndexOf("*")));
 			return word1.slice(-toCompare) == word2.slice(-toCompare);
 		}
 		/**
 		 * check if words can match length
 		 * @param String, String 
 		 * 
 		 * word1 : word 1
 		 * word2 : word 2
 		 *
 		 * returns boolean 
 		 */
 		function canMatchLength(word1, word2) {
 			if(word1.length == word2.length) {
 				return true;
 			}
 			let shorter = word1.length > word2.length ? word2 : word1;
 			let longer = shorter == word1 ? word2 : word1;
 			return shorter.length + totalWC(shorter) * 3 >= longer.length - totalWC(longer);
 		} 
 		/**
		 * check if two word patterns overlap
		 * @param String, String
		 *
		 * pattern1 : word pattern 1
		 * pattern2 : word pattern 2
		 * 
		 * returns boolean
		 */
		function patternOverlap(pattern1, pattern2) {
			if(pattern1 == pattern2) {
				return true;
			}
			return pattern1.split("").every((char, index) => 
				char == "*" || pattern2[index] == "*" || char == pattern2[index]);
		} 
		/**
		 * check word overlap
		 * @param String, String
		 *
		 * word1 : word 1  
		 * word2 : word 2
		 *
		 * returns boolean
		 */
		function checkOverlap(word1, word2) {
			if(!canMatchBegin(word1, word2) || !canMatchEnd(word1, word2) || !canMatchLength(word1, word2)) {
				return false;
			}
			let word1Pattern = wordPattern(word1); 
			let word2Pattern = wordPattern(word2);
			return word1Pattern.some(pattern1 => {
				let checkList = word2Pattern.filter(pattern2 => pattern2.length == pattern1.length);
				return checkList.some(item => patternOverlap(pattern1, item));
			});
		}
		//default input
		let time = new Date().getTime();
		console.log("%cDefault Input: ", "color : yellow;");
		let input = ["Shakes*e", "S*speare"];
		console.log(`${input.join(", ")} -> %c${checkOverlap(...input)}`, "color : red;");
		input = ["a*baa**ba**aa", "*ca*b**a*baac"];
		console.log(`${input.join(", ")} -> %c${checkOverlap(...input)}`, "color : red;");
		input = ["a*baa**ba**aa", "*ca*b**a*baaa"];
		console.log(`${input.join(", ")} -> %c${checkOverlap(...input)}`, "color : red;");
		//challenge input
		console.log("%cChallenge Input: ", "color : yellow;");
		input = ["bb*aaaaa*ba**", "*baabb*b*aaaa"];
		console.log(`${input.join(", ")} -> %c${checkOverlap(...input)}`, "color : red;");
		input = ["dnKeeuCCyHOnobnDYMGoXDdNWhTsaoedbPifJ*ki*wWfXjIUwqItTmGqtAItoNWpDeUnNCWgZsKWbuQxKaqemXuFXDylQubuZWhMyDsXvDSwYjui*LviGAEkyQbtR*cELfxiAbbYyJRGtcsoJZppINgJGYeZKGeWLbenBEKaoCgheYwOxLeFZJPGhTFRAjNn*", "d*eeuCCyHOnobnDYMGoXDdNWhTsaoedbP*ijrwWfXjIUwqItTmGqtAItoNWpDeUnNCWgZs*WbuQxKaqemXuFXDylQubuZWhMyDsXvDSwYjuijkLviGAEkyQbtRUsncELfxiAbbYyJRG*soJZppINgJGYeZKGeWLbenBEKaoCghe*YwOxLeFZJPGhTFRAjNn"];
		console.log(`${input.join(", ")} -> %c${checkOverlap(...input)}`, "color : red;");
		input = ["THAkZYrkUWgcTpZ*SsNQKsEnvdUveZxssEtCEQuoMqToJjMdCatMs*v*GyMlROpiIDUZyJjhwmjxFWpEwDgRLlLsJYebMSkwxEUvoDcLPLIwHY*GvoRhgcfkdsenObSjWGNYRDJAzRzavAGRoZZ*fDXIRlJkufqHDjLMJKEjLAkRRyQqTrUaWRIndSX", "*THAkZYrkUWgcTpZSsNQKsEnvdUveZxssEtCEQuoMqToJjMdCatMsYa*nBvIFuGyMlROpiIDUZyJjh*FWpEwDgRLlLsJYebMSkw*oDcLPLIwHYbeBGvoRhgcfkdsenObSjWGNYRDJAzRzavAGRoZZvbEfDXIRlJkufqHDjLMJKEjLAkRRyQqTrU*aWRIndSX"];
		console.log(`${input.join(", ")} -> %c${checkOverlap(...input)}`, "color : red;");
		input = ["jEAmXdDUtthXNLbIZFeWdiQPGEvyCEeLI**EyficABUH*YiSZRREvniDexKJSjLXMYfsw*YlbTSZBlYSecorJsWidfALQYzOdrKNrJZRdrQEDoyhPMYAfTiHZIuqGtEkKqYBzxtCOJhRYfZNSYNxRWFrfahlSLvdBTebrXDgGlZEqxRIvGhN*mfhLLSExNHaHLAZI", "jEAmXdDUtthXNLbIZFeWdiQPGEvyCEeL**BUHYiSZRREvniDexKJSjLXMYfswlaYlbTSZBlYSecorJsWidfALQYzOdrKNrJZ*EDoyhPMYAfTiHZIuqGtEkKqYBzxtC*YfZNSYNxRWFrfahlSLvdBT*ebrXDgGlZEqxRIvGhNcmfhLLSExNHaHLAZI"];
		console.log(`${input.join(", ")} -> %c${checkOverlap(...input)}`, "color : red;");
		console.log(new Date().getTime() - time);
	});
})();			