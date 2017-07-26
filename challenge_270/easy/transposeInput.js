/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get elements from a given column
		 * from a two-dimensional array
		 * @param {int} [col] - column to retrieve the elements from
		 * @param {Array} [arr] - two-dimensional array
		 *
		 * @return {Array} [elements from given column]
		 */
		function getColumn(col, arr) {
			return arr.map(row => row[col]);
		}
		/**
		 * transpose input
		 * @param {String} [input] - input to be transposed
		 *
		 * @return {Array} [transposed input]
		 */
		function transpose(input) {
			let lines = input.split("\n").filter(line => line.trim().length).map(line => line.split(""));
			let [row, col] = [lines.length, Math.max(...lines.map(line => line.length))];
			lines = lines.map(line => [...line, ...new Array(col - line.length).fill(" ")]);
			let transposed = [];
			for(let i = 0; i < col; i++) {
				transposed.push(getColumn(i, lines).join(""));
			}
			return transposed;
		}
		/**
		 * display transposed input
		 * @param {String} [input] - input to be transposed
		 */
		function displayTranspose(input) {
			input.split("\n").filter(line => line.length)
											 .forEach(line => {
											   console.log(line);
											 });
			console.log(`%cTransposed Into ->`, "color : orange;");
			transpose(input).forEach(line => {
				console.log(`%c${line}`, "color : yellow;");
			});
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `
ABC
DEF`;
    displayTranspose(input);
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `
Some
text.`;
    displayTranspose(input);     
    input = `
package main

import "fmt"

func main() {
    queue := make(chan string, 2)
    queue <- "one"
    queue <- "twoO"
    close(queue)
    for elem := range queue {
        fmt.Println(elem)
    }
}`;
    displayTranspose(input);            
	});
})();		