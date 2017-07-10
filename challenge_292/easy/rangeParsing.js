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
			while(num2 < num1) {
				num2 += 10;
			}
			return num2;
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
			num2 = nextNum(num1, num2); 
			let nums = [];
			for(let i = num1 + step; i <= num2; i += step) {
				nums.push(i);
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
	  	notation = notation.match(/(\d+|[,.:-])/g);
	  	let list = [Number(notation[0])];
	  	for(let i = 1; i < notation.length; i++) {
	  		let [lastNum, curNum] = [list[list.length - 1], Number(notation[i + 1])];
	  		switch(notation[i]) {
	  			case "," :
	  				list.push(nextNum(lastNum, curNum));
	  				break;
	  			case "-" :
	  				list = [...list, ...numInRange(lastNum, curNum)];
	  				break;
	  			case ":" :
	  				let step = notation[i + 2] == ":" ? Number(notation[i + 3]) : 1;
	  				i += notation[i + 2] == ":" ? 3 : 0;
	  				list = [...list, ...numInRange(lastNum, curNum, step)];
	  				break;
	  			case "." :
	  		}
	  	}
	  	return list.join(" ");
	  }  
	  //challenge input
	  let input = "1,3,7,2,4,1";
	  console.log(`${input} => ${expandList(input)}`);
		input = "1-3,1-2";
	  console.log(`${input} => ${expandList(input)}`);
		input = "1:5:2";
	  console.log(`${input} => ${expandList(input)}`);
		input = "104-2";
	  console.log(`${input} => ${expandList(input)}`);
		input = "104..02";
		input = "545,64:11";
	});
})();		