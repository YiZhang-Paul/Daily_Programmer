/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		class Node {
			/**
			 * @param int, int, obj {}
			 *
			 * xCord    : X-Coordinate of node 
			 * yCord    : Y-Coordinate of node
			 * prevNode : previous node (parent)
			 */
			constructor(xCord, yCord, prevNode = null) {
				this.xCord = xCord;
				this.yCord = yCord;
				this.prevNode = prevNode;
				this.moves = [{x : -1, y : -2}, {x : 1, y : 2},
				              {x : 1, y : -2}, {x : -1, y : 2},
				              {x : -2, y : -1}, {x : 2, y : 1},
				              {x : 2, y : -1}, {x : -2, y : 1}];
			}
			/**
			 * find next available nodes
			 * 
			 * returns array []
			 */
			nextNodes() {
				return this.moves.map(move => {
					return new Node(this.xCord + move.x, this.yCord + move.y, this);
				});
			} 
		}
		//start and end point
		let curPoint = new Node(0, 0);
		let endPoint = new Node(0, 1);


	});
})(); 