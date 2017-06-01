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
		/**
		 * break formula string into separate pieces
		 * @param String
		 *
		 * formula : reformed formula string
		 *
     * returns array []
		 */
		function breakDown(formula) {
			let segments = [], counter = 0;
			while(counter < formula.length) {
				//starting point
				let start = counter++;
				while(counter < formula.length &&
					    (formula[counter].charCodeAt() < 65 ||
					     formula[counter].charCodeAt() > 90)) {
					//move until reaching an capitalized letter (new elements)
					counter++;
				}
				segments.push(formula.slice(start, counter));
			}

			return segments;
		}
		/**
		 * count number of elements
		 * @param array []
		 *
		 * segments : segments of elements
		 *
		 * returns obj {}
		 */
		function count(segments) {
			let counts = {};
			for(let i = 0; i < segments.length; i++) {
				//elements with two characters and/or with more than 1
				if(segments[i].length > 1) {
					if(segments[i][1].charCodeAt() <= 57) { //if second character is a digit
						counts[segments[i][0]] = counts[segments[i][0]] ? 
							counts[segments[i][0]] + (Number(segments[i].slice(1)) || 1) : (Number(segments[i].slice(1)) || 1);
					} else {
						counts[segments[i].slice(0, 2)] = counts[segments[i].slice(0, 2)] ? 
							counts[segments[i].slice(0, 2)] + (Number(segments[i].slice(2)) || 1) : (Number(segments[i].slice(2)) || 1);
					}
					//for single character element with number of 1
				} else {
					counts[segments[i]] = counts[segments[i]] ? counts[segments[i]] + 1 : 1;
				}
			}

			return counts;
		}

		console.log(count(breakDown(reform(inputs[4]))));
	});
})();