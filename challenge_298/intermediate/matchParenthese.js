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
			for(let i = 0, openIndex = 0, closeIndex = -1; i < closeParenthese; i++) {
				closeIndex = flags.indexOf(2, closeIndex + 1);
				openIndex = flags.lastIndexOf(1, closeIndex);
				if(openIndex != -1) {
					flags[openIndex] = 0;
					flags[closeIndex] = 0;
				}
			}	
			console.log(flags);		
		} 
		//challenge input
		let input = ")(asdf)))";
		matchParenthese(input);
		input = "((((asdf)))";
		matchParenthese(input);
		input = "((((asdf))";
		matchParenthese(input);
		input = "(ab)((cd)(asdf)))";
		matchParenthese(input);
		input = "(ab)((cd)(asdf)())";
		matchParenthese(input);
		input = "(ab)(((cd)(asdf)";
		matchParenthese(input);
		input = "(ab)(((cd)(asdf";
		matchParenthese(input);
		input = "(ab)(((cd)(asdf)))))";
		matchParenthese(input);
	});
})();				