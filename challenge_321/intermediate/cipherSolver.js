/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * construct alphabet table
		 *
		 * returns obj {}
		 */
		function makeAlphabet() {
			let alphabet = new Map();
			for(let i = 0, j = "a".charCodeAt(); i < 26; i++) {
				alphabet.set(String.fromCharCode(j), i + 1);
				alphabet.set(String.fromCharCode(j).toUpperCase(), i + 1);
				alphabet.set(i + 1, String.fromCharCode(j++));
			}
			return alphabet;
		} 
		/**
		 * check if a character is upper case
		 * @param char
		 *
		 * char : character to be tested
		 *
		 * returns boolean
		 */
		function isUpperCase(char) {
			return char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
		} 
		/**
		 * check if a character is letter
		 * @param char
		 *
		 * char : character to be tested
		 *
		 * returns boolean
		 */
		function isLetter(char) {
			let code = char.charCodeAt();
			return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
		} 
		/**
		 * encode character
		 * @param char, int, int, obj {} 
		 *
		 * char     : character to be encoded
		 * a        : encode multiplier
		 * b        : shift magnitude
		 * alphabet : alphabet for convertion 
		 * 
		 * returns char 
		 */
		function encodeChar(char, a, b, alphabet) {
			return alphabet.get((alphabet.get(char) * a + b) % (alphabet.size / 3));
		} 
		/**
		 * encode text
		 * @param String, int, int, obj {}
		 *
		 * text     : text to be encoded
		 * a        : encode multiplier
		 * b        : shift magnitude
		 * alphabet : alphabet for convertion 
		 *
		 * returns String
		 */
		function encodeText(text, a, b, alphabet) {
			return text.split("").map(char => isLetter(char) ? encodeChar(char, a, b, alphabet) : char).join("");
		} 
		/**
		 * find modular multiplicative inverse for a given number
		 * @param int, int
		 *
		 * a : multiplier of encryption
		 * m : alphabet table size
		 *
		 * returns int
		 */
		function findMMI(a, m) {
			let ax = m + 1;
			while(ax % a) {
				ax += m;
			}
			return ax / a;
		} 
		/**
		 * decode character
		 * @param char, int, int, obj {}, boolean 
		 *
		 * char          : character to be decoded
		 * aInverse      : multiplier MMI
		 * b             : shift magnitude
		 * alphabet      : alphabet for convertion 
		 * caseSensitive : keep the original case of text
		 *
		 * returns char
		 */
		function decodeChar(char, aInverse, b, alphabet, caseSensitive) {
			let decoded = alphabet.get((alphabet.get(char) - b) * aInverse % (alphabet.size / 3));
			return caseSensitive && isUpperCase(char) ? decoded.toUpperCase() : decoded;
		}
		/**
		 * decode text
		 * @param String, int, int, obj {}, boolean
		 * 
		 * text          : text to be decoded
		 * aInverse      : multiplier MMI
		 * b             : shift magnitude 
		 * alphabet      : alphabet for convertion 
		 * caseSensitive : keep the original case of text
		 *
		 * returns String
		 */
		function decodeText(text, aInverse, b, alphabet, caseSensitive) {
			return text.split("").map(char => isLetter(char) ? decodeChar(char, aInverse, b, alphabet, caseSensitive) : char).join("");
		} 
		/**
		 * get dictionary
		 * @param String
		 *
		 * url : URL of dictionary
		 * 
		 * returns obj {}
		 */
		function getDictionary(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) {
						resolve(new Set(this.responseText.split("\n").map(word => word.trim())));
					}
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		} 
		/**
		 * check if every decoded word is 
		 * an established English vocabulary
		 * @param array [], int, int, obj {}, obj {}
		 *
		 * list       : list of words to be decoded
		 * aInverse   : multiplier MMI
		 * b          : shift magnitude 
		 * alphabet   : alphabet for convertion 
		 * dictionary : dictionary for decoding
		 *
		 * returns boolean 
		 */
		function canDecode(list, aInverse, b, alphabet, dictionary) {
			return list.every(word => dictionary.has(decodeText(word, aInverse, b, alphabet)) || word === "");
		} 
		/**
		 * crack cipher
		 * @param String, obj {}, boolean
		 *
		 * text          : text to be decoded
		 * dictionary    : dictionary for decoding
		 * caseSensitive : keep the original case of text
		 *
		 * returns String
		 */
		function solveCipher(text, dictionary, caseSensitive) {
			//remove non-alphabetical characters
			let words = text.split("").map(word => isLetter(word) || word == " " ? word : " ").join("").split(" ");
			//crack encoding data	
			let prime = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
			let alphabet = makeAlphabet();
			let a, b, aInverse;
			for(let i = 0; i < prime.length; i++) {
				//find modular multiplicative inverse
				aInverse = findMMI(prime[i], alphabet.size / 3);
				for(let j = 0; j < alphabet.size / 3; j++) {
					//crack multiplier and shift magnitude
					if(canDecode(words, aInverse, j, alphabet, dictionary)) {
						return decodeText(text, aInverse, j, alphabet, caseSensitive);
					}
				}
			}
		} 
		//decode inputs
		getDictionary("dictionary.txt").then(dictionary => {
			let timeSpent = start => `${new Date().getTime() - start}ms`;
			let time = new Date().getTime();
			//default input
			let input = "NLWC WC M NECN";
			console.log(solveCipher(input, dictionary), timeSpent(time));
			input = "YEQ LKCV BDK XCGK EZ BDK UEXLVM QPLQGWSKMB";
			console.log(solveCipher(input, dictionary), timeSpent(time));
			input = "NH WRTEQ TFWRX TGY T YEZVXH GJNMGRXX STPGX NH XRGXR TX QWZJDW ZK WRNUZFB P WTY YEJGB ZE RNSQPRY XZNR YJUU ZSPTQR QZ QWR YETPGX ZGR NPGJQR STXQ TGY URQWR VTEYX WTY XJGB";
			console.log(solveCipher(input, dictionary), timeSpent(time));
			//bonus input
			input = "Yeq lkcv bdk xcgk ez bdk uexlv'm qplqgwskmb.";
			console.log(solveCipher(input, dictionary, true), timeSpent(time));
			input = "Nh wrteq tfwrx, tgy t yezvxh gjnmgrxx stpgx / Nh xrgxr, tx qwzjdw zk wrnuzfb p wty yejgb, / Ze rnsqpry xznr yjuu zsptqr qz qwr yetpgx / Zgr npgjqr stxq, tgy Urqwr-vteyx wty xjgb.";
			console.log(solveCipher(input, dictionary, true), timeSpent(time));
		});
	});
})();		