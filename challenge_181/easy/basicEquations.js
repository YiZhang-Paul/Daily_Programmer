/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * extract number from string
		 * @param {String} [numStr] - string to extract number from
		 *
		 * @return {Array} [numbers extracted from string]
		 */
		function getNumber(numStr) {
			return /\d/.test(numStr) ? numStr.match(/[+-]{0,1}\d+\.*\d*/g).map(Number) : (/\w/.test(numStr) ? [1] : [0]);
		}
		/**
		 * read expression
		 * @param {String} [expression] - expression to read
		 *
		 * @return {Object} [expression broken down]
		 */
		function readExpression(expression) {
			let sides = expression.split("=").map(side => side.trim());
			return {
				totalY : getNumber(sides[0])[0],
				a : getNumber(sides[1].match(/(\w|\W)*x/)[0])[0],
				b : getNumber(sides[1].split("x")[1])[0]
			};
		}
		/**
		 * multiply all values in an object
		 * @param {Object} [obj] - object to be multiplied
		 * @param {int} [number] - number to multiply
		 *
		 * @return {Object} [object with all values multiplied]
		 */
		function multiplyObj(obj, number) {
			let newObj = Object.assign({}, obj);
			for(let key in newObj) {
				newObj[key] *= number;
			}
			return newObj;
		}
		/**
		 * solve for X
		 * @param {Object} [left] - left side of equation
		 * @param {Object} [right] - right side of equation
		 *
		 * @return {float} [value of X]
		 */
		function solveX(left, right) {
			return (right.b - left.b) / (left.a - right.a);
		}
		/**
		 * solve for Y
		 * @param {Object} [equation] - numbers in equation
		 * @param {float} [x] - value of X
		 *
		 * @return {float} [value of Y]
		 */
		function solveY(equation, x) {
			return (equation.a * x + equation.b) / equation.totalY;
		}
		/**
		 * round number to a given decimal place
		 * @param {float} [number] - number to be rounded
		 * @param {int} [place] - precision of rounded number
		 *
		 * @return {float} [rounded number]
		 */
		function roundTo(number, place = 4) {
			const precision = Math.pow(10, place);
			return Math.round(number * precision) / precision;
		}
		/**
		 * find intersection of two lines
		 * @param {String} [expression1] - expression 1
		 * @param {String} [expression2] - expression 2
		 *
		 * @return {Object} [coordinate of intersection]
		 */
		function findIntersect(expression1, expression2) {
			let [numbers1, numbers2] = [expression1, expression2].map(readExpression);
			let x = solveX(multiplyObj(numbers1, numbers2.totalY), multiplyObj(numbers2, numbers1.totalY));
			return {x : roundTo(x), y : roundTo(solveY(numbers1, x))};
		}
		/**
		 * draw line
		 * @param {String} [line] - equation of line to draw
		 * @param {String} [id] - canvas ID name
		 * @param {String} [color] - color of line
		 */
		function drawLine(line, id, color = "black") {
			let canvas = document.getElementById(id);
			const [width, height] = [canvas.width, canvas.height];
			let equation = readExpression(line);
			const [x1, y1] = [0, roundTo(solveY(equation, 0))];
			const [x2, y2] = [width, roundTo(solveY(equation, width))];
			let ctx = canvas.getContext("2d");
			ctx.beginPath();
			ctx.moveTo(x1 * 55, -y1 * 20 + height * 0.5);
			ctx.lineTo(x2 * 55, -y2 * 20 + height * 0.5);
			ctx.strokeStyle = color;
			ctx.stroke();
		}
		/**
		 * draw intersection
		 * @param {String} [line1] - line 1
		 * @param {String} [line2] - line 2
		 * @param {String} [id] - canvas ID name
		 * @param {String} [color] - dot color
		 */
		function drawIntersect(line1, line2, id, color = "skyblue") {
			let canvas = document.getElementById(id);
			const [width, height] = [canvas.width, canvas.height];
			let intersect = findIntersect(line1, line2);
			let ctx = canvas.getContext("2d");
			ctx.beginPath();
			ctx.arc(intersect.x * 55, -intersect.y * 20 + height * 0.5, width * 0.0035, 0, Math.PI * 2);
			ctx.fillStyle = color;
			ctx.fill();
		}
		/**
		 * draw graph
		 * @param {String} [line1] - line 1
		 * @param {String} [line2] - line 2
		 * @param {String} [id] - canvas ID name
		 * @param {Array} [colors] - line1 color, line2 color and dot color
		 */
		function drawGraph(line1, line2, id, colors) {
			drawLine(line1, id, colors[0]);
			drawLine(line2, id, colors[1]);
			drawIntersect(line1, line2, id, colors[2]);
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = ["y=2x+2", "y=5x-4"];
		let result = findIntersect(...input);
		console.log(`%c${input.join(" & ")} ->`, "color : skyblue;");
		console.log(`%c(${result.x}, ${result.y})`, "color : orange;");
		input = ["y=-5x", "y=-4x+1"];
		result = findIntersect(...input);
		console.log(`%c${input.join(" & ")} ->`, "color : skyblue;");
		console.log(`%c(${result.x}, ${result.y})`, "color : orange;");
		input = ["y=0.5x+1.3", "y=-1.4x-0.2"];
		result = findIntersect(...input);
		console.log(`%c${input.join(" & ")} ->`, "color : skyblue;");
		console.log(`%c(${result.x}, ${result.y})`, "color : orange;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		console.log(`%cPlease Check the Web Page`, "color : orange;");
		drawGraph("y=2x+2", "y=5x-4", "canvas", ["red", "blue", "green"]);
	});
})();		