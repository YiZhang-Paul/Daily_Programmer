/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
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
		 * custom scheme for decoding character
		 * @param char, int, int, obj {}, boolean 
		 *
		 * char          : character to be decoded
		 * a             : decode multiplier
		 * b             : shift magnitude
		 * alphabet      : alphabet for convertion 
		 * caseSensitive : keep the original case of text
		 *
		 * returns char
		 */
		function customDecodeChar(char, a, b, alphabet, caseSensitive) {
			let decoded = alphabet.get((alphabet.get(char) * a + b) % (alphabet.size / 3));
			return caseSensitive && isUpperCase(char) ? decoded.toUpperCase() : decoded;
		} 
		/**
		 * custom scheme for decoding text
		 * @param String, int, int, obj {}, boolean
		 *
		 * text          : text to be decoded
		 * a             : decode multiplier
		 * b             : shift magnitude
		 * alphabet      : alphabet for convertion 
		 * caseSensitive : keep the original case of text
		 *
		 * returns String
		 */
		function customDecodeText(text, a, b, alphabet, caseSensitive) {
			return text.split("").map(char => isLetter(char) ? customDecodeChar(char, a, b, alphabet, caseSensitive) : char).join("");
		} 
		/**
		 * check if every custom decoded word is 
		 * an established English vocabulary
		 * @param array [], int, int, obj {}, obj {}
		 *
		 * list       : list of words to be decoded
		 * a          : decode multiplier
		 * b          : shift magnitude
		 * alphabet   : alphabet for convertion 
		 * dictionary : dictionary for decoding
		 *
		 * returns boolean
		 */ 
		function canCustomDecode(list, a, b, alphabet, dictionary) {
			return list.every(word => dictionary.has(customDecodeText(word, a, b, alphabet)));
		} 
		/**
		 * crack cipher with custom setting
		 * @param String, obj {}, boolean
		 *
		 * text          : text to be decoded
		 * dictionary    : dictionary for decoding
		 * caseSensitive : keep the original case of text
		 *
		 * returns String
		 */
		function customCipher(text, dictionary, caseSensitive) {
			//remove non-alphabetical characters
			let words = text.split("").map(word => isLetter(word) || word == " " ? word : " ")
				.join("").split(" ").filter(word => word !== "");
			//crack decoding data	
			let prime = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
			let alphabet = makeAlphabet();
			for(let i = 0; i < prime.length; i++) {
				for(let j = 0; j < alphabet.size / 3; j++) {
					if(canCustomDecode(words, prime[i], j, alphabet, dictionary)) {
						return customDecodeText(text, prime[i], j, alphabet, caseSensitive);
					}
				}
			}
			return "<--No Match Found-->";
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
			return list.every(word => dictionary.has(decodeText(word, aInverse, b, alphabet)));
		} 
		/**
		 * crack cipher with custom setting
		 * @param String, obj {}, boolean
		 *
		 * text          : text to be decoded
		 * dictionary    : dictionary for decoding
		 * caseSensitive : keep the original case of text
		 *
		 * returns String
		 */
		function affineCipher(text, dictionary, caseSensitive) {
			//remove non-alphabetical characters
			let words = text.split("").map(word => isLetter(word) || word == " " ? word : " ")
				.join("").split(" ").filter(word => word !== "");
			//crack decoding data	
			let prime = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
			let alphabet = makeAlphabet();
			for(let i = 0; i < prime.length; i++) {
				//find modular multiplicative inverse
				let aInverse = findMMI(prime[i], alphabet.size / 3);
				for(let j = 0; j < alphabet.size / 3; j++) {
					if(canDecode(words, aInverse, j, alphabet, dictionary)) {
						return decodeText(text, aInverse, j, alphabet, caseSensitive);
					}
				}
			}
			return "<--No Match Found-->";
		} 
		//decode inputs
		getDictionary("dictionary.txt").then(dictionary => {
			let timeSpent = start => `(${(new Date().getTime() - start) / 1000} seconds)`;
			let time = new Date().getTime();
			/**
			 * custom decoding scheme
			 */
			console.log("%cCustom Decoding: ", "color : yellow;");
			//default input
			console.log("%cDefault Input: ", "color : red;");
			let input = "NLWC WC M NECN";
			console.log(customCipher(input, dictionary), timeSpent(time));
			input = "YEQ LKCV BDK XCGK EZ BDK UEXLVM QPLQGWSKMB";
			console.log(customCipher(input, dictionary), timeSpent(time));
			input = "NH WRTEQ TFWRX TGY T YEZVXH GJNMGRXX STPGX NH XRGXR TX QWZJDW ZK WRNUZFB P WTY YEJGB ZE RNSQPRY XZNR YJUU ZSPTQR QZ QWR YETPGX ZGR NPGJQR STXQ TGY URQWR VTEYX WTY XJGB";
			console.log(customCipher(input, dictionary), timeSpent(time));
			//bonus input
			console.log("%cBonus Input: ", "color : red;");
			input = "Yeq lkcv bdk xcgk ez bdk uexlv'm qplqgwskmb.";
			console.log(customCipher(input, dictionary, true), timeSpent(time));
			input = "Nh wrteq tfwrx, tgy t yezvxh gjnmgrxx stpgx / Nh xrgxr, tx qwzjdw zk wrnuzfb p wty yejgb, / Ze rnsqpry xznr yjuu zsptqr qz qwr yetpgx / Zgr npgjqr stxq, tgy Urqwr-vteyx wty xjgb.";
			console.log(customCipher(input, dictionary, true), timeSpent(time));
			/**
			 * affine decoding scheme
			 */
			console.log("%cAffine Decoding: ", "color : yellow;");
			//default input
			console.log("%cDefault Input: ", "color : red;");
			input = "NLWC WC M NECN";
			console.log(affineCipher(input, dictionary), timeSpent(time));
			input = "YEQ LKCV BDK XCGK EZ BDK UEXLVM QPLQGWSKMB";
			console.log(affineCipher(input, dictionary), timeSpent(time));
			input = "NH WRTEQ TFWRX TGY T YEZVXH GJNMGRXX STPGX NH XRGXR TX QWZJDW ZK WRNUZFB P WTY YEJGB ZE RNSQPRY XZNR YJUU ZSPTQR QZ QWR YETPGX ZGR NPGJQR STXQ TGY URQWR VTEYX WTY XJGB";
			console.log(affineCipher(input, dictionary), timeSpent(time));
			//bonus input
			console.log("%cBonus Input: ", "color : red;");
			input = "Yeq lkcv bdk xcgk ez bdk uexlv'm qplqgwskmb.";
			console.log(affineCipher(input, dictionary, true), timeSpent(time));
			input = "Nh wrteq tfwrx, tgy t yezvxh gjnmgrxx stpgx / Nh xrgxr, tx qwzjdw zk wrnuzfb p wty yejgb, / Ze rnsqpry xznr yjuu zsptqr qz qwr yetpgx / Zgr npgjqr stxq, tgy Urqwr-vteyx wty xjgb.";
			console.log(affineCipher(input, dictionary, true), timeSpent(time));
		});
	});
})();		