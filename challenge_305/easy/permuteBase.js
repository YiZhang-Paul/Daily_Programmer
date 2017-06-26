/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	/**
  	 * convert index to value
  	 * @param int
  	 *
  	 * index : index to be converted
  	 *
  	 * returns String
  	 */
  	function indexToVal(index) {
  		//find base index and length of value
  		let length = 1, baseIndex = 0, subIndex = 1;
  		while(baseIndex < index) {
  			if(baseIndex + Math.pow(2, length) > index) {
  				subIndex = index - baseIndex + 1; 
  				break;
  			}
  			baseIndex += Math.pow(2, length++);
  		}
  		//find value
  		let value = "", low = 1, high = Math.pow(2, length);
  		for(let i = 0; i < length; i++) {
  			let leftBranch = subIndex < (high - low + 1) * 0.5 + low;
  			low += leftBranch ? 0 : (high - low + 1) * 0.5; 
  			high -= leftBranch ? (high - low + 1) * 0.5 : 0;
  			value += leftBranch ? 0 : 1;
  		}
  		return value;
  	} 
    /**
  	 * convert value to index
  	 * @param String
  	 *
  	 * value : value to be converted
  	 *
  	 * returns int
  	 */
  	function valToIndex(value) {
  		//find base index
  		let baseIndex = 0;
  		for(let i = 1; i < value.length; i++) {
  			baseIndex += Math.pow(2, i);
  		}
  		//find sub index
  		let subIndex, low = 1, high = Math.pow(2, value.length);
  		for(let i = 0; i < value.length; i++) {
  			low += Number(value[i]) ? (high - low + 1) * 0.5 : 0;
  			high -= Number(value[i]) ? 0 : (high - low + 1) * 0.5;
  		}
  		subIndex = low;
  		return baseIndex - 1 + subIndex;
  	} 
  	//default input
  	let input = "111000111";
  	console.log(valToIndex(input));
  });
})();    	