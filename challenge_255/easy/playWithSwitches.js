/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * process instructions 
		 * @param {String} [instructions] - instructions to be processed
		 *
		 * @return {Array} [processed instruction]
		 */
		function readInstruction(instructions) {
			let lines = instructions.split("\n").map(line => line.trim());
			let operations = lines.slice(1).map(operation => 
				operation.split(" ").map(num => Number(num)).sort((a, b) => a - b).map((num, index) => index ? num + 1 : num));
			return [Number(lines[0]), operations.sort((a, b) => a[0] - b[0])];
		}
		/**
		 * get all sorted break points
		 * @param {Array} [operations] - all operations on switches
		 *
		 * @return {Array} [break points] 
		 */
		function getBreakPoints(operations) {
			let breakPoints = [];
			for(let i = 0; i < operations.length; i++) {
				breakPoints.push(...operations[i]);
			}
			return Array.from(new Set(breakPoints.sort((a, b) => a - b))).map(num => [num, 0]);
		}
		/**
		 * simulate switch on and off
		 * @param {Array} [operations] - all operations on switches
		 * @param {Array} [breakPoint] - all break points
		 * @param {Array} [indexTable] - index mapping table
		 *
		 * @return {Array} [simulated break point]
		 */
		function simulateOperation(operations, breakPoints, indexTable) {
			let usageTable = [1, ...new Array(breakPoints.length - 1).fill(0)];
			for(let i = 0; i < operations.length; i++) {
				let [begin, end] = operations[i];
				let [beginIndex, endIndex] = [indexTable.get(begin), indexTable.get(end)];
				usageTable[beginIndex] = 1;
				breakPoints[beginIndex][1] = usageTable[beginIndex] ? 
					(breakPoints[beginIndex][1] ? 0 : 1) : (breakPoints[beginIndex - 1][1] ? 0 : 1); 
				for(let j = beginIndex + 1; j <= endIndex - 1; j++) {
					breakPoints[j][1] = breakPoints[j][1] ? 0 : 1;
				}	
				breakPoints[endIndex][1] = breakPoints[endIndex - 1][1] ? 0 : 1;
			}
			return breakPoints;
		}
		/**
		 * count total number of switches that are on
		 * @param {Array} [breakPoints] - all break points
		 *
		 * @return {int} [total number of switches on]
		 */
		function countSwitchOn(breakPoints) {
			let totalOn = 0;
			for(let i = 0, curNode = null; i < breakPoints.length; i++) {
				curNode = !curNode && breakPoints[i][1] ? breakPoints[i++] : curNode;
				if(curNode && !breakPoints[i][1]) {
					totalOn += breakPoints[i][0] - curNode[0];
					curNode = null;
				}
			}
			return totalOn;
		}
		/**
		 * check total number of switches that are on
		 * @param {String} [instructions] - instructions to be followed
		 *
		 * @return {int} [total number of switches on]
		 */
		function flipSwitch(instructions) {
			let [totalSwitch, operations] = readInstruction(instructions);
			let breakPoints = getBreakPoints(operations);
			let indexTable = new Map();
			for(let i = 0; i < breakPoints.length; i++) {
				indexTable.set(breakPoints[i][0], i);
			}
			return countSwitchOn(simulateOperation(operations, breakPoints, indexTable));
		}
		/**
		 * retrieve all instructions 
		 * @param {String} [url] - instruction URL
		 *
		 * @return {Object} [Promise object]
		 */
		function getInsturction(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) resolve(this.responseText.trim());
					if(this.status == 404) reject("No Instruction Found.");
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `10
                 3 6
                 0 4
                 7 3
                 9 9`;
		console.log(`%cSwitches On: %c${flipSwitch(input)}`, "color : skyblue;", "color : orange;");   
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `1000
             616 293
             344 942
             27 524
             716 291
             860 284
             74 928
             970 594
             832 772
             343 301
             194 882
             948 912
             533 654
             242 792
             408 34
             162 249
             852 693
             526 365
             869 303
             7 992
             200 487
             961 885
             678 828
             441 152
             394 453`;                     
		console.log(`%cSwitches On: %c${flipSwitch(input)}`, "color : skyblue;", "color : orange;");  
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		let url = "https://raw.githubusercontent.com/fsufitch/dailyprogrammer/master/ideas/switches/lots_of_switches.txt";
		getInsturction(url).then(result => {
			let time = new Date().getTime();
			console.log(`%cSwitches On: %c${flipSwitch(result)}`, "color : skyblue;", "color : orange;");   
			console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : skyblue;", "color : orange;");
		}).catch(error => {console.log(error);});
	});
})();		