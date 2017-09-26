/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * expand abbreviated messages
		 * @param {String} [message] - message to be expanded
		 *
		 * @return {String} [expanded message]
		 */
		function expandMessage(message) {
			const table = {
				lol : "laugh out loud", dw : "don't worry", hf : "have fun", gg : "good game", brb : "be right back", 
				g2g : "got to go", wtf : "what the fuck", wp : "well played", gl : "good luck", imo : "in my opinion"
			};
			return message.match(/\s*\w+|\W+/g).map(word => table[word.trim()] ? ` ${table[word.trim()]}` : word).join("");
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "wtf that was unfair";
    console.log(`%c${input} -> %c${expandMessage(input)}`, "color : skyblue;", "color : orange;");
    input = "gl all hf";
    console.log(`%c${input} -> %c${expandMessage(input)}`, "color : skyblue;", "color : orange;");
    //challenge input
		console.log(`%cChallenge Input: `, "color : red;");
    input = "imo that was wp. Anyway I've g2g";
    console.log(`%c${input} -> %c${expandMessage(input)}`, "color : skyblue;", "color : orange;");
	});
})();		