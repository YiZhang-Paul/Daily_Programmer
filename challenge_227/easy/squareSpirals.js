/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * get center point coordinate for a grid
		 * @param int
		 *
		 * dimension : grid dimension
		 * 
		 * returns array [] 
		 */
		function getCenter(dimension) {
			return [(dimension + 1) * 0.5, (dimension + 1) * 0.5];
		} 
		/**
		 * determine square layer on
		 * which the point is located
		 * @param int
		 *
		 * point : number of given point
		 *
		 * returns int 
		 */
		function getPointLayer(point) {
			let remain = point - 1, curLayer = 1;
			while(remain - 8 * curLayer > 0) {
				remain -= 8 * curLayer++;
			} 
			return curLayer;
		} 
		/**
		 * determine four corner points 
		 * for a given square layer
		 * @param int
		 *
		 * layer : layer of the square
		 *
		 * returns array []
		 */
		function getSquareCorner(layer) {
			if(layer === 0) {
				return [1, 1, 1, 1];
			}
			let endPoint = 1, sideLen = (layer * 8 - 4) * 0.25 + 1;
			while(layer >= 1) {
				endPoint += layer-- * 8;
			}
			return [endPoint - sideLen * 3, endPoint - sideLen * 2, endPoint - sideLen, endPoint];
		} 
		/**
		 * determine side of the square 
		 * on which the point is located
		 * @param int, int, array []
		 * 
		 * point   : number of given point
		 * layer   : layer of the square
		 * corners : four corners of the square
		 *
		 * returns String 
		 */
		function getPointSide(point, layer, corners) {
			let side;
			if(point <= corners[0] || point == corners[3]) side = "R";  
			else if(point >= corners[0] && point <= corners[1]) side = "T";
			else if(point >= corners[1] && point <= corners[2]) side = "L";  
			else if(point >= corners[2] && point <= corners[3]) side = "B";  
			return side;
		} 
		/**
		 * convert point number to coordinate
		 * @param int, int
		 *
		 * dimension : grid dimension
		 * point     : number of given point
		 *
		 * returns array []
		 */
		function pointToCord(dimension, point) {
			let center = getCenter(dimension);
			if(point == 1) {
				return center;
			}
			let cord = center.slice();
			let layer = getPointLayer(point);
			let corners = getSquareCorner(layer);
			let side = getPointSide(point, layer, corners); 
			let sideLen = (layer * 8 + 4) * 0.25;
			switch(side) {
				case "R" :
					cord[0] += (sideLen - 1) * 0.5;
					let brCorner = getSquareCorner(layer - 1)[3];
					point = point == corners[3] ? brCorner : point;
					cord[1] += (corners[0] + brCorner) * 0.5 - point;
					break;
				case "T" :
					cord[0] += (corners[0] + corners[1]) * 0.5 - point;
					cord[1] -= (sideLen - 1) * 0.5;
					break;
				case "L" :
					cord[0] -= (sideLen - 1) * 0.5;
					cord[1] += point - (corners[1] + corners[2]) * 0.5;
					break;
				case "B" :
					cord[0] += point - (corners[2] + corners[3]) * 0.5;
					cord[1] += (sideLen - 1) * 0.5;
					break;
			}
			return cord;
		}
	});
})();		