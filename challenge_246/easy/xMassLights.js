/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find maximum amount of LEDs can be lit up for a given time frame
		 * @param {int} [hours] - total hours to lit up lights
		 * @param {int} [capacity] - battery capacity
		 * @param {float} [batteryVolt] - battery voltage
		 * @param {float} [ledVolt] - LED voltage
		 * @param {int} [current] - LED current
		 *
		 * @return {int} [maximum amount of LEDs can be lit up]
		 */
		function maxLEDs(hours, capacity = 1200, batteryVolt = 9, ledVolt = 1.7, current = 20) {
			return Math.floor(capacity / hours / current) * Math.floor(batteryVolt / ledVolt);
		}
		//part 1 input
		console.log(`%cPart 1 Input: `, "color : red;");
		let input = 1;
		console.log(`%c${maxLEDs(input)}`, "color : orange;");
    input = 4;
		console.log(`%c${maxLEDs(input)}`, "color : orange;");
    input = 8;
		console.log(`%c${maxLEDs(input)}`, "color : orange;");
    input = 12;
		console.log(`%c${maxLEDs(input)}`, "color : orange;");
	});
})();		