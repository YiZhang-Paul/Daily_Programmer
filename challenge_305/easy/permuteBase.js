/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	/**
  	 * convert index to value
  	 * @param int, int
  	 *
  	 * index : index to be converted
  	 * base  : base of number system
  	 *
  	 * returns String
  	 */
  	function indexToVal(index, base) {
  		//find sub index and length of value
  		let length = 1, baseIndex = 0, subIndex = 1;
  		while(baseIndex < index) {
  			if(baseIndex + Math.pow(base, length) > index) {
  				subIndex = index - baseIndex + 1; 
  				break;
  			}
  			baseIndex += Math.pow(base, length++);
  		}
  		//find value
  		let value = "", low = 1, high = Math.pow(base, length);
  		for(let i = 0; i < length; i++) {
  			let groupSize = (high - low + 1) / base;
  			let digit = Math.floor((subIndex - low) / groupSize);
  			value += digit;
  			low += digit * groupSize; 
  			high = low + groupSize - 1;
  		}
  		return value;
  	}
    /**
  	 * convert value to index
  	 * @param String, int
  	 *
  	 * value : value to be converted
  	 * base  : base of number system
  	 *
  	 * returns int
  	 */
  	function valToIndex(value, base) {
  		//find base index
  		let baseIndex = 0;
  		for(let i = 1; i < value.length; i++) {
  			baseIndex += Math.pow(base, i);
  		}
  		//find sub index
  		let low = 1, high = Math.pow(base, value.length);
  		for(let i = 0; i < value.length; i++) {
  			let leftBranch = Number(value[i]) < base * 0.5;
  			low += leftBranch ? 0 : (high - low + 1) * 0.5;
  			high -= leftBranch ? (high - low + 1) * 0.5 : 0;
  		}
  		return baseIndex + low - 1;
  	} 
  	//default input
  	console.log("Default input: ");
  	let input = 54;
  	console.log(indexToVal(input, 2));
  	input = "111000111";
  	console.log(valToIndex(input, 2));
  	//challenge input
  	console.log("Challenge input: ");
  	input = 234234234;
  	console.log(indexToVal(input, 2));
		input = 234234234234234;
  	console.log(indexToVal(input, 2));
		input = 234234234234234234234234;
  	console.log(indexToVal(input, 2));
		input = "000111000111111000111111000111111000111";
  	console.log(valToIndex(input, 2));
		input = "11111111000111000111111000111111000111111000111"; 
  	console.log(valToIndex(input, 2));
  	//bonus input
  	console.log("Bonus input: ");
  	input = 10;
  	console.log(indexToVal(input, 10));
  	input = 109;
  	console.log(indexToVal(input, 10));
  });
})();    	