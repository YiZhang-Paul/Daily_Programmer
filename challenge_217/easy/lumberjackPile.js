/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * make lumber piles even
		 * @param {String} [input] - pile distributions
		 *
		 * @return {String} [evend piles]
		 */
		function evenPiles(input) {
			let lines = input.split("\n").map(line => line.trim());
			let rowLen = Number(lines[0]);
			let logs = Number(lines[1]);
			let piles = lines.slice(2).join(" ").match(/\d+/g).map(num => Number(num));
			while(logs) {
				piles[piles.indexOf(Math.min(...piles))]++;
				logs--;
			}
			return piles.reduce((acc, val, index) => acc + (index % rowLen ? " " : "") + val + ((index + 1) % rowLen ? "" : "\n"), "");
		}
		//default input
		console.log(`Default Input: `, "color : red;");
		let input = `3
                 7
                 1 1 1
                 2 1 3
                 1 4 1`;
    console.log(`${input.split("\n").slice(2).map(line => line.trim()).join("\n")}`);             
    console.log(`%cInto ->`, "color : red;");             
    console.log(`%c${evenPiles(input)}`, "color : orange;");   
    //challenge input
		console.log(`Challenge Input: `, "color : red;");
		input = `4
             200
             15 12 13 11 
             19 14  8 18 
             13 14 17 15 
              7 14 20  7`;
    console.log(`${input.split("\n").slice(2).map(line => line.trim()).join("\n")}`);             
    console.log(`%cInto ->`, "color : red;");             
    console.log(`%c${evenPiles(input)}`, "color : orange;");  
    input = `15
						 2048
						  5 15 20 19 13 16  5  2 20  5  9 15  7 11 13 
						 17 13  7 17  2 17 17 15  4 17  4 14  8  2  1 
						 13  8  5  2  9  8  4  2  2 18  8 12  9 10 14 
						 18  8 13 13  4  4 12 19  3  4 14 17 15 20  8 
						 19  9 15 13  9  9  1 13 14  9 10 20 17 20  3 
						 12  7 19 14 16  2  9  5 13  4  1 17  9 14 19 
						  6  3  1  7 14  3  8  6  4 18 13 16  1 10  3 
						 16  3  4  6  7 17  7  1 10 10 15  8  9 14  6 
						 16  2 10 18 19 11 16  6 17  7  9 13 10  5 11 
						 12 19 12  6  6  9 13  6 13 12 10  1 13 15 14 
						 19 18 17  1 10  3  1  6 14  9 10 17 18 18  7 
						  7  2 10 12 10 20 14 13 19 11  7 18 10 11 12 
						  5 16  6  8 20 17 19 17 14 10 10  1 14  8 12 
						 19 10 15  5 11  6 20  1  5  2  5 10  5 14 14 
						 12  7 15  4 18 11  4 10 20  1 16 18  7 13 15`;
    console.log(`${input.split("\n").slice(2).map(line => line.trim()).join("\n")}`);             
    console.log(`%cInto ->`, "color : red;");             
    console.log(`%c${evenPiles(input)}`, "color : orange;");  
    input = `1
             41
             1`;
    console.log(`${input.split("\n").slice(2).map(line => line.trim()).join("\n")}`);             
    console.log(`%cInto ->`, "color : red;");             
    console.log(`%c${evenPiles(input)}`, "color : orange;");             
    input = `12
             10000
              9 15 16 18 16  2 20  2 10 12 15 13 
             20  6  4 15 20 16 13  6  7 12 12 18 
             11 11  7 12  5  7  2 14 17 18  7 19 
              7 14  4 19  8  6  4 11 14 13  1  4 
              3  8  3 12  3  6 15  8 15  2 11  9 
             16 13  3  9  8  9  8  9 18 13  4  5 
              6  4 18  1  2 14  8 19 20 11 14  2 
              4  7 12  8  5  2 19  4  1 10 10 14 
              7  8  3 11 15 11  2 11  4 17  6 18 
             19  8 18 18 15 12 20 11 10  9  3 16 
              3 12  3  3  1  2  9  9 13 11 18 13 
              9  2 12 18 11 13 18 15 14 20 18 10`;
    console.log(`${input.split("\n").slice(2).map(line => line.trim()).join("\n")}`);             
    console.log(`%cInto ->`, "color : red;");             
    console.log(`%c${evenPiles(input)}`, "color : orange;");   
	});
})();		