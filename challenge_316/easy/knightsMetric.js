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
				return this.moves.map(move =>
					new Node(this.xCord + move.x, this.yCord + move.y, this));
			} 
		}
		//start and end point
		let curPoint = new Node(0, 0);
		let endPoint = new Node(0, 1);
		/**
		 * find path to end point
		 * @param obj {}, obj {}
		 *
		 * start : start point
		 * end   : end point
		 */
		function findPath(start, end) {
			let queue = [start]; //nodes to be visited
			let visited = [];    //nodes already visited
			let path = [];

			let findNode = array => array.find(node => 
				node.xCord == end.xCord && node.yCord == end.yCord);
			let filterVisted = array => array.filter(node => 
				visited.indexOf(node) == -1);

			while(queue.length > 0) {
				let curNode = queue.shift();
				visited.push(curNode);
				let nextNodes = curNode.nextNodes();
				let lastNode = findNode(nextNodes); 
				//when end point is reached
				if(lastNode) {
					while(lastNode.prevNode) {
					  //add all node into path
						path.push(lastNode);
						lastNode = lastNode.prevNode;
					}
					path.push(start);
					return path.reverse();
				} else {
					queue.push(...filterVisted(nextNodes));
				}
			}

			return path;
		}
		
		let path = findPath(curPoint, endPoint);
		console.log(path.length - 1);
	});
})(); 