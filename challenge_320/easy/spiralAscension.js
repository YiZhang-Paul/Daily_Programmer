/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * fill square with spiral
		 * @param int
		 *
		 * num : total number of digits on each row and column
		 *
		 * returns array [] 
		 */
		function fillSpiral(num) {
			let square = new Array(num);
			for(let i = 0; i < square.length; i++) {
				square[i] = new Array(num).fill(0);
			}
			let space = " ", maxLength = Math.pow(num, 2).toString().length;
			let curRow = 0, curCol = 0, filled = 1;
			square[curRow][curCol] = space.repeat(maxLength - filled.toString().length) + filled;
			let direction = "right";
			while(filled != Math.pow(num, 2)) {
				//determine direction
				if(direction == "right" && curRow + curCol == square.length - 1) direction = "down";
				else if(direction == "down" && curRow == curCol) direction = "left";
				else if(direction == "left" && curRow + curCol == square.length - 1) direction = "up";
				else if(direction == "up" && square[curRow - 1][curCol]) direction = "right";   
				//move through square
				switch(direction) {
					case "right" : case "left" :
						curCol = direction == "right" ? curCol + 1 : curCol - 1;
						break;
					case "up" : case "down" :
						curRow = direction == "up" ? curRow - 1 : curRow + 1;
						break;	
				}
				filled++;
				square[curRow][curCol] = space.repeat(maxLength - filled.toString().length) + filled;
			}
			printResult(square);
		} 
		/**
		 * print result
		 * @param array []
		 * 
		 * result : result to be printed
		 */
		function printResult(result) {
			result.forEach(row => {
				console.log(row);
			});
		} 
		let input = prompt("Please Enter a Number: ");
		fillSpiral(Number(input));
	});
})();				