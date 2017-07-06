/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * histogram chart class
		 * @param String
		 *
		 * input : all specs and data for chart
		 */
		class HistogramChart {
			constructor(input) {
				input = input.split("\n").map(item => item.trim());
				this.interval = Number(input[1]);
				this.records = input.slice(3, 3 + Number(input[2]));
				this.board = this.makeChart(input[0], this.interval);
			}
			/**
			 * make chart board
			 * @param String
			 *
			 * ranges : X and Y-axis ranges 
			 *
			 * returns array []
			 */
			makeChart(ranges) {
				ranges = ranges.split(" ").map(range => Number(range));
				let chart = new Array(ranges[3] - (ranges[2] === 0 ? 1 : ranges[2]) + 2).fill(0);
				chart.forEach((row, index) => {
					chart[index] = new Array((ranges[1] + 1 - (ranges[0] === 0 ? 1 : ranges[0])) / this.interval + 1).fill(0);
				});
				this.addXLabel(ranges[0], ranges[1], chart);
				this.addYLabel(ranges[2], ranges[3], chart);
				this.addAllData(chart);
				return chart;
			} 
			/**
			 * add X-axis labels
			 * @param int, int, array []
			 *
			 * start    : starting label
			 * end      : ending label
			 * chart    : chart to be populated
			 */
			addXLabel(start, end, chart) {
				start = start === 0 ? 1 : start;
				for(let i = 1; i < chart[0].length; i++) {
					let label = "";
					for(let k = 0; k < this.interval; k++) {
						label += start++ + (k == this.interval - 1 ? "" : " ");
					}
					for(let j = 0; j < chart.length; j++) {
						chart[j][i] = j == chart.length - 1 ? label : " ".repeat(label.length);
					}
				}
			} 
			/**
			 * add Y-axis labels
			 * @param int, int, array []
			 *
			 * start    : starting label
			 * end      : ending label
			 * chart    : chart to be populated
			 */
			addYLabel(start, end, chart) {
				let colWidth = end.toString().length;
				let origin = "";
				chart.forEach((row, index) => {
					let pad = " ".repeat(colWidth - end.toString().length);
					if(index == chart.length - 1) {
						origin = start === 0 ? "0" : "/"; 
					}
					chart[index][0] = pad + (index == chart.length - 1 ? origin : end--);
				});
			} 
			/**
			 * add a group of data
			 * @param int, int, array []
			 *
			 * row   : row of data 
			 * col   : column of data
			 * chart : chart to be populated
			 */
			addGroup(row, col, chart) {
				for(let i = chart.length - 1 - row; i < chart.length - 1; i++) {
					chart[i][col] = "*".repeat(chart[i][col].length); 
				}
			} 
			/**
			 * calculate number of data occurrence
			 * @param array []
			 *
			 * records : records for a group
			 *
			 * returns int
			 */
      totalRecord(records) {
      	return records.reduce((acc, val) => acc + Number(val.split(" ")[1]), 0);
      }
			/**
			 * add all data groups
			 * @param array []
			 *
			 * chart : chart to be populated
			 */
			addAllData(chart) {
				for(let i = 0; i < this.records.length; i += this.interval) {
					let totalRecord = this.totalRecord(this.records.slice(i, i + this.interval));
					this.addGroup(Math.round(totalRecord / this.interval), i / this.interval + 1, chart);
				}
			} 
			/**
			 * display chart
			 */  
			displayChart() {
				this.board.forEach(row => {
					console.log(row.join(" "));
				});
			} 
		} 
		//default input
		let input = `1 4 1 10
								 2
								 4
								 1 3
								 2 3
								 3 2
								 4 6`;
		let chart = new HistogramChart(input);				 
		chart.displayChart();	
		//challenge input
		input = `0 40 0 100
						 8
						 40
						 1 56
						 2 40
						 3 4
						 4 67
						 5 34
						 6 48
						 7 7
						 8 45
						 9 50
						 10 54
						 11 20
						 12 24
						 13 44
						 14 44
						 15 49
						 16 28
						 17 94
						 18 37
						 19 46
						 20 64
						 21 100
						 22 43
						 23 23
						 24 100
						 25 15
						 26 81
						 27 19
						 28 92
						 29 9
						 30 21
						 31 88
						 32 31
						 33 55
						 34 87
						 35 63
						 36 88
						 37 76
						 38 41
						 39 100
						 40 6`;
		chart = new HistogramChart(input);				 
		chart.displayChart();	
	});
})();				