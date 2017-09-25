/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
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
				table.set(link[0], link[1]);
			});
			return table;
		}
		/**
		 * resolve symbolic link
		 * @param {Array} [symbolics] - symbolic links
		 * @param {String} [path] - path to be resolved
		 *
		 * @return {String} [resolved path]
		 */
		function resolveLink(symbolics, path) {
			console.log(makeTable(symbolics));
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = [["bin/thing:/bin/thing-3", "/bin/thing-3:/bin/thing-3.2", "/bin/thing-3.2/include:/usr/include", "/usr/include/SDL:/usr/local/include/SDL"], "/bin/thing/include/SDL/stan"];
		console.log(resolveLink(...input));
	});
})();		