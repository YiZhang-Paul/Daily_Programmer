/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check if a line of code contains import
		 * @param String
		 *
		 * line : line of code to be checked
		 *
		 * returns boolean
		 */
		function isImport(line) {
			return /#include/.test(line);
		} 
		/**
		 * find all lines containing imports
		 * @param array []
		 *
		 * lines : all lines of code
		 *
		 * returns array []
		 */
		function findImports(lines) {
			return lines.filter(line => isImport(line));
		} 
		/**
		 * check if a line of code 
		 * contains a function invocation
		 * @param String
		 *
		 * line : line of code to be checked
		 *
		 * returns boolean
		 */
		function isFunction(line) {
			return /\w+\d*\((\s*\w+,?)*\)/.test(line) && !/;/.test(line);
		} 
		/**
		 * find all lines containing function invocation
		 * @param array []
		 *
		 * lines : all lines of code
		 *
		 * returns array []
		 */
		function findFunction(lines) {
			return lines.filter(line => isFunction(line));
		} 
		/**
		 * check if a line of code contains a for loop
		 * @param String
		 *
		 * line : line of code to be checked
		 *
		 * returns boolean
		 */
		function isForLoop(line) {
			return /for\s*\(/.test(line);
		} 
		/**
		 * find for loops 
		 * @param array []
		 *
		 * lines : all lines of code
		 *
		 * returns array []
		 */
		function findForLoop(lines) {
			return lines.filter(line => isForLoop(line));
		} 
		/**
		 * check if a line of code contains a bracket
		 * @param String
		 *
		 * line : line of code to be checked
		 *
		 * returns boolean
		 */
		function isBracket(line) {
			return /\s*\{\s*|\s*\}\s*/.test(line);
		} 
		/**
		 * find curley braces
		 * @param array []
		 *
		 * lines : all lines of code
		 *
		 * returns array []
		 */
		function findBracket(lines) {
			return lines.filter(line => isBracket(line));
		} 
		/**
		 * find statements 
		 * @param array []
		 *
		 * lines : all lines of code
		 *
		 * returns array []
		 */
		function findStatement(lines) {
			return lines.filter(line => 
				line && !isImport(line) && !isFunction(line) && !isBracket(line));
		} 
		/**
		 * check indentation level
		 * @param String, int
		 *
		 * line    : line of code to be checked
		 * tabSize : indent spaces
		 *
		 * returns int
		 */
		function getIndentLevel(line, tabSize = 2) {
			return line.match(/^\s*/)[0].length / tabSize;
		} 
		/**
		 * align statements on same indent level
		 * @param array []
		 *
		 * lines : lines of statements to be checked
		 *
		 * returns array []
		 */
		function alignStatement(lines) {
			let statements = [];
			lines.forEach(line => {
				let indentLevel = getIndentLevel(line);
				statements[indentLevel] = statements[indentLevel] ? [...statements[indentLevel], line] : [line];
			});
			return statements;
		} 
		/**
		 * group functions
		 * @param array []
		 *
		 * lines : all lines of code to be checked
		 *
		 * returns array []
		 */
		function groupFunction(lines) {
			let functions = findFunction(lines).sort((a, b) => a.match(/\w+\d*\(/)[0][0].charCodeAt() - b.match(/\w+\d*\(/)[0][0].charCodeAt());
			let bracket = alignStatement(findBracket(lines)).map(indent => indent.sort((a, b) => a.trim() == "}"));
			let statements = alignStatement(findStatement(lines));
			functions = functions.map(func => [func, bracket[0].shift(), bracket[0].pop() + "\n"]);
			functions = functions.map(func => [...func.slice(0, -1), ...statements[1], func[func.length - 1]]);
			functions = functions.map(func => {
				let forLoop = func.findIndex(stmt => isForLoop(stmt));
				if(forLoop != -1) {
					return [...func.slice(0, forLoop + 1), bracket[1].shift(), ...statements[2], bracket[1].pop(), ...func.slice(forLoop + 1)];
				}
				return func;
			});
			return functions;
		} 
		/**
		 * unsort code 
		 * @param String
		 *
		 * code : code to be unsorted
		 *
		 * returns String
		 */
		function unsortCode(code) {
			let unsorted = [];
			let lines = code.split("\n");
			findImports(lines).forEach(include => {
				unsorted.push(include + "\n");
			});
			unsorted.push("\n");
			groupFunction(lines).forEach(func => {
				unsorted.push(...func.map(line => line + "\n"));
			});
			return unsorted;
		} 
		//challenge input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `
    sum = i + sum;
  {
  }
  int sum = 0;
  for (int i = 0; i <= 100; ++i)
  std::cout << sum;
  return 0;
{
}
#include <iostream>
int main()`;
		unsortCode(input).forEach(line => {
			console.log(line);	
		});
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = `
    sum += f(x);
  {
  }
  return ( 1.0 / ( y * y) );
  unsigned int start = 1;
  unsigned int end = 1000;
  double sum = 0;
  for( unsigned int x = start; x <= end; ++x )
  std::cout << "Sum of f(x) from " << start << " to " << end << " is " << sum << std::endl;
  return 0;
{
{
}
}
#include <iostream>
double f(double y)
int main()`;	
		//unsortCode(input).forEach(line => {
		//	console.log(line);	
		//});				 
	});
})();		