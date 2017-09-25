/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * remove trailing forward slash
		 * @param {String} [path] - path to be checked
		 *
		 * @return {String} [path with trailing forward slash removed]
		 */
		function removeSlash(path) {
			return path[path.length - 1] == "/" ? path.slice(0, -1) : path;
		}
		/**
		 * create symbolic table
		 * @param {Array} [symbolics] - symbolic links
		 *
		 * @return {Object} [symbolic table]
		 */
		function makeTable(symbolics) {
			let table = new Map();
			symbolics.forEach(symbolic => {
				let link = symbolic.split(":");
				table.set(removeSlash(link[0]), removeSlash(link[1]));
			});
			return table;
		}
		/**
		 * check if a path is fully extended
		 * @param {String} [path] - path to be checked
		 * @param {Object} [table] - symbolic links table
		 *
		 * @return {boolean} [test result]
		 */
		function isExtended(path, table) {
			let directories = path.match(/[^\/]+/g);
			for(let i = 0, curPath = ""; i < directories.length; i++) {
				curPath += "/" + directories[i];
				if(table.has(curPath)) {
					return false;
				}
			}
			return true;
		}
		/**
		 * extend a path
		 * @param {String} [path] - path to be checked
		 * @param {Object} [table] - symbolic links table
		 *
		 * @return {String} [extended path]
		 */
		function extendPath(path, table) {
			let directories = path.match(/[^\/]+/g);
			for(let i = 0, curPath = ""; i < directories.length; i++) {
				curPath += "/" + directories[i];
				if(table.has(curPath)) {
					return path.replace(curPath, table.get(curPath));
				}
			}
			return path;
		}
		/**
		 * resolve symbolic link
		 * @param {Array} [symbolics] - symbolic links
		 * @param {String} [path] - path to be resolved
		 *
		 * @return {String} [resolved path]
		 */
		function resolveLink(symbolics, path) {
			let links = makeTable(symbolics), counter = 0;
			while(!isExtended(path, links)) {
				path = extendPath(path, links);
				if(++counter == 500) {
					return "Infinite Loop Detected.";
				}
			}
			return path;
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
	});
})();		