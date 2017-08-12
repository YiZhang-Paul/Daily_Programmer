/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create GUID
		 *
		 * @return {String} [GUID] 
		 */
		function getGUID() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, char => {
				let seed = Math.random() * 16 | 0;
				return char == "x" ? seed.toString(16) : (seed & 0x3 | 0x8).toString(16);
			});
		}
		/**
		 * Secure Hash Algorithm (SHA1)
		 * cited from : http://www.webtoolkit.info/
		 * license : https://creativecommons.org/licenses/by/2.0/uk/legalcode
		 * @param {String} [str] - string to be hashed
		 *
		 * @return {String} [hash]
		 */
		function SHA1(str) {
		  function rotateLeft(n, s) {
		  	return (n << s) | (n >>> (32 - s));
		  }
		  function lsbHex(val) {
		    let string = "", vh, vl;
		    for(let i = 0; i <= 6; i += 2) {
		    	[vh, vl] = [(val >>> (i * 4 + 4)) & 0x0f, (val >>> (i * 4)) & 0x0f];
		      string += vh.toString(16) + vl.toString(16);
		    }
		    return string;
		  }
		  function cvtHex(val) {
		    let string = "";
		    for(let i = 7; i >= 0; i--) {
		      string += ((val >>> (i * 4)) & 0x0f).toString(16);
		    }
		    return string;
		  }
		  function Utf8Encode(string) {
		    string = string.replace(/\r\n/g,"\n");
		    let utfText = "";
		    for(let n = 0; n < string.length; n++) {
		      let c = string.charCodeAt(n);
		      if(c < 128) {
		        utfText += String.fromCharCode(c);
		      } else if(c >= 128 && c < 2048) {
		        utfText += String.fromCharCode(c >> 6 | 192);
		        utfText += String.fromCharCode(c & 63 | 128);
		      } else {
		        utfText += String.fromCharCode(c >> 12 | 224);
		        utfText += String.fromCharCode(c >> 6 & 63 | 128);
		        utfText += String.fromCharCode(c & 63 | 128);
		      }
		    }
		    return utfText;
		  }
		  let W = new Array(80);
		  let H0 = 0x67452301;
		  let H1 = 0xEFCDAB89;
		  let H2 = 0x98BADCFE;
		  let H3 = 0x10325476;
		  let H4 = 0xC3D2E1F0;
		  let A, B, C, D, E;
		  let i, temp;
		  str = Utf8Encode(str);
		  let strLen = str.length;
		  let wordArray = [];
		  for(i = 0; i < strLen - 3; i += 4) {
		    let j = str.charCodeAt(i) << 24 | 
		            str.charCodeAt(i + 1) << 16 |
		    				str.charCodeAt(i + 2) << 8 | 
		    				str.charCodeAt(i + 3);
		    wordArray.push(j);
		  }
		  switch(strLen % 4) {
		    case 0:
		      i = 0x080000000;
		      break;
		    case 1:
		      i = str.charCodeAt(strLen - 1) << 24 | 0x0800000;
		      break;
		    case 2:
		      i = str.charCodeAt(strLen - 2) << 24 | str.charCodeAt(strLen - 1) << 16 | 0x08000;
		    	break;
		    case 3:
		      i = str.charCodeAt(strLen - 3) << 24 | str.charCodeAt(strLen - 2) << 16 | str.charCodeAt(strLen - 1) << 8 | 0x80;
		      break;
		  }
		  wordArray.push(i);
		  while(wordArray.length % 16 != 14) {
		  	wordArray.push(0);
		  }
		  wordArray.push(strLen >>> 29);
		  wordArray.push(strLen << 3 & 0x0ffffffff);
		  for(let blockstart = 0; blockstart < wordArray.length; blockstart += 16) {
		    for(let i = 0; i < 16; i++) {
		    	W[i] = wordArray[blockstart + i];	
		    }
		    for(let i = 16; i <= 79; i++) {
		    	W[i] = rotateLeft(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
		    }
		    [A, B, C, D, E] = [H0, H1, H2, H3, H4];
		    for(let i = 0; i <= 19; i++) {
		      temp = (rotateLeft(A, 5) + (B & C | ~B & D) + E + W[i] + 0x5A827999) & 0x0ffffffff;
		      E = D;
		      D = C;
		      C = rotateLeft(B, 30);
		      B = A;
		      A = temp;
		    }
		    for(let i = 20; i <= 39; i++) {
		      temp = (rotateLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
		      E = D;
		      D = C;
		      C = rotateLeft(B, 30);
		      B = A;
		      A = temp;
		    }
		    for(let i = 40; i <= 59; i++) {
		      temp = (rotateLeft(A, 5) + (B & C | B & D | C & D) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
		      E = D;
		      D = C;
		      C = rotateLeft(B, 30);
		      B = A;
		      A = temp;
		    }
		    for(let i = 60; i <= 79; i++) {
		      temp = (rotateLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
		      E = D;
		      D = C;
		      C = rotateLeft(B, 30);
		      B = A;
		      A = temp;
		    }
		    H0 = (H0 + A) & 0x0ffffffff;
		    H1 = (H1 + B) & 0x0ffffffff;
		    H2 = (H2 + C) & 0x0ffffffff;
		    H3 = (H3 + D) & 0x0ffffffff;
		    H4 = (H4 + E) & 0x0ffffffff;
		  }
		  temp = cvtHex(H0) + cvtHex(H1) + cvtHex(H2) + cvtHex(H3) + cvtHex(H4);
		  return temp.toLowerCase();
		}
		/**
		 * generate hash for password
		 * @param {String} [password] - password for hashing
		 *
		 * @return {String} [hashed password]
		 */
		function hashPassword(password) {
			return SHA1(password + getGUID());
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = "mySecretPassWord";
		console.log(`%c${input} -> %c${hashPassword(input)}`, "color : skyblue;", "color : orange;");
		console.log(`%c${input} -> %c${hashPassword(input)}`, "color : skyblue;", "color : orange;");
		input = "helloworld123";
		console.log(`%c${input} -> %c${hashPassword(input)}`, "color : skyblue;", "color : orange;");
		console.log(`%c${input} -> %c${hashPassword(input)}`, "color : skyblue;", "color : orange;");
		input = "yangzierzniuroumiansunzfridge17haha";
		console.log(`%c${input} -> %c${hashPassword(input)}`, "color : skyblue;", "color : orange;");
		console.log(`%c${input} -> %c${hashPassword(input)}`, "color : skyblue;", "color : orange;");
	});
})();			