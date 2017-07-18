/* jslint esversion: 6 */
(() => {
	/**
	 * combine words together
	 * @param String
	 *
	 * sentence : sentence to be combined
	 *
	 * returns String
	 */
	function combineWord(sentence) {
		return sentence.match(/\w/g).join("").toLowerCase();
	} 
	/**
	 * check if a word or sentence is palindrome
	 * @param String
	 *
	 * sentence : word or sentence to be examined
	 * 
	 * returns String
	 */
	function isPalindrome(sentence) {
		sentence = /\W/.test(sentence) ? combineWord(sentence) : sentence;
		for(let i = 0, j = sentence.length - 1; i < sentence.length; i++) {
			if(sentence[i] != sentence[j--]) return "Not a palindrome";
			if(i + 1 == j || i + 1 > j) return "Palindrome";
		}
	} 
	/**
	 * reverse a word 
	 * @param String
	 *
	 * word : word to be reversed
	 * 
	 * returns String
	 */ 
	function reverseWord(word) {
		return word.split("").reverse().join("");
	} 
	/**
	 * check if a word is a prefix of another word
	 * @param String, String
	 *
	 * shorter : shorter word
	 * longer  : longer word
	 *
	 * returns boolean
	 */
	function isPrefix(shorter, longer) {
		return shorter == longer.slice(0, shorter.length);
	} 
	/**
	 * pick all words that forms two-word 
	 * palindrome with the given word 
	 * @param String, array []
	 *
	 * word : words to be checked
	 * list : list of all words
	 *
	 * returns array []
	 */
	function formTwoWordPalindrome(word, list) {
		let palindrome = [];
		for(let i = 0; i < list.length; i++) {
			let [shorter, longer] = [...[word, list[i]].sort((a, b) => a.length - b.length)];
			if(shorter[1] == longer[1] && isPrefix(shorter, longer) && isPalindrome(longer.slice(shorter.length)) == "Palindrome") {
				palindrome.push(`${word} ${reverseWord(list[i])}`);
			}
		}
		return palindrome;
	}
	self.addEventListener("message", e => {
		self.postMessage(formTwoWordPalindrome(...e.data));
	});
})();			