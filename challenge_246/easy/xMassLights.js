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
		/**
		 * draw circuit
		 * @param {int} [hours] - total hours to lit up lights
		 * @param {int} [capacity] - battery capacity
		 * @param {float} [batteryVolt] - battery voltage
		 * @param {float} [ledVolt] - LED voltage
		 * @param {int} [current] - LED current
		 *
		 * @return {String} [circuit layout]
		 */
		function drawCircuit(hours, capacity = 1200, batteryVolt = 9, ledVolt = 1.7, current = 20) {
			let ledPerLine = Math.floor(batteryVolt / ledVolt);
			let line = `-${new Array(ledPerLine).fill("-|>|-").join("-")}-`;
			let circuit = "", totalLines = Math.floor(capacity / hours / current);
			for(let i = 0; i < totalLines; i++) {
				let connector = i ? " " : "*";
				circuit += connector + line + connector + "\n" + (i == totalLines - 1 ? "" : " |" + " ".repeat(line.length - 2) + "|" + "\n");
			}
			return circuit + "\n";
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
		//part 2 input
		console.log(`%cPart 2 Input: `, "color : red;");
		input = 20;
		console.log(`%c${drawCircuit(input)}`, "color : orange;");
		input = 12;
		console.log(`%c${drawCircuit(input)}`, "color : orange;");
		input = 6;
		console.log(`%c${drawCircuit(input)}`, "color : orange;");
		input = 100;
		console.log(`%c${drawCircuit(input)}`, "color : orange;");
	});
})();		