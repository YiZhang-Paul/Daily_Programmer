/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * make 2D array with given input
		 * @param {Sting} [input] - input to be converted
		 *
		 * @return {Array} [constructed 2D array]
		 */
		function make2DArray(input) {
			let maxNumLen = Math.max(...input.match(/\d+/g).map(num => num.length));
			return input.split("\n").map(line => line.match(/\d+/g).map(num => " ".repeat(maxNumLen - num.length) + num));
		}
		/**
		 * retrieve rows of a matrix that are not full
		 * @param {Array} [matrix] - matrix to be examined
		 * @param {int} [limit] - maximum number of elements per row
		 *
		 * @return {Array} [non-full rows]
		 */
		function getNonFullRow(matrix, limit) {
			return matrix.filter(row => row.length < limit);
		}
		/**
		 * oblique a matrix
		 * @param {String} [matrix] - matrix to be obliqued
		 *
		 * @return {String} [obliqued matrix]
		 */
		function oblique(matrix) {
			matrix = make2DArray(matrix);
			let diagonal = "", totalSlice = matrix.length + matrix[0].length - 1;
			for(let i = 1 ; i <= totalSlice; i++) {
				diagonal += matrix.slice(0, i).filter(row => row.length).map(row => row.shift()).join(" ") + "\n";
			}
			return diagonal;
		}
		/**
		 * de-oblique a diagonal
		 * @param {String} [diagonal] - diagonal to be de-obliqued
		 * @param {String} [layout] - layout of final matrix
		 *
		 * @return {String} [de-obliqued diagonal]
		 */
		function deoblique(diagonal, layout = "wide") {
			diagonal = make2DArray(diagonal);
			let totalNum = diagonal.reduce((acc, val) => acc + val.length, 0);
			let diagonalLen = Math.max(...diagonal.map(row => row.length));
			let [row, col] = layout == "wide" ? [diagonalLen, totalNum / diagonalLen] : [totalNum / diagonalLen, diagonalLen];
			let matrix = [];
			for(let i = 0; i < row; i++) {
				matrix.push([]);
			}
			for(let i = 0; i < diagonal.length; i++) {
				let rows = getNonFullRow(matrix, col);
				for(let j = 0; j < diagonal[i].length; j++) {
					rows[j].push(diagonal[i][j]);
				}
			}
			return matrix.reduce((acc, val) => acc + val.join(" ") + "\n", "");
		}
	  //challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = ` 0  1  2  3  4  5
								  6  7  8  9 10 11
								 12 13 14 15 16 17
								 18 19 20 21 22 23
								 24 25 26 27 28 29
								 30 31 32 33 34 35`;
    console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);
    console.log(`%cOblique Into -> `, "color : red;");
    console.log(`%c${oblique(input)}`, "color : orange;");  
    input = `0               
             1 6             
             2 7 12          
             3 8 13 18       
             4 9 14 19 24    
             5 10 15 20 25 30
             11 16 21 26 31  
             17 22 27 32     
             23 28 33        
             29 34           
             35`;
    console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);
    console.log(`%cDe-oblique Into -> `, "color : red;");
    console.log(`%c${deoblique(input)}`, "color : orange;");
    //bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = `0      
             1 6    
             2 7 12 
             3 8 13 
             4 9 14 
             5 10 15
             11 16  
             17`;
    console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);
    console.log(`%cDe-oblique Into -> (wide)`, "color : red;");
    console.log(`%c${deoblique(input, "wide")}`, "color : orange;");
    console.log(`%cDe-oblique Into -> (tall)`, "color : red;");
    console.log(`%c${deoblique(input, "tall")}`, "color : orange;");                                 
	});
})();		