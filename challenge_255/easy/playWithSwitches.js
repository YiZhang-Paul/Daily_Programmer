/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find insertion index
		 * @param {Object} [node] - node to be inserted
		 * @param {Array} [allPoints] - list of all points
		 *
		 * @return {int} [insertion index]
		 */
		function getInsertIndex(node, allPoints) {
			let index = allPoints.findIndex(point => point.value >= node.value);
			return index == -1 ? allPoints.length : index;
		}
		/**
		 * get total number of switches and all operations
		 * @param {String} [instruction] - total number of switches as well as the operations
		 *
		 * @return {Array} [total number of switches and all operations]
		 */
		function getInstruction(instruction) {
			let lines = instruction.split("\n").map(line => line.trim());
			return [Number(lines[0]), lines.slice(1).map(operation => operation.split(" ").map(num => Number(num)).sort((a, b) => a - b))];
		}
		/**
		 * add starting switch to break points
		 * @param {int} [begin] - value of begin node
		 * @param {Array} [points] - all break points 
		 *
		 * @return {int} [start index]
		 */
		function addBeginNode(begin, points) {
			let index = getInsertIndex({value : begin}, points);
			if(points[index] && points[index].value == begin) {
				points[index].state = points[index].state ? 0 : 1;
				return index;
			}
			points.splice(index, 0, {value : begin, state : points[index - 1].state ? 0 : 1});
			return index;
		}
		/**
		 * add ending switch to break points
		 * @param {int} [start] - begin index
		 * @param {int} [end] - value of end node
		 * @param {Array} [points] - all break points
		 */
		function addEndNode(start, end, points) {
			let index = getInsertIndex({value : end}, points);
			for(let i = start + 1; i < index; i++) {
				points[i].state = points[i].state ? 0 : 1;
			}
			if(points[index] && points[index].value == end) {
				points[index].value++;
				return;
			}
			points.splice(index, 0, {value : end, state : points[index - 1].state ? 0 : 1});
		}
		/**
		 * count total number of switches on
		 * @param {int} [totalSwitch] - total number of switches
		 * @param {Array} [points] - all break points to indicate switch states
		 * 
		 * @return {int} [total switches on]
		 */
		function countSwitchOn(totalSwitch, points) {
			let totalOn = 0;
			for(let i = 0, curNode = null; i < points.length; i++) {
				curNode = !curNode && points[i].state ? points[i] : curNode;
				if(curNode) {
					if(points[i].state) {
						continue;
					}
					totalOn += points[i].value - curNode.value;
					curNode = null;
				}
			}
			console.log(points);
			return totalOn + (points[points.length - 1].state ? totalSwitch - points[points.length - 1].value : 0);
		}
		/**
		 * check total number of switches on after a series of flipping
		 * @param {String} [instruction] - total number of switches as well as the operations
		 *
		 * @return {int} [total number of switches still on]
		 */
		function flipSwitch(instruction) {
			let [totalSwitch, operations] = getInstruction(instruction);
			let breakPoints = [{value : 0, state : 0}];
			operations.forEach(operation => {
				let start = addBeginNode(operation[0], breakPoints);
				if(operation[1] + 1 < totalSwitch) {
					addEndNode(start, operation[1] + 1, breakPoints);
				}
			});
			return countSwitchOn(totalSwitch, breakPoints);
		}
		/**
		 * get all switch operations
		 * @param {String} [url] - operation URL
		 *
		 * @return {Object} [Promise Object]
		 */
		function getOperation(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) resolve(this.responseText);
					if(this.status == 404) reject("No Operation Found.");
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
		getOperation(url).then(result => {
			let time = new Date().getTime();
			//console.log(`%cSwitches On: %c${flipSwitch(result)}`, "color : skyblue;", "color : orange;");   
			console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : skyblue;", "color : orange;");
		}).catch(error => {console.log(error);});
	});
})();		