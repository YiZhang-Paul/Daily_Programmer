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
				const takeValue = /\*/.test(names[0]);
				table.set(names[0], {value: names[1], takeValue : takeValue});
				table.set(names[1], {value: names[0], takeValue : takeValue});
			});
			return table;
		}
		console.log(getFlagTable(["a:all", "*A:address", "f:force", "n:networking", "N:numerical-list", "*o:output"]));
	});
})();		