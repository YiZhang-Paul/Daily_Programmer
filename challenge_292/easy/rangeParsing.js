/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get next larger number
		 * @param int, int
		 * 
		 * num1 : number 1
		 * num2 : number 2
		 *
		 * returns int 
		 */
		function nextNum(num1, num2) {
			let tail = num2;
			[num1, num2] = [Number(num1), Number(num2)];
			while(num2 < num1 || num2.toString().slice(-tail.length) != tail) {
				num2 += 10;
			}
			return num2.toString();
		} 
		/**
		 * find all numbers within a range
		 * @param int, int, int
		 *
		 * num1 : starting number
		 * num2 : ending number
		 * step : step between each number
		 *
		 * returns array []
		 */
		function numInRange(num1, num2, step = 1) {
			let [start, end] = [Number(num1) + step, Number(nextNum(num1, num2))];
			let nums = [];
			for(let i = start; i <= end; i += step) {
				nums.push(i.toString());
			}
			return nums;
		}
	  /**
	   * expand number list 
	   * @param String
	   *
	   * notation : short-hand notation for number list
	   *
	   * returns String
	   */
	  function expandList(notation) {
	  	notation = notation.match(/\d+|[,:-]|\.{2}/g);
	  	let list = [notation[0]];
	  	for(let i = 1; i < notation.length; i++) {
	  		let [lastNum, operator, curNum] = [list[list.length - 1], notation[i], notation[i + 1]];
	  		switch(operator) {
	  			case "," :
	  				list.push(nextNum(lastNum, curNum));
	  				break;
	  			case "-" : 
	  			case ".." : 
	  			case ":" :
	  				let hasStep = operator == ":" && notation[i + 2] == ":";
	  				let step = hasStep ? Number(notation[i + 3]) : 1;
	  				i += hasStep ? 3 : 0;
	  				list = [...list, ...numInRange(lastNum, curNum, step)];
	  				break;
	  		}
	  	}
	  	return list.join(" ");
	  }  
	  //challenge input
	  let input = "1,3,7,2,4,1";
	  console.log(`${input} => %c${expandList(input)}`, "color : red;");
		input = "1-3,1-2";
	  console.log(`${input} => %c${expandList(input)}`, "color : red;");
		input = "1:5:2";
	  console.log(`${input} => %c${expandList(input)}`, "color : red;");
		input = "104-2";
	  console.log(`${input} => %c${expandList(input)}`, "color : red;");
		input = "104..02";
	  console.log(`${input} => %c${expandList(input)}`, "color : red;");
		input = "545,64:11";
	  console.log(`${input} => %c${expandList(input)}`, "color : red;");
	});
})();		