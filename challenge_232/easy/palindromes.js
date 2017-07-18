/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get word list
		 * @param String
		 *
		 * url : URL of text file
		 *
		 * returns obj {}
		 */
		function getWordList(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) {
						resolve(this.responseText.split("\n").map(word => word.trim()));
					}
				}; 
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}
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
		 * construct word table 
		 * categorized by initial letter
		 * @param array []
		 *
		 * list : list of all words
		 *
		 * returns obj {}
		 */
		function categorizeWord(list) {
			let category = new Map();
			for(let i = 0; i < list.length; i++) {
				if(category.get(list[i][0])) {
					category.get(list[i][0]).push(list[i]);
				} else {
					category.set(list[i][0], [list[i]]);
				}
			}
			return category;
		} 
		/**
		 * find palindromes from groups of words 
		 * with same initial letter
		 * @param array [], array []
		 *
		 * categoryA : word category A
		 * categoryB : word category B
		 *
		 * returns obj {}
		 */
		function sameInitialPalindrome(categoryA, categoryB) {
			return new Promise((resolve, reject) => {
				let palindrome = [], checked = 0, totalWorker = Math.min(8, categoryA.length);
				let makeWorker = index => {
					let worker = new Worker("worker.js");
					worker.postMessage([categoryA[index], categoryB]);
					worker.addEventListener("message", function(e) {
						palindrome.push(...e.data);
						worker.terminate();
						if(++checked == 10) {
							resolve(palindrome);
						} else if(totalWorker++ < 10) {
							makeWorker(++index);
						}
						this.removeEventListener("message", arguments.callee);
					});
				};
				for(let i = 0; i < totalWorker; i++) {
					makeWorker(i);
				}
			});
		} 
		/**
		 * find two-word palindrome from all words
		 * @param array []
		 *
		 * list : list of all words
		 *
		 * returns array []
		 */ 
		function getTwoWordPalindrome(list) {
			let ordered = list.slice();
			let reversed = list.slice()
			                   .map(word => reverseWord(word))
			                   .sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt());
			[ordered, reversed] = [categorizeWord(ordered), categorizeWord(reversed)];
			let palindrome = [];
			for(let i = "a".charCodeAt(); i < "a".charCodeAt() + 26; i++) {
				let initial = String.fromCharCode(i);
				palindrome.push(sameInitialPalindrome(ordered.get(initial), reversed.get(initial)));
			}
			return palindrome;                          
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
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		getWordList("wordList.txt").then(result => {
			let time = new Date().getTime();
			Promise.all(getTwoWordPalindrome(result)).then(values => {
				console.log(`Time Spent: %c${new Date().getTime() - time}ms`, "color : red;");
				values = values.reduce((acc, val) => [...acc, ...val], []);
				console.log(values);
				console.log(`Palindromes Found: %c${values.length}`, "color : red;");
			});
		});
	});
})();		