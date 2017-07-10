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
	   * expand number list 
	   * @param String
	   *
	   * notation : short-hand notation for number list
	   *
	   * returns String
	   */
	  function expandList(notation) {
	  	notation = notation.split("");
	  	let list = [Number(notation[0])];
	  	for(let i = 0; i < notation.length; i++) {
	  		let [lastNum, curNum] = [list[list.length - 1], Number(notation[i + 1])];
	  		switch(notation[i]) {
	  			case "," :
	  				list.push(nextNum(lastNum, curNum));
	  				break;
	  			case "-" :
	  			case ":" :
	  			case "." :
	  		}
	  	}
	  	return list.join(" ");
	  }  
	  //challenge input
	  let input = "1,3,7,2,4,1";
	  console.log(expandList("1,3,7,2,4,1"));
		input = "1-3,1-2";
		input = "1:5:2";
		input = "104-2";
		input = "104..02";
		input = "545,64:11";
	});
})();		