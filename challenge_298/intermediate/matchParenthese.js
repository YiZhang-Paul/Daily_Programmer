/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * match parenthese
		 * @param String
		 *
		 * test : string to be tested
		 *
		 * returns array []
		 */
		function matchParenthese(test) {
			let flags = new Array(test.length).fill(0).map((flag, index) => 
				test[index] == "(" ? 1 : (test[index] == ")" ? 2 : 0));
			let closeParenthese = flags.filter(flag => flag == 2).length;
			for(let i = 0, openIndex, closeIndex = -1; i < closeParenthese; i++) {
				closeIndex = flags.indexOf(2, closeIndex + 1);
				openIndex = flags.lastIndexOf(1, closeIndex);
				if(openIndex != -1) {
					flags[openIndex] = 0;
					flags[closeIndex] = 0;
				}
			}	
			return flags;		
		} 
		/**
		 * highlight first unmatched parenthese found
		 * @param String
		 *
		 * test : string to be tested
		 */
		function showUnmatched(test) {
			let flags = matchParenthese(test);
			let flagType = new Set(flags), index = null;
			if(flagType.size > 1) {
				index = flagType.has(1) ? flags.lastIndexOf(1) : flags.indexOf(2);
			}
			if(index === null) {
				console.log(test);
			} else {
				console.log(`${test.slice(0, index)}%c${test[index]}%c${test.slice(index + 1)}`, "color : tomato;", "");
			}
		} 
		//challenge input
		let input = ")(asdf)))";
		showUnmatched(input);
		input = "((((asdf)))";
		showUnmatched(input);
		input = "((((asdf))";
		showUnmatched(input);
		input = "(ab)((cd)(asdf)))";
		showUnmatched(input);
		input = "(ab)((cd)(asdf)())";
		showUnmatched(input);
		input = "(ab)(((cd)(asdf)";
		showUnmatched(input);
		input = "(ab)(((cd)(asdf";
		showUnmatched(input);
		input = "(ab)(((cd)(asdf)))))";
		showUnmatched(input);
	});
})();				