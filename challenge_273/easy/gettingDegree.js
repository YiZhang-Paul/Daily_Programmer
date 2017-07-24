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
			return from == "r" ? Math.round(value / Math.PI * 100) / 100 * 180 + "d" : null;
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
		 * convert celsius to fahrenheit
		 * @param {float} [value] - value to be converted
		 * 
		 * @return {String} [conversion result]
		 */
		function celsiusToFahrenheit(value) {
			return value * 9 / 5 + 32 + "f";
		}
		/**
		 * convert fahrenheit to celsius
		 * @param {float} [value] - value to be converted
		 * 
		 * @return {String} [conversion result]
		 */
		function fahrenheitToCelsius(value) {
			return (value - 32) * 5 / 9 + "c";
		}
		/**
		 * convert kelvin to fahrenheit
		 * @param {float} [value] - value to be converted
		 * 
		 * @return {String} [conversion result]
		 */
		function kelvinToFahrenheit(value) {
			return value * 9 / 5 - 459.67 + "f";
		}
		/**
		 * convert fahrenheit to kelvin
		 * @param {float} [value] - value to be converted
		 * 
		 * @return {String} [conversion result]
		 */
		function fahrenheitToKelvin(value) {
			return (value + 459.67) * 5 / 9 + "k";
		}
		/**
		 * convert celsius to kelvin
		 * @param {float} [value] - value to be converted
		 * 
		 * @return {String} [conversion result]
		 */
		function celsiusToKelvin(value) {
			return value + 273.15 + "k";
		}	
		/**
		 * convert kelvin to celsius
		 * @param {float} [value] - value to be converted
		 * 
		 * @return {String} [conversion result]
		 */
		function kelvinToCelsius(value) {
			return value - 273.15 + "c";
		}
		/**
		 * convert heat units
		 * @param {float} [value] - value to be converted
		 * @param {String} [from] - current unit
		 * @param {String} [to] - target unit
		 *
		 * @return {String} [conversion result]
		 */
		function convertHeat(value, from, to) {
			let validUnits = new Set("cfk");
			if(!validUnits.has(from) || !validUnits.has(to)) {
				return null;
			}
			let result;
			switch(from) {
				case "c" :
					result = to == "f" ? celsiusToFahrenheit(value, to) : celsiusToKelvin(value, to);
					break;
				case "f" :
					result = to == "k" ? fahrenheitToKelvin(value, to) : fahrenheitToCelsius(value, to);
					break;
				case "k" :
					result = to == "f" ? kelvinToFahrenheit(value, to) : kelvinToCelsius(value, to);
					break;
			}
			return result;
		}
		/**
		 * convert units
		 * @param {String} [info] - information for unit conversion
		 *
		 * @return {String} [converted unit]
		 */
		function convertUnit(info) {
			if(!/^\d+\.?\d*\w{2}$/.test(info)) {
				return "Invalid Input String";
			}
			let [value, from, to] = info.match(/\d+\.?\d*|\w/g);
			if(from == to) {
				return value + from;
			}
			let result;
			switch(to) {
				case "d" : case "r" : 
					result = to == "d" ? radianToDegree(Number(value), from) : degreeToRadian(Number(value), from);
					break;
				case "c" : case "f" : case "k" :
					result = convertHeat(Number(value), from, to);
					break;
			}
			return result === null? "No Candidate for Conversion" : result;
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = "3.1416rd";
		console.log(`${input} -> %c${convertUnit(input)}`, "color : yellow;");
    input = "90dr";
		console.log(`${input} -> %c${convertUnit(input)}`, "color : yellow;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = "212fc";
		console.log(`${input} -> %c${convertUnit(input)}`, "color : yellow;");
		input = "70cf";
		console.log(`${input} -> %c${convertUnit(input)}`, "color : yellow;");
		input = "100cr";
		console.log(`${input} -> %c${convertUnit(input)}`, "color : yellow;");
		input = "315.15kc";
		console.log(`${input} -> %c${convertUnit(input)}`, "color : yellow;");
	});
})();		