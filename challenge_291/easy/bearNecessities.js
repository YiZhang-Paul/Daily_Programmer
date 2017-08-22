/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * find all valid charis to seat down
		 * @param {String} [info] - Goldilock's and chairs' information
		 *
		 * @return {Array} [available seats] 
		 */
		function getValidSeats(info) {
			let lines = info.split("\n").map(line => line.trim());
			let [weight, maxHeat] = lines[0].split(" ").map(num => Number(num));
			let allSeats = lines.slice(1).map((seat, index) => [...seat.split(" "), index + 1]);
			return allSeats.filter(seat => Number(seat[0]) >= weight && Number(seat[1]) <= maxHeat).map(seat => seat[2]);	
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `100 80
                 30 50
                 130 75
                 90 60
                 150 85
                 120 70
                 200 200
                 110 100`;
		console.log(`%c${getValidSeats(input).join(" ")}`, "color : orange;");                 
    //challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = ` 100 120
              297 90
              66 110
              257 113
              276 191
              280 129
              219 163
              254 193
              86 153
              206 147
              71 137
              104 40
              238 127
              52 146
              129 197
              144 59
              157 124
              210 59
              11 54
              268 119
              261 121
              12 189
              186 108
              174 21
              77 18
              54 90
              174 52
              16 129
              59 181
              290 123
              248 132`;                         
		console.log(`%c${getValidSeats(input).join(" ")}`, "color : orange;");                 
	});
})();			