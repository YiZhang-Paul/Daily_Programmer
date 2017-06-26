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
  		let low = 1, high = Math.pow(2, value.length);
  		for(let i = 0; i < value.length; i++) {
  			low += Number(value[i]) ? (high - low + 1) * 0.5 : 0;
  			high -= Number(value[i]) ? 0 : (high - low + 1) * 0.5;
  		}
  		let subIndex = low;
  	} 
  	valToIndex("010");
  });
})();    	