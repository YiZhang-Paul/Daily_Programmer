/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * encode message 
		 * @param {String} [msg] - message to be encoded
		 *
		 * @return {String} [encoded message]
		 */
		function encode1(msg) {
			return msg.replace(/\+/g, "++").split("\n").map(line => line.trim()).join("+");
		}
		/**
		 * decode message
		 * @param {String} [encoded] - encoded message
		 *
		 * @return {String} [decoded message]
		 */
		function decode1(encoded) {
			return encoded.match(/(\w|\+{2})+/g).map(msg => msg.replace(/\+{2}/g, "+")).join("\n");
		}
		/**
		 * encode message
		 * @param {String} [msg] - message to be encoded
		 *
		 * @return {String} [encoded message]
		 */
		function encode2(msg) {
			let lines = msg.split("\n").map(line => line.match(/\w+|\++/g));
			let encodedLines = lines.map(line => line.map(char => 
				/\+/.test(char) ? "+" + (char.length < 9 ? char.length : "9".repeat(Math.floor(char.length / 9)) + char.length % 9) : char).join(""));
			return encodedLines.join("+0");
		}
		/**
		 * decode message
		 * @param {String} [encoded] - encoded message
		 *
		 * @return {String} [decoded message]
		 */
		function decode2(encoded) {
			let messages = encoded.split("+0").map(msg => msg.match(/\w+|\+[1-8]|\+99*\d/g));
			let decodedMsg = messages.map(msg => 
				msg.map(char => {
					if(/\+/.test(char)) {
						let total = char.slice(1);
						return "+".repeat(total.length == 1 ? Number(total[0]) : total.split("").reduce((acc, val) => acc + Number(val), 0));  
					}
					return char;
				}).join(""));
			return decodedMsg.join("\n");
		}
		//challenge input 1
		console.log(`%cChallenge Input 1: `, "color : red;");
		let input = `abc+def
                 ghij
                 klmno++p+`;
    console.log(`%c${input.split("\n").map(line => line.trim()).join("\n")}`, "color : skyblue;");
    console.log("Encode Into ->");
    let encoded = encode1(input);
    console.log(`%c${encoded}`, "color : orange;");
    console.log("Decode Into ->");
    console.log(`%c${decode1(encoded)}`, "color : orange;");
    //challenge input 2
		console.log(`%cChallenge Input 2: `, "color : red;");
		console.log(`%c${input.split("\n").map(line => line.trim()).join("\n")}`, "color : skyblue;");
    console.log("Encode Into ->");
    encoded = encode2(input);
    console.log(`%c${encoded}`, "color : orange;");
    console.log("Decode Into ->");
    console.log(`%c${decode2(encoded)}`, "color : orange;");
	});
})();		