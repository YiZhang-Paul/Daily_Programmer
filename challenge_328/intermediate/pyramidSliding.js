/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get pyramid
		 * @param {String} [url] - pyramid URL
		 *
		 * @return {String} [pyramid]
		 */
		function getPyramid(url) {
			return new Promise((resolve, reject) => {
				let xhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) resolve(this.responseText);
					if(this.status == 404) reject("Pyramid Not Found."); 
				};
				xhttp.open("GET", url, true);
				xhttp.send();
			});
		}
		/**
		 * traverse pyramid
		 * @param {String} [pyramid] - pyramid to be traversed
		 *
		 * @return {Array} [shortest path]
		 */
		function traversePyramid(pyramid) {
			pyramid = pyramid.split("\n").map(floor => floor.trim().split(" ").map(tile => Number(tile)));
			pyramid[pyramid.length - 1] = pyramid[pyramid.length - 1].map(tile => {return {curLen : tile, curPath : [tile]};});
			for(let i = pyramid.length - 2; i >= 0; i--) {
				for(let j = 0; j < pyramid[i].length; j++) {
					let betterTile = pyramid[i + 1][j].curLen < pyramid[i + 1][j + 1].curLen ? pyramid[i + 1][j] : pyramid[i + 1][j + 1];
					pyramid[i][j] = {curLen : pyramid[i][j] + betterTile.curLen, curPath : [pyramid[i][j], ...betterTile.curPath]};
				}
			}	
			return [pyramid[0][0].curPath.join(" -> "), pyramid[0][0].curLen];
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let time = new Date().getTime();
		let input = `1
                 2 3
                 4 5 6
                 7 8 9 10`;
		let result = traversePyramid(input);                 
		console.log(`%cPath: %c${result[0]}, %cDistance: %c${result[1]}, %cTime Spent: %c${new Date().getTime() - time}ms`, "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;");                 
		//challenge & bonus input
		console.log(`%cChallenge & Bonus Input: `, "color : red;");
		time = new Date().getTime();
		input = `3
             7 4 
             2 4 6 
             8 5 9 3`;
		result = traversePyramid(input);                 
		console.log(`%cPath: %c${result[0]}, %cDistance: %c${result[1]}, %cTime Spent: %c${new Date().getTime() - time}ms`, "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;");                 
		time = new Date().getTime();
		input = `75
             95 64
             17 47 82
             18 35 87 10
             20 4 82 47 65
             19 1 23 75 3 34
             88 2 77 73 7 63 67
             99 65 4 28 6 16 70 92
             41 41 26 56 83 40 80 70 33
             41 48 72 33 47 32 37 16 94 29
             53 71 44 65 25 43 91 52 97 51 14
             70 11 33 28 77 73 17 78 39 68 17 57
             91 71 52 38 17 14 91 43 58 50 27 29 48
             63 66 4 68 89 53 67 30 73 16 69 87 40 31
             4 62 98 27 23 9 70 98 73 93 38 53 60 4 23`;
		result = traversePyramid(input);                 
		console.log(`%cPath: %c${result[0]}, %cDistance: %c${result[1]}, %cTime Spent: %c${new Date().getTime() - time}ms`, "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;");                 
		getPyramid("pyramid.txt").then(pyramid => {
			let time = new Date().getTime();
			let result = traversePyramid(pyramid);
			console.log(`%cPath: %c${result[0]}, %cDistance: %c${result[1]}, %cTime Spent: %c${new Date().getTime() - time}ms`, "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;", "color : orange;", "color : skyblue;");                 
		}).catch(error => {console.log(error);});
	});
})();			