/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * chart class
		 * @param int, int, int, int, int
		 *
		 * x1        : start X
		 * x2        : end X
		 * y1        : start Y
		 * y2        : end Y
		 * recordNum : total number of records to be displayed
		 * records   : records to be displayed
		 */
		class Chart {
			constructor(x1, x2, y1, y2, recordNum, ...records) {
				this.board = this.makeBoard(x1, x2, y1, y2, recordNum);
				records.forEach(record => {
					this.addRecord(record, this.board);
				});
			}
			/**
			 * make chart board
			 * @param int, int, int, int, int
			 * 
			 * x1        : start X
			 * x2        : end X
			 * y1        : start Y
			 * y2        : end Y
			 * recordNum : total number of records to be displayed
			 *
			 * returns array []
			 */
			makeBoard(x1, x2, y1, y2, recordNum) {
				let board = new Array(y2 - y1 + 2);
				for(let i = 0; i < board.length; i++) {
					board[i] = new Array(recordNum * 2 + 2).fill("");
				}
				this.addXLabel(x1, x2, recordNum, board);
				this.addYLabel(y2, board);
				return board;
			} 
			/**
			 * add X-axis
			 * @param int, int, int, obj {}
			 *
			 * x1        : start X
			 * x2        : end X
			 * recordNum : total number of records to be displayed
			 * board     : chart board
			 */
			addXLabel(x1, x2, recordNum, board) {
				let intervalX = (x2 - x1) / recordNum;
				for(let i = 1, j = 0; i < board[board.length - 1].length; i += 2) {
					let label = (x1 + intervalX * j++).toString();
					for(let k = 0; k < board.length; k++) {
						board[k][i] = k == board.length - 1 ? label : " ".repeat(label.length);
					}
				}
			} 
			/**
			 * add Y-axis
			 * @param int, obj {}
			 *
			 * y2       : end Y
			 * board    : chart board
			 */ 
			addYLabel(y2, board) {
				let colWidth = y2.toString().length;
				for(let i = 0, j = 0; i < board.length; i++) {
					let label = (y2 - j++).toString();
					board[i][0] = i < board.length - 1 ? " ".repeat(colWidth - label.length) + label : " ".repeat(colWidth);
				}
			} 
			/**
			 * add record
			 * @param String
			 *
			 * record : record to be added
			 * board  : chart to hold the record
			 */	
			addRecord(record, board) {
				record = record.split(" ");
				let col = board[board.length - 1].indexOf(record[0]) + 1;
				for(let i = 0; i < board.length; i++) {
					board[i][col] = i > board.length - 2 - record[2] && i <= board.length - 2 ? "*" : " ";
				}
			}
			/**
			 * display chart
			 * @param obj {}
			 *
			 * chart : chart board to be displayed
			 */
			displayChart(chart = this.board) {
				chart.forEach(row => {
					console.log(row.join(""));
				});
			} 
		} 
		//default input
		console.log("Default Input: ");
		let chart = new Chart(...[140, 190, 1, 8, 5, "140 150 1", "150 160 0", "160 170 7", "170 180 6", "180 190 2"]);
		chart.displayChart();	
		//challenge input
		console.log("Challenge Input: ");
    chart = new Chart(...[0, 50, 1, 10, 5, "0 10 1", "10 20 3", "20 30 6", "30 40 4", "40 50 2"]);
    chart.displayChart();
	});
})();				