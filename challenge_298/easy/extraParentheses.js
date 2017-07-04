/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	/**
  	 * remove extra parentheses
  	 * flags : 0 -> letters, 1 -> "(", 2 -> ")", 3 -> extra parentheses
  	 * negative numbers indicate necessary matching parentheses 
  	 * @param String
  	 *
  	 * expression : expression with extra parentheses
  	 *
  	 * returns String
  	 */
  	function removeParentheses(expression) {
  		let flags = new Array(expression.length).fill(0).map((flag, index) => 
  			expression[index] == "(" ? 1 : (expression[index] == ")" ? 2 : 0));
  		//remove extra parentheses
  		let open, close = -1, curPair = -1;
  		let closeParentheses = flags.filter(flag => flag == 2).length;
  		for(let i = 0; i < closeParentheses; i++) {
  			close = flags.indexOf(2, close + 1);
  			open = flags.lastIndexOf(1, close);
  			let enclosed = close - open == 1 || (flags[open + 1] < 0 && flags[open + 1] == flags[close - 1]);
  			[flags[open], flags[close]] = !enclosed ? [curPair, curPair--] : [3, 3]; 
  		}
  		return flags.every(flag => flag == 3) ? 
  			"NULL" : flags.reduce((acc, val, index) => acc + (val == 3 ? "" : expression[index]), "");
  	} 
  	//default input
  	console.log("%cDefault Input: ", "color : red;");
  	let input = "((a((bc)(de)))f)"; 
  	console.log(removeParentheses(input)); 
		input = "(((zbcd)(((e)fg))))";
  	console.log(removeParentheses(input)); 
		input = "ab((c))";
  	console.log(removeParentheses(input)); 
		//bonus input
  	console.log("%cBonus Input: ", "color : red;");
		input = "()";
  	console.log(removeParentheses(input)); 
    input = "((fgh()()()))";
  	console.log(removeParentheses(input)); 
    input = "()(abc())";
  	console.log(removeParentheses(input)); 
  });
})();  	