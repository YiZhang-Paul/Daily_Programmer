/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find best trade to maximize profit
		 * @param {Array} [ticks] - all stock prices in a day
		 *
		 * @return {Array} [best trade to buy in and sell out]
		 */
		function getBestTrade(ticks) {
			let [buy, sell, gain] = [0, 0, 0];
			for(let i = 0; i < ticks.length - 2; i++) {
				for(let j = i + 2; j < ticks.length; j++) {
					let curGain = ticks[j] - ticks[i];
					if(curGain > gain) {
						[buy, sell, gain] = [ticks[i], ticks[j], curGain];
					}
				}
			}
			return [buy, sell];
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = [19.35, 19.30, 18.88, 18.93, 18.95, 19.03, 19.00, 18.97, 18.97, 18.98];
		let result = getBestTrade(input);
		console.log(`%cBuy: %c${result[0]}%c, Sell: %c${result[1]}`, "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;");
		//Challenge input
		console.log(`%cchallenge Input: `, "color : red;");
		input = [9.20, 8.03, 10.02, 8.08, 8.14, 8.10, 8.31, 8.28, 8.35, 8.34, 8.39, 8.45, 8.38, 8.38, 8.32, 8.36, 8.28, 8.28, 8.38, 8.48, 8.49, 8.54, 8.73, 8.72, 8.76, 8.74, 8.87, 8.82, 8.81, 8.82, 8.85, 8.85, 8.86, 8.63, 8.70, 8.68, 8.72, 8.77, 8.69, 8.65, 8.70, 8.98, 8.98, 8.87, 8.71, 9.17, 9.34, 9.28, 8.98, 9.02, 9.16, 9.15, 9.07, 9.14, 9.13, 9.10, 9.16, 9.06, 9.10, 9.15, 9.11, 8.72, 8.86, 8.83, 8.70, 8.69, 8.73, 8.73, 8.67, 8.70, 8.69, 8.81, 8.82, 8.83, 8.91, 8.80, 8.97, 8.86, 8.81, 8.87, 8.82, 8.78, 8.82, 8.77, 8.54, 8.32, 8.33, 8.32, 8.51, 8.53, 8.52, 8.41, 8.55, 8.31, 8.38, 8.34, 8.34, 8.19, 8.17, 8.16];
		result = getBestTrade(input);
		console.log(`%cBuy: %c${result[0]}%c, Sell: %c${result[1]}`, "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;");
	});
})();			