/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * sort all characters in a string in ascending order
		 * @param String
		 *
		 * string : string to be sorted
		 *
		 * returns String
		 */
		function ascString(string) {
			return string.toLowerCase().split("")
			             .sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");
		} 
	  /**
	   * check if a set of word is 
	   * a anagram of another
	   * @param array [], array []
	   *
	   * set1 : character set 1
	   * set2 : character set 2
	   *
	   * returns boolean 
	   */	
	  function isAnagram(set1, set2) {
	  	return ascString(set1) == ascString(set2);
	  } 
		/**
		 * detect anagram 
		 * @param String
		 *
		 * testLine : line of words to be tested
		 *
		 * returns String
		 */
		function detectAnagram(testLine) {
			let charSets = testLine.match(/[A-Z|a-z|?]/g).join("").split("?");
			return testLine.replace("?", `is${isAnagram(charSets[0], charSets[1]) ? "" : " NOT"} an anagram of`);
		} 
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `"Clint Eastwood" ? "Old West Action"`;
		console.log(detectAnagram(input));
    input = `"parliament" ? "partial man"`;
		console.log(detectAnagram(input));
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
    input = `"wisdom" ? "mid sow"`;
		console.log(detectAnagram(input));
    input = `"Seth Rogan" ? "Gathers No"`;
		console.log(detectAnagram(input));
    input = `"Reddit" ? "Eat Dirt"`;
		console.log(detectAnagram(input));
    input = `"Schoolmaster" ? "The classroom"`;
		console.log(detectAnagram(input));
    input = `"Astronomers" ? "Moon starer"`;
		console.log(detectAnagram(input));
    input = `"Vacation Times" ? "I'm Not as Active"`;
		console.log(detectAnagram(input));
    input = `"Dormitory" ? "Dirty Rooms"`;
		console.log(detectAnagram(input));
	});
})();			