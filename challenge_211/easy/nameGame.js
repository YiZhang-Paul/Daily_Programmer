/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * capitalize word
		 * @param {String} [word] - word to be capitalized
		 *
		 * @return {String} [capitalized word]
		 */
		function capitalize(word) {
			return word[0].toUpperCase() + word.slice(1);
		}
		/**
		 * play name game
		 * @param {String} [name] - name used for the game
		 *
		 * @return {String} [rhymes of the name]
		 */
		function playNameGame(name) {
			const fullName = capitalize(name.match(/[a-zA-Z']+/)[0]);
			let lines = [[fullName + ", " + fullName, "bo"], ["Bonana fanna", "fo"], ["Fee fy", "mo"]];
			return lines.map(line => {
				const initial = line[1][0].toUpperCase();
				line[1] += initial == fullName[0] ? "-" : " " + initial;
				return line.join(" ") + fullName.slice(1) + ",";
			}).join("\n") + "\n" + fullName + "!";
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "Lincoln!";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${playNameGame(input)}`, "color : orange;");
		input = "Nick!";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${playNameGame(input)}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "Arnold!";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${playNameGame(input)}`, "color : orange;");
		input = "Billy!";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${playNameGame(input)}`, "color : orange;");
		input = "Yi!";
		console.log(`%c${input} -> `, "color : skyblue;");
		console.log(`%c${playNameGame(input)}`, "color : orange;");
	});
})();		