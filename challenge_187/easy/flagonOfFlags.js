/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create flag table
		 * @param {Array} [flags] - flags to record
		 *
		 * @return {Object} [flag table]
		 */
		function getFlagTable(flags) {
			let table = new Map();
			flags.forEach(flag => {
				let names = flag.split(":");
				const hasParameter = /\*/.test(names[0]);
				table.set(names[0].slice(hasParameter ? 1 : 0), {value : names[1], hasParameter : hasParameter});
				table.set(names[1], {value : names[1], hasParameter : hasParameter});
			});
			return table;
		}
		/**
		 * read all commands from an instruction
		 * @param {String} [instruction] - instruction to read
		 *
		 * @return {Array} [all commands]
		 */
		function getCommands(instruction) {
			let commands = instruction.match(/[^\s]+/g);
			for(let i = commands.length - 1; i >= 0; i--) {
				if(/^-[^-]/.test(commands[i])) {
					commands.splice(i, 1, ...commands[i].slice(1).split("").map(flag => "-" + flag));
				}
			}
			return commands;
		}
		/**
		 * resolve instruction
		 * @param {Array} [flags] - all possible flags
		 * @param {String} [instruction] - instruction to resolve
		 *
		 * @return {String} [resolved instruction]
		 */
		function resolveInstruction(flags, instruction) {
			let table = getFlagTable(flags);
			let commands = getCommands(instruction);
			let resolved = "";
			for(let i = 0; i < commands.length; i++) {
				if(commands[i][0] != "-") {
					resolved += `Parameter: ${commands[i]}\n`;
					continue;
				}
				const flag = commands[i].match(/[^-]+/)[0];
				if(/=/.test(flag)) {
					resolved += `Flag: ${flag.replace("=", " (Value: ")})\n`; 
					continue;
				}
				const value = table.has(flag) ? table.get(flag).value : flag;
				const hasParameter = table.has(flag) ? table.get(flag).hasParameter : false;
				resolved += `Flag: ${value}${hasParameter ? " (Value: " + commands[++i] + ")" : ""}\n`;
			}
			return resolved;
		}
		//challenge & bonus input
		console.log(`%cChallenge & Bonus Input: `, "color : red;");
		let input = [["a:all", "f:force", "n:networking", "N:numerical-list"], "-aN 12 --verbose 192.168.0.44"];
		console.log(`%c${input[1]} -> `, "color : skyblue;");
		console.log(`%c${resolveInstruction(...input)}`, "color : orange;");
		input = [["a:all", "*A:address", "f:force", "n:networking", "N:numerical-list", "*o:output"], "-aNo output-dir/file.txt 12 --verbose --address=192.168.0.44"];
		console.log(`%c${input[1]} -> `, "color : skyblue;");
		console.log(`%c${resolveInstruction(...input)}`, "color : orange;");
	});
})();		