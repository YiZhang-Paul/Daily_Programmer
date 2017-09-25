/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * remove trailing forward slash
		 * @param {String} [paths] - path to be checked
		 *
		 * @return {String} [path with trailing forward slash removed]
		 */
		function removeSlash(paths) {
			return paths[paths.length - 1] == "/" ? paths.slice(0, -1) : paths;
		}
		/**
		 * create symbolic table
		 * @param {Array} [symbolics] - symbolic links
		 *
		 * @return {Object} [symbolic table]
		 */
		function makeTable(symbolics) {
			let table = new Map();
			symbolics.forEach(link => {
				link = link.split(":");
				table.set(removeSlash(link[0]), removeSlash(link[1]));
			});
			return table;
		}
		/**
		 * check if a path is fully extended
		 * @param {String} [paths] - path to be checked
		 * @param {Object} [table] - symbolic links table
		 * 
		 * @return {boolean} [test result]
		 */
		function isExtended(paths, table) {
			let directories = paths.match(/[^\/]+/g);
			for(let i = 0, subPath = ""; i < directories.length; i++) {
				subPath += "/" + directories[i];
				if(table.has(subPath)) {
					return false;
				}
			}
			return true;
		}
		/**
		 * extend a path
		 * @param {String} [paths] - path to be extended
		 * @param {Object} [table] - symbolic links table
		 *
		 * @return {String} [extended path]
		 */
		function extendPath(paths, table) {
			let directories = paths.match(/[^\/]+/g);
			for(let i = 0, subPath = ""; i < directories.length; i++) {
				subPath += "/" + directories[i];
				if(table.has(subPath)) {
					return paths.replace(subPath, table.get(subPath));
				}
			}
			return paths;
		}
		/**
		 * resolve symbolic link
		 * @param {Array} [symbolics] - symbolic links
		 * @param {String} [paths] - paths to be resolved
		 *
		 * @return {String} [resolved path]
		 */
		function resolveLink(symbolics, paths) {
			let linkTable = makeTable(symbolics), counter = 0;
			while(!isExtended(paths, linkTable)) {
				paths = extendPath(paths, linkTable);
				if(++counter == 500) {
					return "Infinite Loop Found.";
				}
			}
			return paths;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = [["/bin/thing:/bin/thing-3", "/bin/thing-3:/bin/thing-3.2", "/bin/thing-3.2/include:/usr/include", "/usr/include/SDL:/usr/local/include/SDL"], "/bin/thing/include/SDL/stan"];
		console.log(`%c${input[1]} -> %c${resolveLink(...input)}`, "color : skyblue;", "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = [["/home/elite/documents:/media/mmcstick/docs"], "/home/elite/documents/office"];
		console.log(`%c${input[1]} -> %c${resolveLink(...input)}`, "color : skyblue;", "color : orange;");
		input = [["/bin:/usr/bin", "/usr/bin:/usr/local/bin/", "/usr/local/bin/log:/var/log-2014"], "/bin/log/rc"];
		console.log(`%c${input[1]} -> %c${resolveLink(...input)}`, "color : skyblue;", "color : orange;");
		input = [["/etc:/tmp/etc", "/tmp/etc/:/etc/"], "/etc/modprobe.d/config/"];
		console.log(`%c${input[1]} -> %c${resolveLink(...input)}`, "color : skyblue;", "color : orange;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = [["/bin/thing:/bin/thing-3", "/bin/thing-3:/bin/thing-3.2", "/bin/thing/include:/usr/include", "/bin/thing-3.2/include/SDL:/usr/local/include/SDL"], "/bin/thing/include/SDL/stan"];
		console.log(`%c${input[1]} -> %c${resolveLink(...input)}`, "color : skyblue;", "color : orange;");
	});
})();		