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
			let directory = path.match(/[^\/]+/g);
			let curPath = "/" + directory[0];
			for(let i = 1; i < directory.length; i++) {
				curPath += "/" + directory[i];
				if(table.get(curPath)) {
					return false;
				}
			}
			return true;
		}
		/**
		 * resolve symbolic link
		 * @param {Array} [symbolics] - symbolic links
		 * @param {String} [path] - path to be resolved
		 *
		 * @return {String} [resolved path]
		 */
		function resolveLink(symbolics, path) {
			let links = makeTable(symbolics);
			//while(isExtended(path, links)) {
			//	
			//}
			return links;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = [["/bin/thing:/bin/thing-3", "/bin/thing-3:/bin/thing-3.2", "/bin/thing-3.2/include:/usr/include", "/usr/include/SDL:/usr/local/include/SDL"], "/bin/thing/include/SDL/stan"];
		console.log(resolveLink(...input));
	});
})();		