/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create price table
		 * @param {Array} [prices] - product name and its price
		 *
		 * @return {Object} [price table]
		 */
		function getPriceTable(prices) {
			let table = new Map();
			prices.forEach(price => {
				const [name, value] = price.match(/\w+|\d+\.{0,1}\d*/g);
				table.set(name, Number(value));
			});
			return table;
		}
		/**
		 * check price changes in products
		 * @param {String} [prices] - old and new prices
		 *
		 * @return {String} [products with prices changes]
		 */
		function getPriceChange(prices) {
			let allPrices = prices.split("\n");
			let oldPrices = getPriceTable(allPrices.slice(0, allPrices.length * 0.5));
			let newPrices = getPriceTable(allPrices.slice(allPrices.length * 0.5));
			let changes = "";
			newPrices.forEach((price, product) => {
				const difference = price - oldPrices.get(product);
				if(difference) {
					changes += `${product} ${difference > 0 ? "+" : ""}${difference}\n`;
				}
			});
			return changes;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `CarriageBolt 45
                 Eyebolt 50
                 Washer 120
                 Rivet 10
                 CarriageBolt 45
                 Eyebolt 45
                 Washer 140
                 Rivet 10`;
    console.log(`%c${getPriceChange(input)}`, "color : orange;");
    input = `2DNail 3
             4DNail 5
             8DNail 10
             8DNail 11
             4DNail 5
             2DNail 2`;
    console.log(`%c${getPriceChange(input)}`, "color : orange;");
	});
})();