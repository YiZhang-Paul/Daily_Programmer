/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * retrieve text
		 * @param {String} [url] - text URL
		 *
		 * @return {Object} [Promise object]
		 */
		function getText(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) resolve(this.responseText);
					else if(this.status == 404) reject("Text Not Found.");
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}
		/**
		 * convert number to Roman Numerals
		 * @param {int} [number] - number to be converted
		 *
		 * @return {String} [Roman Numerals representation]
		 */
		function toRomanNumeral(number) {
			const table = {
				1 : "I", 2 : "II", 3 : "III", 4 : "IV", 5 : "V", 
				6 : "VI", 7 : "VII", 8 : "VIII", 9 : "IX", 10 : "X"
			};
			return "X".repeat(Math.floor(number / 10)) + (table[number % 10] || "");
		}
		/**
		 * retrieve act or scene
		 * @param {String} [type] - section type
		 * @param {int} [section] - section number
		 * @param {String} [parent] - parent section
		 *
		 * @return {String} [full text of desired section]
		 */
		function getSection(type, section, parent) {
			const [curSection, nextSection] = [section, section + 1].map(num => `${type} ${toRomanNumeral(num)}\\.`);
			const sectionEnd = new RegExp(nextSection).test(parent) ? `(?=${nextSection})` : "(?!(\\w|\\W))";
			return parent.match(new RegExp(`${curSection}(\\w|\\W)+${sectionEnd}`))[0];
		}

		getText("macbeth.txt").then(text => {
			console.log(getSection("SCENE", 2, getSection("ACT", 3, text)));
		}).catch(error => {console.log(error);});
	});
})();