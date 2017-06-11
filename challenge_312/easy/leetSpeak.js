/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * create translate tables for both directions
		 * @param array []
		 * 
		 * charSet : character mappings
		 *
		 * returns obj {}
		 */
		function getTransTable(charSet) {
			let table = new Map();
			charSet.forEach(set => {
				table.set(set[0], set[1]);
				table.set(set[1], set[0]);
			});
			return table;
		} 
		/**
		 * translate 
		 * @param String, obj {}
		 *
		 * input : input string to be translated
		 * table : translate table
		 *
		 * returns String
		 */
		function translate(input, table) {
			input = input.toUpperCase();
			let output = "";
			let start = 0, end = 1;
			while(end <= input.length) {
				let key = input.slice(start, end);
				while(!table.has(key)) {
					end++;
					key = input.slice(start, end);
					if(end >= input.length) {
						end = start + 1;
						key = input.slice(start, end);
						break;
					}
				}
				output += table.has(key) ? table.get(key) : key;
				start = end++;
			}
			return output.toLowerCase();
		} 
		//character set
		let charSet = [
			["A", "4"], 
			["B", "6"], 
			["E", "3"], 
			["I", "1"], 
			["L", "1"], 
			["M", "(V)"], 
			["N", "(\\)"], 
			["O", "0"], 
			["S", "5"], 
			["T", "7"], 
			["V", "\\/"], 
			["W", "`//"],
		];
		//bi-directional translate table
		let transTable = getTransTable(charSet);
		//default input
		console.log(`"BASIC" -> ${translate("BASIC", transTable)}`); 
		console.log(`"ELEET" -> ${translate("ELEET", transTable)}`); 
		console.log(`"WOW" -> ${translate("WOW", transTable)}`); 
		console.log(`"MOM" -> ${translate("MOM", transTable)}`); 
		console.log(`"31337" -> ${translate("31337", transTable)}`); 
		console.log(`"storm" -> ${translate("storm", transTable)}`);  
		//challege input
		console.log(`"I am elite." -> ${translate("I am elite.", transTable)}`);  
		console.log(`"Da pain!" -> ${translate("Da pain!", transTable)}`);  
		console.log(`"Eye need help!" -> ${translate("Eye need help!", transTable)}`);  
		console.log(`"3Y3 (\\)33d j00 t0 g37 d4 d0c70r." -> ${translate("3Y3 (\\)33d j00 t0 g37 d4 d0c70r.", transTable)}`);  
		console.log(`"1 n33d m4 p1llz!" -> ${translate("1 n33d m4 p1llz!", transTable)}`);  
	});
})();