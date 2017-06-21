/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * make square to hold all numbers
		 * @param int, void
		 *
		 * num  : dimension of square
		 * init : initial value of all elements
		 *
		 * returns array []
		 */
		function makeSquare(num, init = 0) {
			let square = [];
			for(let i = 0; i < num; i++) {
				square.push(new Array(num).fill(init));
			}
			return square;
		} 
		/**
		 * pad infront of a number to given length
		 * @param int, int
		 *
		 * number : number to be padded
		 * length : pre-determined length
		 *
		 * returns String
		 */
		function padNumber(number, length) {
			return " ".repeat(length - number.toString().length) + number;
		} 
		/**
		 * print result
		 * @param array [], String
		 *
		 * result : result to be printed
		 * rotate : direction of spiral to be displayed
		 */
		function printResult(result, rotate) {
			result.forEach(row => {
				console.log(rotate == "counter" ? row.reverse() : row);
			});
		} 
		/**
		 * get current direction
		 * @param String, int, int, array []
		 *
		 * curDir : current direction
		 * row    : current row
		 * col    : current column
		 * square : square to be traversed
		 *
		 * returns String
		 */
		function getDirection(curDir, row, col, square) {
			if(row == col && curDir == "down") {
				curDir = "left";
			} else if(row + col == square.length - 1 && (curDir == "left" || curDir == "right")) {
				curDir = curDir == "left" ? "up" : "down";
			} else if(curDir == "up" && square[row - 1][col]) {
				curDir = "right";
			}
			return curDir; 
		} 
		/**
		 * traverse in square
		 * @param String, int, int
		 *
		 * curDir : current direction
		 * row    : current row
		 * col    : current column
		 *
		 * returns array []
		 */
		function traverse(curDir, row, col) {
			switch(curDir) {
				case "right" : case "left" :
					col = curDir == "right" ? col + 1 : col - 1;
					break;
				case "up" : case "down" :
					row = curDir == "up" ? row - 1 : row + 1;
					break;	
			}
			return [row, col];
		} 
		/**
		 * fill square with spiral
		 * @param int, String
		 *
		 * num    : total number of digits on each row and column
		 * rotate : indicate direction of spiral
		 *
		 * returns array [] 
		 */
		function fillSpiral(num, rotate = "clock") {
			//make square to hold all numbers
			let square = makeSquare(num);
			let maxNum = Math.pow(num, 2), maxLength = maxNum.toString().length;
			let curRow = 0, curCol = 0, curNum = 1;
			let direction = "right";
			while(curNum <= maxNum) {
				square[curRow][curCol] = padNumber(curNum++, maxLength);
				//get direction
				direction = getDirection(direction, curRow, curCol, square);	
				//move through square
				[curRow, curCol] = traverse(direction, curRow, curCol);
			}
			printResult(square, rotate);
		} 
		//get user input
		let input = prompt("Please Enter a Number: ");
		let rotate = prompt("Please Enter Direction(1 -> clockwise, 2 -> counter-clockwise):");
		fillSpiral(Number(input), rotate == 1 ? "clock" : "counter");
	});
})();				