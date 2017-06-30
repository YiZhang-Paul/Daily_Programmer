/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * LED class
		 */
		class LED {
			constructor() {
				this.registerA = 0;
			}
			/**
			 * convert number to binary
			 * @param int
			 *
			 * number : number to be converted
			 *
			 * returns String
			 */
			toBinary(number) {
				return "0".repeat(8 - number.toString(2).length) + number.toString(2);
			} 
			/**
			 * set register
			 * @param String, int
			 *
			 * register : register to be changed
			 * number   : new value for register
			 */
			setRegister(register, number) {
				this["register" + register.toUpperCase()] = Number(number);
			} 
			/**
			 * display LED pattern
			 * @param String
			 *
			 * pattern : pattern to be displayed
			 */
			displayLED(pattern = this.toBinary(this.registerA)) {
				console.log(pattern.split("").map(bit => Number(bit) === 0 ? "." : "*").join(""));
			} 
			/**
			 * process instructions
			 * @param String
			 *
			 * instructions : instructions to be processed
			 */
			processInstruction(instructions) {
				instructions.split("\n").forEach(instruction => {
					instruction = instruction.trim().split(/[, ]/);
					if(instruction[0] == "ld") {
						this.setRegister(instruction[1], instruction[2]);
					} else if(instruction[0] == "out") {
						this.displayLED();
					}
				});
			} 
		} 
		//part 1 challenge input
		let input = `ld a,14
								 out (0),a
								 ld a,12
								 out (0),a
								 ld a,8
								 out (0),a
								 
								 out (0),a
								 ld a,12
								 out (0),a
								 ld a,14
								 out (0),a`;	
		let led = new LED();	
		led.processInstruction(input);						 	
	});
})();			