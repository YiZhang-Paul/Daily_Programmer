/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * group arrays in a single array
		 * @param {Array} [container] - array containing all other arrays
		 *
		 * @return {Array} [grouped arrays]
		 */
		function groupArray(container) {
			return container.reduce((acc, val) => [...acc, ...val], []);
		}
		/**
		 * find already discovered routes that can lead to target summit
		 * @param {Object} [routes] - all discovered routes
		 * @param {int} [height] - height of target summit
		 *
		 * @return {Array} [all valid routes]
		 */
		function getDiscovered(routes, height) {
			let summits = Object.keys(routes).filter(top => top < height);
			return summits.length ? groupArray(summits.map(top => routes[top])) : null;
		}
		/**
		 * find possible routes to summits
		 * @param {String} [summits] - heights of all summits
		 *
		 * @return {Array} [all possible routes]
		 */
		function getAllRoute(summits) {
			let routes = {};
			summits.match(/\d+/g).map(Number).forEach(height => {
				let discovered = getDiscovered(routes, height);
				routes[height] = discovered ? discovered.map(route => [...route, height]) : [[height]];
			});
			return groupArray(Object.keys(routes).map(top => routes[top]));
		}
		/**
		 * find longest routes to summit
		 * @param {String} [summits] - heights of all summits
		 *
		 * @return {Array} [longest routes to summit]
		 */
		function longestRoute(summits) {
			let routes = getAllRoute(summits);
			const maxLength = Math.max(...routes.map(route => route.length));
			return routes.filter(route => route.length == maxLength);
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "0 8 4 12 2 10 6 14 1 9 5 13 3 11 7 15";
		console.log(`%c${input} ->`, "color : skyblue;");
		console.log(`%c${longestRoute(input).map(route => route.join(" ")).join("\n")}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "1 2 2 5 9 5 4 4 1 6";
		console.log(`%c${input} ->`, "color : skyblue;");
		console.log(`%c${longestRoute(input).map(route => route.join(" ")).join("\n")}`, "color : orange;");
		input = "4 9 4 9 9 8 2 9 0 1";
		console.log(`%c${input} ->`, "color : skyblue;");
		console.log(`%c${longestRoute(input).map(route => route.join(" ")).join("\n")}`, "color : orange;");
		input = "0 5 4 6 9 1 7 6 7 8";
		console.log(`%c${input} ->`, "color : skyblue;");
		console.log(`%c${longestRoute(input).map(route => route.join(" ")).join("\n")}`, "color : orange;");
    input = "1 2 20 13 6 15 16 0 7 9 4 0 4 6 7 8 10 18 14 10 17 15 19 0 4 2 12 6 10 5 12 2 1 7 12 12 10 8 9 2 20 19 20 17 5 19 0 11 5 20";
		console.log(`%c${input} ->`, "color : skyblue;");
		console.log(`%c${longestRoute(input).map(route => route.join(" ")).join("\n")}`, "color : orange;");
	});
})();		