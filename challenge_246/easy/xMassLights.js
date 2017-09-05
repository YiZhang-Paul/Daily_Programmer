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
			let line = `-${new Array(Math.floor(batteryVolt / ledVolt)).fill("-|>|-").join("-")}-`;
			let circuit = "", totalLines = Math.floor(capacity / hours / current);
			for(let i = 0; i < totalLines; i++) {
				let connector = i ? " " : "*";
				circuit += connector + line + connector + "\n" + (i == totalLines - 1 ? "" : " |" + " ".repeat(line.length - 2) + "|" + "\n");
			}
			return circuit + "\n";
		}
		/**
		 * calculate resistence
		 * @param {int} [hours] - total hours to lit up lights
		 * @param {int} [capacity] - battery capacity
		 * @param {float} [batteryVolt] - battery voltage
		 * @param {float} [ledVolt] - LED voltage
		 * @param {int} [current] - LED current
		 *
		 * @return {float} [total resistence]
		 */
		function getResistence(hours, capacity = 1200, batteryVolt = 9, ledVolt = 1.7, current = 20) {
			return Math.round(batteryVolt % ledVolt / Math.floor(capacity / hours) * 1000 * 1000) / 1000;
		}
		/**
		 * retrieve all information on a circuit
		 * @param {float} [ledVolt] - LED voltage
		 * @param {int} [current] - LED current
		 * @param {float} [batteryVolt] - battery voltage
		 * @param {int} [capacity] - battery capacity
		 * @param {int} [hours] - total hours to lit up lights
		 *
		 * @return {String} [circuit information]
		 */
		function getCircuitInfo(ledVolt, current, batteryVolt, capacity, hours) {
			let resistence = getResistence(hours, capacity, batteryVolt, ledVolt, current);
			return `Resistor: ${resistence} Ohms\nScheme: \n` + drawCircuit(hours, capacity, batteryVolt, ledVolt, current);
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
		//part 3 input
		console.log(`%cPart 3 Input: `, "color : red;");
		input = 1;
		console.log(`%c${getResistence(input)}`, "color : orange;");
		input = 4;
		console.log(`%c${getResistence(input)}`, "color : orange;");
		input = 8;		
		console.log(`%c${getResistence(input)}`, "color : orange;");
		//part 4 input
		console.log(`%cPart 4 Input: `, "color : red;");
		input = [1.7, 20, 9, 1200, 20];
		console.log(`%c${getCircuitInfo(...input)}`, "color : orange;");
	});
})();		