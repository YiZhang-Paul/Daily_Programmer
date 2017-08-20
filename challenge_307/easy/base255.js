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
						return "+".repeat(char.length == 2 ? Number(char[1]) : char.slice(1).split("").reduce((acc, val) => acc + Number(val), 0));  
					}
					return char;
				}).join(""));
			return decodedMsg.join("\n");
		}
		/**
		 * encode message
		 * @param {String} [msg] - message to be encoded
		 *
		 * @return {String} [encoded message]
		 */
		function encode3(msg) {
			let message = msg.trim();
			let tail = message[message.length - 1];
			return message.slice(0, -1).replace(/\+/g, "++").split("\n").map(line => line.trim()).join("+") + (tail == "+" ? "+++" : tail);
		}
		/**
		 * decode message
		 * @param {String} [encoded] - encoded message
		 *
		 * @return {String} [decoded message]
		 */
		function decode3(encoded) {
			let messages = encoded.match(/(\w|\+{2,})+/g);
			let decodedMsg = messages.map(msg => 
				msg.match(/\w+|\++/g).map(char => {
					return /\+/.test(char) ? (char.length % 2 ? "+" : char.slice(0, char.length * 0.5)) : char;
				}).join(""));	
			return decodedMsg.join("\n");
		}
		/**
		 * encode message
		 * @param {String} [msg] - message to be encoded
		 *
		 * @return {String} [encoded message]
		 */
		function encode4(msg) {
			let message = msg.trim();
			let tail = message[message.length - 1];
			return message.slice(0, -1).split("\n").map(line => 
				line.trim().replace(/^\+/, "+1").replace(/\+/g, "++")).join("+") + (tail == "+" ? "+++0" : tail);
		}
		/**
		 * decode message
		 * @param {String} [encoded] - encoded message
		 *
		 * @return {String} [decoded message]
		 */
		function decode4(encoded) {
			let messages = encoded.split(/\++1/g).map((msg, index) => index === 0 ? msg : "+" + msg);
			let decodedMsg = messages.map(msg => 
				msg.match(/(\w|\+{2,})+/g).map(char => char.replace(/\+{2}/g, "+"))).reduce((acc, val) => [...acc, ...val], []);
			return decodedMsg.join("\n").replace(/\++0/g, "+");
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
    //challenge input 3
		console.log(`%cChallenge Input 3: `, "color : red;");
		console.log(`%c${input.split("\n").map(line => line.trim()).join("\n")}`, "color : skyblue;");
    console.log("Encode Into ->");
    encoded = encode3(input);
    console.log(`%c${encoded}`, "color : orange;");
    console.log("Decode Into ->");
    console.log(`%c${decode3(encoded)}`, "color : orange;");
    //challenge input 4
		console.log(`%cChallenge Input 4: `, "color : red;");
		console.log(`%c${input.split("\n").map(line => line.trim()).join("\n")}`, "color : skyblue;");
    console.log("Encode Into ->");
    encoded = encode4(input);
    console.log(`%c${encoded}`, "color : orange;");
    console.log("Decode Into ->");
    console.log(`%c${decode4(encoded)}`, "color : orange;");
	});
})();		