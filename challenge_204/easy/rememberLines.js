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
		 * retrieve ACT
		 * @param {int} [act] - ACT number
		 * @param {String} [play] - full text of the play
		 *
		 * @return {String} [full text of desired ACT]
		 */
		function getAct(act, play) {
			const [curAct, nextAct] = [act, act + 1].map(num => `ACT ${toRomanNumeral(num)}\\.`);
			const endOfAct = new RegExp(nextAct).test(play) ? `(?=${nextAct})` : "(?!(\\w|\\W))";
			return play.match(new RegExp(`${curAct}(\\w|\\W)+${endOfAct}`))[0];
		}
		getText("macbeth.txt").then(text => {
			//console.log(getAct(1, text));
			//console.log(getAct(2, text));
			//console.log(getAct(3, text));
			//console.log(getAct(4, text));
			console.log(getAct(5, text));
		}).catch(error => {console.log(error);});
	});
})();