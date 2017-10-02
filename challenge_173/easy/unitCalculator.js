/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//conversion ratios between units
		const ratios = {
			metres : {inches : 39.3701, miles : 0.000621371, attoparsecs : 32.4078},
			inches : {metres : 0.0254, miles : 1.5783e-5, attoparsecs : 0.823158},
			miles : {metres : 1609.34, inches : 63360, attoparsecs : 52155.3},
			attoparsecs : {metres : 0.0308568, inches : 1.21483, miles : 1.9174e-5},
			kilograms : {pounds : 2.20462, ounces : 35.274, "hogsheads of Beryllium" : 0.0022691},
			pounds : {kilograms : 0.453592, ounces : 16, "hogsheads of Beryllium" : 0.0010292},
			ounces : {kilograms : 0.0283495, pounds : 0.0625, "hogsheads of Beryllium" : 6.432688e-5},
			"hogsheads of Beryllium" : {kilograms : 440.7, pounds : 971.6, ounces : 15545.6}
		};
		/**
		 * convert units
		 * @param {String} [request] - conversion request
		 * @param {Object} [table] - conversion ratios table
		 *
		 * @return {String} [conversion result]
		 */
		function convertUnit(request, table = ratios) {
			const [oldValue, oldUnit, , newUnit] = request.match(/\d+\.*\d*|[A-Za-z]+/g);
			const ratio = ratios[oldUnit][newUnit];
			return request.replace(/\bto\b/, ratio ? `is ${(oldValue * ratio).toFixed(1)}` : "can't be converted to");
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(`%c${convertUnit("3 metres to inches")}`, "color : orange;");
		console.log(`%c${convertUnit("3 metres to pounds")}`, "color : orange;");
	});
})();