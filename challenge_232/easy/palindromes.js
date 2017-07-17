/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
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
		 * slice string into two equal halves
		 * @parma String
		 *
		 * string : string to be sliced
		 *
		 * returns array []
		 */
		function sliceString(string) {
			let half = string.length % 2 ? (string.length - 1) * 0.5 : string.length * 0.5;
			return [string.slice(0, half), string.slice(-half)];
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
			let slices = sliceString(combineWord(sentence));
			return slices[0] == slices[1].split("").reverse().join("") ? "Palindrome" : "Not a palindrome";
		} 
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `Was it a car
								 or a cat
								 I saw?`;
		console.log(`${input.split("\n").map(line => line.trim()).join(" ")} %c-> ${isPalindrome(input)}`, "color : yellow;");						 
		input = `A man, a plan, 
						 a canal, a hedgehog, 
						 a podiatrist, 
						 Panama!`;						 
		console.log(`${input.split("\n").map(line => line.trim()).join(" ")} %c-> ${isPalindrome(input)}`, "color : yellow;");						 
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = `Are we not drawn onward, 
             we few, drawn onward to new area?`;
		console.log(`${input.split("\n").map(line => line.trim()).join(" ")} %c-> ${isPalindrome(input)}`, "color : yellow;");						 
    input = `Dammit I'm mad.
					   Evil is a deed as I live.
					   God, am I reviled? I rise, my bed on a sun, I melt.
					   To be not one man emanating is sad. I piss.
					   Alas, it is so late. Who stops to help?
					   Man, it is hot. I'm in it. I tell.
					   I am not a devil. I level "Mad Dog".
					   Ah, say burning is, as a deified gulp,
					   In my halo of a mired rum tin.
					   I erase many men. Oh, to be man, a sin.
					   Is evil in a clam? In a trap?
					   No. It is open. On it I was stuck.
					   Rats peed on hope. Elsewhere dips a web.
					   Be still if I fill its ebb.
					   Ew, a spider… eh?
					   We sleep. Oh no!
					   Deep, stark cuts saw it in one position.
					   Part animal, can I live? Sin is a name.
					   Both, one… my names are in it.
					   Murder? I'm a fool.
					   A hymn I plug, deified as a sign in ruby ash,
					   A Goddam level I lived at.
					   On mail let it in. I'm it.
					   Oh, sit in ample hot spots. Oh wet!
					   A loss it is alas (sip). I'd assign it a name.
					   Name not one bottle minus an ode by me:
					   "Sir, I deliver. I'm a dog"
					   Evil is a deed as I live.
					   Dammit I'm mad.`;         
		console.log(`${input.split("\n").map(line => line.trim()).join(" ")} %c-> ${isPalindrome(input)}`, "color : yellow;");						 
	});
})();		