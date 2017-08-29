/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * retrieve all operations
		 * @param {String} [instruction] - instructions containing all operations on switches
		 *
		 * @return {Array} [all operations]
		 */
		function getOperation(instruction) {
			let rawOperations = instruction.split("\n").slice(1).map(operation => 
				operation.trim().split(" ").map(num => Number(num)).sort((a, b) => a - b));
			return rawOperations.map(operation => [operation[0], operation[1] + 1]); 
		}
		/**
		 * check total number of switches on after a series of operations
		 * @param {String} [instruction] - instructions to be followed
		 *
		 * @return {int} [total number of switches on]
		 */
		function checkSwitch(instruction) {
			let operations = getOperation(instruction);
			let breakPoints = [];
			for(let i = 0; i < operations.length; i++) {
				breakPoints.push(...operations[i]);
			}
			return breakPoints.sort((a, b) => a - b).reduce((acc, val, index, arr) => 
				acc + (index % 2 ? val - arr[index - 1] : 0), 0);
		}
		/**
		 * retrieve all instructions on switches
		 * @param {String} [url] - instructions URL
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
		console.log(`%cSwitches On: %c${checkSwitch(input)}`, "color : skyblue;", "color : orange;");   
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
		console.log(`%cSwitches On: %c${checkSwitch(input)}`, "color : skyblue;", "color : orange;");  
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		let url = "https://raw.githubusercontent.com/fsufitch/dailyprogrammer/master/ideas/switches/lots_of_switches.txt";
		getInsturction(url).then(result => {
			let time = new Date().getTime();
			console.log(`%cSwitches On: %c${checkSwitch(result)}`, "color : skyblue;", "color : orange;");   
			console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : skyblue;", "color : orange;");
		}).catch(error => {console.log(error);});
	});
})();		