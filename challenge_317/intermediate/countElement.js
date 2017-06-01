/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		//all formulas
		let inputs = ["C6H12O6", "CCl2F2", "NaHCO3", "C4H8(OH)2", "PbCl(NH3)2(COOH)2"];
		/**
		 * reform formula string
		 * @param String
		 * 
		 * formula : formula string to be reformed
		 *
		 * returns String
		 */
		function reform(formula) {
			let elements = formula.split(/(?=[()])/g);
			//reform formula by pieces
			let reformElements = elements.map((element, index, array) => {
				if(element.search("\\(") != -1) {
					return element.slice(1); //take off "("
				} else if(element.search("\\)") != -1) {
					//repeat sequence and take off ")"
					return array[index - 1].slice(1).repeat(Number(element.slice(1) - 1)); 
				} else {
					return element;
				}
			});
			
			return reformElements.join("");
		}

		function breakDown() {

		}

		function count() {

		}

		console.log(reform(inputs[3]));
	});
})();