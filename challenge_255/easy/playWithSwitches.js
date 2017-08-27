/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * check total number of switches on after a series of flipping
		 * @param {String} [info] - total number of switches as well as the operations
		 *
		 * @return {int} [total number of switches still on]
		 */
		function flipSwitch(info) {
			let lines = info.split("\n").map(line => line.trim());
			let switches = new Array(Number(lines[0])).fill(0);
			lines.slice(1).forEach(flip => {
				let [begin, end] = flip.split(" ").map(num => Number(num)).sort((a, b) => a - b);
				for(let i = begin; i <= end; i++) {
					switches[i] = switches[i] ? 0 : 1; 
				}
			});
			return switches.filter(clip => clip).length;
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
	});
})();		