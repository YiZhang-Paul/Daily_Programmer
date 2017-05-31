/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		class Node {
			/**
			 * @param int, int, obj {}, obj {}
			 *
			 * xCord    : X-Coordinate of node 
			 * yCord    : Y-Coordinate of node
			 * prevNode : previous node (parent)
			 * lastMove : last move from previous node
			 */
			constructor(xCord, yCord, prevNode = null, lastMove = null) {
				this.xCord = xCord;
				this.yCord = yCord;
				this.prevNode = prevNode;
				this.lastMove = lastMove;
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
					new Node(this.xCord + move.x, this.yCord + move.y, this, `(${move.x}, ${move.y})`));
			} 
		}
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
			let path = [], moves = [];
			//check if nodes list contains end point
			let findNode = array => array.find(node => 
				node.xCord == end.xCord && node.yCord == end.yCord);
			//filter out all visited nodes
			let findUnvisted = array => array.filter(node => 
				visited.indexOf(node) == -1);
			//visit every node in queue
			while(queue.length > 0) {
				let curNode = queue.shift();
				visited.push(curNode);
				let nextNodes = curNode.nextNodes();
				//check if end point is one of the next possible nodes
				let lastNode = findNode(nextNodes); 
				if(lastNode) {
					//add all nodes into path
					while(lastNode.prevNode) {
						path.push(`(${lastNode.xCord}, ${lastNode.yCord})`);
						moves.push(lastNode.lastMove);
						lastNode = lastNode.prevNode;
					}
					path.push(`(${start.xCord}, ${start.yCord})`);
					//clear queue to end function execution
					queue = [];
				} else {
					//record unvisited nodes
					queue.push(...findUnvisted(nextNodes));
				}
			}
			return [path.reverse(), moves.reverse()];
		}
		//start point
		let curPoint = new Node(0, 0);
		//default output
		let endPoint = new Node(0, 1);
		let [path, moves] = findPath(curPoint, endPoint);
		console.log(`Route taken: ${path.join(" -> ")}`);
		console.log(`Moves used: ${moves.join(", ")}`);
		console.log(`Total Steps: ${moves.length}`);
		//challenge output
		endPoint = new Node(3, 7);
		[path, moves] = findPath(curPoint, endPoint);
		console.log(`Route taken: ${path.join(" -> ")}`);
		console.log(`Moves used: ${moves.join(", ")}`);
		console.log(`Total Steps: ${moves.length}`);
	});
})(); 