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
		 * pick overlap word pattern from a list
		 * @param String, array []
		 * 
		 * word : word to be checked
		 * list : list to be checked
		 *
		 * returns String
		 */
		function pickOverlap(word, list) {
			return list.filter(pattern => pattern.length == word.length)
				         .find(pattern => patternOverlap(word, pattern));
		} 
		/**
		 * find overlap word pattern between two words
		 * @param String, String
		 *
		 * word1 : word 1  
		 * word2 : word 2
		 *
		 * returns array []
		 */
		function findOverlap(word1, word2) {
			if(!canMatchBegin(word1, word2) || !canMatchEnd(word1, word2) || !canMatchLength(word1, word2)) {
				return null;
			}
			let [word1Pattern, word2Pattern] = [wordPattern(word1), wordPattern(word2)]; 
			for(let i = 0, wordMatch; i < word1Pattern.length; i++) {
				wordMatch = pickOverlap(word1Pattern[i], word2Pattern);
				if(wordMatch) {
					return [word1Pattern[i], wordMatch];
				}
			}
			return null;
		} 
		/**
		 * combine overlap patterns to a word
		 * @param String, String
		 *
		 * pattern1 : mathcing word pattern 1
		 * pattern2 : mathcing word pattern 2
		 *
		 * returns String
		 */
		function combinePattern(pattern1, pattern2) {
			return pattern1.split("").reduce((acc, val, index) => 
				acc + (pattern1[index] == "*" ? pattern2[index] : pattern1[index]), "");
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
			let overlap = findOverlap(word1, word2);
			console.log(`${word1}, ${word2} -> %c${overlap ? true : false}`, "color : red;");
			if(overlap) {
				console.log(`Can be changed into: %c${combinePattern(...overlap)}`, "color : red;");
			}
		}
		//default input
		console.log("%cDefault Input: ", "color : yellow;");
		let input = ["Shakes*e", "S*speare"];
		checkOverlap(...input);
		input = ["a*baa**ba**aa", "*ca*b**a*baac"];
		checkOverlap(...input);
		input = ["a*baa**ba**aa", "*ca*b**a*baaa"];
		checkOverlap(...input);
		//challenge input
		console.log("%cChallenge Input: ", "color : yellow;");
		input = ["bb*aaaaa*ba**", "*baabb*b*aaaa"];
		checkOverlap(...input);
		input = ["dnKeeuCCyHOnobnDYMGoXDdNWhTsaoedbPifJ*ki*wWfXjIUwqItTmGqtAItoNWpDeUnNCWgZsKWbuQxKaqemXuFXDylQubuZWhMyDsXvDSwYjui*LviGAEkyQbtR*cELfxiAbbYyJRGtcsoJZppINgJGYeZKGeWLbenBEKaoCgheYwOxLeFZJPGhTFRAjNn*", "d*eeuCCyHOnobnDYMGoXDdNWhTsaoedbP*ijrwWfXjIUwqItTmGqtAItoNWpDeUnNCWgZs*WbuQxKaqemXuFXDylQubuZWhMyDsXvDSwYjuijkLviGAEkyQbtRUsncELfxiAbbYyJRG*soJZppINgJGYeZKGeWLbenBEKaoCghe*YwOxLeFZJPGhTFRAjNn"];
		checkOverlap(...input);
		input = ["THAkZYrkUWgcTpZ*SsNQKsEnvdUveZxssEtCEQuoMqToJjMdCatMs*v*GyMlROpiIDUZyJjhwmjxFWpEwDgRLlLsJYebMSkwxEUvoDcLPLIwHY*GvoRhgcfkdsenObSjWGNYRDJAzRzavAGRoZZ*fDXIRlJkufqHDjLMJKEjLAkRRyQqTrUaWRIndSX", "*THAkZYrkUWgcTpZSsNQKsEnvdUveZxssEtCEQuoMqToJjMdCatMsYa*nBvIFuGyMlROpiIDUZyJjh*FWpEwDgRLlLsJYebMSkw*oDcLPLIwHYbeBGvoRhgcfkdsenObSjWGNYRDJAzRzavAGRoZZvbEfDXIRlJkufqHDjLMJKEjLAkRRyQqTrU*aWRIndSX"];
		checkOverlap(...input);
		input = ["jEAmXdDUtthXNLbIZFeWdiQPGEvyCEeLI**EyficABUH*YiSZRREvniDexKJSjLXMYfsw*YlbTSZBlYSecorJsWidfALQYzOdrKNrJZRdrQEDoyhPMYAfTiHZIuqGtEkKqYBzxtCOJhRYfZNSYNxRWFrfahlSLvdBTebrXDgGlZEqxRIvGhN*mfhLLSExNHaHLAZI", "jEAmXdDUtthXNLbIZFeWdiQPGEvyCEeL**BUHYiSZRREvniDexKJSjLXMYfswlaYlbTSZBlYSecorJsWidfALQYzOdrKNrJZ*EDoyhPMYAfTiHZIuqGtEkKqYBzxtC*YfZNSYNxRWFrfahlSLvdBT*ebrXDgGlZEqxRIvGhNcmfhLLSExNHaHLAZI"];
		checkOverlap(...input);
	});
})();			