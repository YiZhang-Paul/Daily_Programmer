/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create product table
		 * @param {String} [products] - product information
		 *
		 * @return {Object} [product table]
		 */
		function getProductTable(products) {
			const table = new Map();
			products.split("\n").forEach(product => {
				const name = product.match(/[a-zA-Z\s]+/)[0].trim();
				const price = Number(product.match(/\d+/)[0]);
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
		console.log(getProductTable(input));								 
	});
})();		