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
		/**
		 * searh quote in a given section
		 * @param {String} [type] - section type
		 * @param {String} [quote] - quote to search
		 * @param {String} [text] - search context
		 *
		 * @return {Array} [section number and content]
		 */
		function searchSection(type, quote, text) {
			let sectionNum = 1, content = getSection(type, 1, text);
			while(content && !new RegExp(quote).test(content)) {
				content = getSection(type, ++sectionNum, text);
			}
			return content ? [sectionNum, content] : [null, null];
		}
		/**
		 * capitalize name
		 * @param {String} [name] - name to be capitalized
		 *
		 * @return {String} [capitalized name]
		 */
		function capitalize(name) {
			return name[0].toUpperCase() + name.slice(1).toLowerCase();
		}
		/**
		 * get all characters in a scene
		 * @param {String} [scene] - scene to be checked
		 *
		 * @return {Array} [characters]
		 */
		function getCharacter(scene) {
			let names = scene.match(/\s{2}([A-Z]|\s)+\.\s+\n/g)
											 .map(name => name.match(/([A-Z]|\s)+/g)[0].trim());
			return Array.from(new Set(names)).map(capitalize);
		}
		/**
		 * retrieve passage 
		 * @param {Stromg} [quote] - quote to search
		 * @param {String} [scene] - full text of the scene
		 *
		 * @return {Array} [whole passage and its speaker]
		 */
		function getPassage(quote, scene) {
			let lines = scene.split("\n");
			const quoteIndex = lines.findIndex(line => new RegExp(quote).test(line));
			let start = quoteIndex - 1;
			while(!/\s{2}([A-Z]|\s)+\./.test(lines[start])) {
				start--;
			}
			let end = quoteIndex + 1;
			while(!/\s{2}([A-Z]|\s)+\./.test(lines[end])) {
				end++;
			}
			return [capitalize(lines[start].match(/([A-Z]|\s)+/g)[0].trim()), 
							lines.slice(start + 1, end - 1).filter(line => !/\[(\w|\W)+\]/.test(line)).join("\n")];
		}
		/**
		 * display search result
		 * @param {String} [quote] - quote to search
		 * @param {String} [text] - full text of the play
		 *
		 * @return {String} [search result]
		 */
		function displayResult(quote, text) {
			const [actNum, curAct] = searchSection("ACT", quote, text);
			if(!curAct) {
				return "Passage Not Found.";
			}
			const [sceneNum, curScene] = searchSection("SCENE", quote, curAct);
			let header = `ACT ${toRomanNumeral(actNum)}\n`;
			header += `SCENE ${toRomanNumeral(sceneNum)}\n`;
			header += `Characters in Scene: ${getCharacter(curScene).join(", ")}\n`;
			const [speaker, passage] = getPassage(quote, curScene);
			header += `Spoken by ${speaker}:\n`;
			return header + passage;
		}
		getText("macbeth.txt").then(text => {
			//default & bonus input
			console.log(`%cDefault & Bonus Input: `, "color : red;");
			let input = "Eye of newt";
			console.log(`%c${input} -> `, "color : skyblue;");
			console.log(`%c${displayResult(input, text)}`, "color : orange;");
			input = "rugged Russian bear";
			console.log(`%c${input} -> `, "color : skyblue;");
			console.log(`%c${displayResult(input, text)}`, "color : orange;");
			//challenge & bonus input
			console.log(`%cChallenge & Bonus Input: `, "color : red;");
			input = "break this enterprise";
			console.log(`%c${input} -> `, "color : skyblue;");
			console.log(`%c${displayResult(input, text)}`, "color : orange;");
			input = "Yet who would have thought";
			console.log(`%c${input} -> `, "color : skyblue;");
			console.log(`%c${displayResult(input, text)}`, "color : orange;");
		}).catch(error => {console.log(error);});
	});
})();