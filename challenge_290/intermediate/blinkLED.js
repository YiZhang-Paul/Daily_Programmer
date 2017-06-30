/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {	
		/**
		 * LED class
		 */
		class LED {
			constructor() {
				this.registers = {
					A : 0,
					B : 0
				};
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
				this.registers[register.toUpperCase()] = Number(number);
			} 
			/**
			 * loop instructions
			 * @param String, String
			 *
			 * instructions : all instructions
			 * loop         : loop label
			 *
			 * returns int
			 */
			enterLoop(instructions, loop) {
				return instructions.findIndex(instruction => instruction.search(loop) === 0);
			} 
			/**
			 * display LEDs
			 * @param String
			 *
			 * register : register handling display pattern
			 */
			displayLED(register) {
				console.log(this.toBinary(register).split("").map(bit => Number(bit) === 0 ? "." : "*").join(""));
			} 
			/**
			 * rotate left
			 */
			rotateLeft() {
				let registerA = this.toBinary(this.registers.A);
				this.registers.A = parseInt(registerA.slice(1) + registerA.slice(0, 1), 2);
			} 
			/**
			 * rotate right
			 */
			rotateRight() {
				let registerA = this.toBinary(this.registers.A);
				this.registers.A = parseInt(registerA.slice(-1) + registerA.slice(0, -1), 2);
			} 
			/**
			 * process instructions
			 * @param String
			 *
			 * instructions : instructions to be processed
			 */
			processInstruction(instructions) {
				instructions = instructions.split("\n").map(instruction => instruction.trim());
				for(let i = 0; i < instructions.length; i++) {
					let instruction = instructions[i].split(/[, ]/);
					if(instruction[0] == "ld") {
						this.setRegister(instruction[1], instruction[2]);
					} else if(instruction[0] == "out") {
						this.displayLED(this.registers[instruction[2].toUpperCase()]);
					} else if(instruction[0] == "djnz") {
						if(--this.registers.B) {
							i = this.enterLoop(instructions, instruction[1]) - 1;
						}
					} else if(instruction[0] == "rlca") {
						this.rotateLeft();
					} else if(instruction[0] == "rrca") {
						this.rotateRight();
					}
				}
			} 
		} 
		//part 1 challenge input
		console.log("Challenge Input 1: ");
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
		//part 2 challenge input
		console.log("Challenge Input 2: ");
		input = `ld b,3

					 triple:
					   ld a,126
					   out (0),a
					   ld a,60
					   out (0),a
					   ld a,24
					   out (0),a
					   djnz triple`;	
		led.processInstruction(input);			   
		console.log("Challenge Input 3: ");
	  input = `  ld a,1
						   ld b,9
						 
						 loop:
						   out (0),a
						   rlca
						   djnz loop`;
		led.processInstruction(input);			   
		console.log("Challenge Input 4: ");
		input = `  ld a,2
						   ld b,9
						 
						 loop:
						   out (0),a
						   rrca
						   djnz loop`;				   					   			 	
		led.processInstruction(input);			   
	});
})();			