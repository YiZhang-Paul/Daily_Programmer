/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//conversion ratios between units
		const ratios = {
			metres : {inches : 39.3701, miles : 0.000621371, attoparsecs : 32.4078},
			inches : {metres : 0.0254, miles : 1.5783e-5, attoparsecs : 0.823158},
			miles : {metres : 1609.34, inches : 63360, attoparsecs : 52155.3},
			attoparsecs : {metres : 0.0308568, inches : 1.21483, miles : 1.9174e-5},
			kilograms : {pounds : 2.20462, ounces : 35.274, beryllium : 0.0022691},
			pounds : {kilograms : 0.453592, ounces : 16, beryllium : 0.0010292},
			ounces : {kilograms : 0.0283495, pounds : 0.0625, beryllium : 6.432688e-5},
			beryllium : {kilograms : 440.7, pounds : 971.6, ounces : 15545.6}
		};
	});
})();