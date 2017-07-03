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
		 * @param String, int, int
		 *
		 * text : text to be encoded
		 * a    : encode multiplier
		 * b    : shift magnitude
		 *
		 * returns String
		 */
		function encodeText(text, a, b) {
			let alphabet = makeAlphabet();
			return text.split("").map(char => isLetter(char) ? encodeChar(char, a, b, alphabet) : char).join("");
		} 
		/**
		 * decode character
		 * @param char, int, int, obj {} 
		 *
		 * char     : character to be decoded
		 * aInverse : multiplier MMI
		 * b        : shift magnitude
		 * alphabet : alphabet for convertion 
		 *
		 * returns char
		 */
		function decodeChar(char, aInverse, b, alphabet) {
			return alphabet.get((alphabet.get(char) - b) * aInverse % (alphabet.size / 3));
		}
		/**
		 * decode text
		 * @param String, int, int
		 * 
		 * text : text to be decoded
		 * a    : encode multiplier
		 * b    : shift magnitude 
		 *
		 * returns String
		 */
		function decodeText(text, a, b) {
			let alphabet = makeAlphabet();
			let aInverse = findMMI(a, alphabet.size / 3);
			return text.split("").map(char => isLetter(char) ? decodeChar(char, aInverse, b, alphabet) : char).join("");
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
		//default input
		let input = "NLWC WC M NECN";
		input = "YEQ LKCV BDK XCGK EZ BDK UEXLVM QPLQGWSKMB";
		input = "NH WRTEQ TFWRX TGY T YEZVXH GJNMGRXX STPGX NH XRGXR TX QWZJDW ZK WRNUZFB P WTY YEJGB ZE RNSQPRY XZNR YJUU ZSPTQR QZ QWR YETPGX ZGR NPGJQR STXQ TGY URQWR VTEYX WTY XJGB";
		//bonus input
		input = "Yeq lkcv bdk xcgk ez bdk uexlv'm qplqgwskmb.";
		input = "Nh wrteq tfwrx, tgy t yezvxh gjnmgrxx stpgx / Nh xrgxr, tx qwzjdw zk wrnuzfb p wty yejgb, / Ze rnsqpry xznr yjuu zsptqr qz qwr yetpgx / Zgr npgjqr stxq, tgy Urqwr-vteyx wty xjgb.";
	});
})();		