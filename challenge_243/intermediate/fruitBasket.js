/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create fruit table
		 * @param {String} [fruits] - fruit information
		 *
		 * @return {Object} [fruit table]
		 */
		function getFruitTable(fruits) {
			const table = new Map();
			fruits.split("\n").forEach(fruit => {
				const name = fruit.match(/[a-zA-Z\s]+/)[0].trim();
				const price = Number(fruit.match(/\d+.*\d$/)[0]);
				table.set(name, price);
			});
			return table;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `banana 32
								 kiwi 41
								 mango 97
								 papaya 254
								 pineapple 399`;
		console.log(getFruitTable(input));								 
	});
})();		