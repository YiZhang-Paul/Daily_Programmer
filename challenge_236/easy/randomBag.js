/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * random bag system
		 * @param {int} [total] - total number of pieces to be distributed
		 *
		 * @return {String} [sequence of pieces distributed]
		 */
		function distributePiece(total) {
			let allPieces = ['O', "I", "S", "Z", "L", "J", "T"];
			let sequence = "", inBag = allPieces.slice();
			for(let i = 0; i < total; i++) {
				sequence += inBag.splice(Math.floor(Math.random() * inBag.length), 1)[0];
				inBag = inBag.length ? inBag : allPieces.slice(); 
			}
			return sequence;
		}
		/**
		 * check if a piece distribution is valid
		 * @param {String} [sequence] - distribution sequence
		 *
		 * @return {boolean} [test result]
		 */
		function isValidDistribution(sequence) {
			for(let i = 0; i < sequence.length; i += 7) {
				let curGroup = sequence.slice(i, i + 7);
				if(new Set(curGroup).size != curGroup.length) {
					return false;
				}
			}
			return true;
		}
		//challenge solution
		console.log(`%cChallenge Solution: `, "color : red;");
		console.log(distributePiece(50));
		console.log(distributePiece(50));
		console.log(distributePiece(50));
		//bonus solution
		console.log(`%cBonus Solution: `, "color : red;");
		let input = "LJOZISTTLOSZIJOSTJZILLTZISJOOJSIZLTZISOJTLIOJLTSZO";
		console.log(`${input} -> %c${isValidDistribution(input)}`, "color : yellow;");
		input = "OTJZSILILTZJOSOSIZTJLITZOJLSLZISTOJZTSIOJLZOSILJTS";
		console.log(`${input} -> %c${isValidDistribution(input)}`, "color : yellow;");
		input = "ITJLZOSILJZSOTTJLOSIZIOLTZSJOLSJZITOZTLJISTLSZOIJO";
		console.log(`${input} -> %c${isValidDistribution(input)}`, "color : yellow;");
		input = distributePiece(50);
		console.log(`${input} -> %c${isValidDistribution(input)}`, "color : yellow;");
		input = distributePiece(50);
		console.log(`${input} -> %c${isValidDistribution(input)}`, "color : yellow;");
		input = distributePiece(50);
		console.log(`${input} -> %c${isValidDistribution(input)}`, "color : yellow;");
	});
})();