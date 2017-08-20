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
	});
})();		