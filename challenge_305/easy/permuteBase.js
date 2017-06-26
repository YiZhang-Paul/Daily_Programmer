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

  	} 
  	/**
  	 * convert value to index using a binary tree
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