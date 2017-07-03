/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	/**
  	 * remove extra parentheses
  	 * @param String
  	 *
  	 * expression : expression with extra parentheses
  	 *
  	 * returns String
  	 */
  	function removeParentheses(expression) {
  		let flags = new Array(expression.length).fill(0).map((flag, index) => 
  				expression[index] == "(" ? 1 : (expression[index] == ")" ? 2 : flag));
  		//remove empty parentheses
  		for(let i = 0; i < flags.length - 1; i++) {
  			if(flags[i] == 1 && flags[i + 1] == 2) {
  				flags[i] = 3;
  				flags[i + 1] = 3;
  			}
  		}
  		console.log(flags);
  		console.log(expression);
  		return flags.every(flag => flag == 3) ? "NULL" : flags.reduce((acc, val, index) => acc + (val == 3 ? "" : expression[index]), "");
  	} 
  	//default input
  	let input = "((a((bc)(de)))f)"; 
  	console.log(removeParentheses(input)); 
		input = "(((zbcd)(((e)fg))))";
  	console.log(removeParentheses(input)); 
		input = "ab((c))";
  	console.log(removeParentheses(input)); 
		//bonus input
		input = "()";
  	console.log(removeParentheses(input)); 
    input = "((fgh()()()))";
  	console.log(removeParentheses(input)); 
    input = "()(abc())";
  	console.log(removeParentheses(input)); 
  });
})();  	