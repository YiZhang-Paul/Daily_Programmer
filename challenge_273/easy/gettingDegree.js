/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * convert radian to degree
		 * @param {float} [value] - value to be converted
		 * @param {String} [from] - current unit
		 *
		 * @return {String} [conversion result]
		 */
		function radianToDegree(value, from) {
			return from == "r" ? Math.round(value / Math.PI) * 180 + "d" : null;
		}
		/**
		 * convert degree to radian
		 * @param {float} [value] - value to be converted
		 * @param {String} [from] - current unit
		 *
		 * @return {String} [conversion result]
		 */
		function degreeToRadian(value, from) {
			return from == "d" ? Math.round(value / 180 * Math.PI * 100) / 100 + "r" : null;
		}
		/**
		 * convert units
		 * @param {String} [info] - information for unit conversion
		 *
		 * @return {String} [converted unit]
		 */
		function convertUnit(info) {
			let [value, from, to] = info.match(/\d+\.?\d*|\w/g);
			let result;
			switch(to) {
				case "d" : case "r" : 
					result = to == "d" ? radianToDegree(Number(value), from) : degreeToRadian(Number(value), from);
					break;
				case "c" : case "f" : case "k" :
					result = convertHeat(Number(value), from, to);
					break;
			}
			return result;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = "3.1416rd";
		console.log(`${input} -> %c${convertUnit(input)}`, "color : yellow;");
    input = "90dr";
		console.log(`${input} -> %c${convertUnit(input)}`, "color : yellow;");
	});
})();		