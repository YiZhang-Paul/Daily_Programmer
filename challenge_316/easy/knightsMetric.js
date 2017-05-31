/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		class Node {
			/**
			 * @param int, int, int, int, obj {}, String
			 *
			 * xCord    : X-Coordinate of node 
			 * yCord    : Y-Coordinate of node
			 * level    : current level of node
			 * depth    : current depth of node
			 * prevNode : previous node (parent)
			 * lastMove : last move from previous node
			 */
			constructor(xCord, yCord, level = 0, depth = 0, prevNode = null, lastMove = null) {
				this.xCord = xCord;
				this.yCord = yCord;
				this.level = level;
				this.depth = depth;
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
					new Node(this.xCord + move.x, 
						       this.yCord + move.y, 
						       this.level + 1,
						       this.depth + 1,
						       this, `(${move.x}, ${move.y})`));
			} 
		}
		/**
		 * find path to end point
		 * using breadth-first search
		 * e.g. [0|] -> [|11] -> [1|1] -> [|122] -> [1|22] -> [|2222]
		 * @param obj {}, obj {}
		 *
		 * start : start point
		 * end   : end point
		 *
		 * returns array []
		 */
		function findPathBFS(start, end) {
			let queue = [start]; //nodes to be visited
			let visited = [];    //nodes already visited
			let path = [], moves = [], steps;
			//check if nodes list contains end point
			let findEndNode = nodeList => nodeList.find(node => 
				node.xCord == end.xCord && node.yCord == end.yCord);
			//filter out all visited nodes
			let findUnvisted = nodeList => nodeList.filter(node => 
				visited.indexOf(node) == -1);
			//visit every node in queue
			while(queue.length > 0) {
				let curNode = queue.shift();
				visited.push(curNode);
				let nextNodes = curNode.nextNodes();
				//check if end point is one of the next possible nodes
				let endNode = findEndNode(nextNodes); 
				if(endNode) {
					steps = endNode.level;
					//add all nodes into path
					while(endNode.prevNode) {
						path.push(`(${endNode.xCord}, ${endNode.yCord})`);
						moves.push(endNode.lastMove);
						endNode = endNode.prevNode;
					}
					path.push(`(${start.xCord}, ${start.yCord})`);
					//clear queue to end function execution
					queue = [];
				} else {
					//record unvisited nodes
					queue.push(...findUnvisted(nextNodes));
				}
			}
			return [path.reverse(), moves.reverse(), steps];
		}
		//start point
		let curPoint = new Node(0, 0);
		console.log("Breadth-first Search: ");
		//default output
		let endPoint = new Node(0, 1);
		let [path, moves, steps] = findPathBFS(curPoint, endPoint);
		console.log(`Route taken: ${path.join(" -> ")}`);
		console.log(`Moves used: ${moves.join(", ")}`);
		console.log(`Total Steps: ${steps}`);
		//challenge output
		endPoint = new Node(3, 7);
		[path, moves, steps] = findPathBFS(curPoint, endPoint);
		console.log(`Route taken: ${path.join(" -> ")}`);
		console.log(`Moves used: ${moves.join(", ")}`);
		console.log(`Total Steps: ${steps}`);
		/**
		 * find path to end point
		 * using depth-first search
		 * e.g. [|0] -> [|11] -> [1|1] -> [1|22] - > [12|2] -> [12|33]
		 * @param obj {}, obj {}, int
		 *
		 * start    : start point
		 * end      : end point
		 * maxDepth : maximum depth allowed
		 *
		 * returns array []
		 */
		function findPathDFS(start, end, maxDepth = 1) {
			let queue = [start]; //nodes to be visited
			let path = [], moves = [];
			//check if nodes list contains end point
			let findEndNode = nodeList => nodeList.find(node => 
				node.xCord == end.xCord && node.yCord == end.yCord);
			//visit nodes in a branch as deep as possible
			while(queue.length > 0) {
				let nextNodes = queue.pop().nextNodes();
				//check if end point is one of the next possible nodes
				let endNode = findEndNode(nextNodes); 
				if(endNode) {
					//add all nodes into path
					while(endNode.prevNode) {
						path.push(`(${endNode.xCord}, ${endNode.yCord})`);
						moves.push(endNode.lastMove);
						endNode = endNode.prevNode;
					}
					path.push(`(${start.xCord}, ${start.yCord})`);
					//clear queue to end function execution
					queue = [];
				} else {
					//record unvisited nodes
					if(nextNodes[0].depth < maxDepth) {
						queue.push(...nextNodes);
					}
				}
			}
			if(moves.length === 0 && maxDepth != 15) {
				return findPathDFS(start, end, Math.min(maxDepth + 1, 15));
			}
			return [path.reverse(), moves.reverse()];
		}
		console.log("\nDepth-first Search: ");
		//default output
		endPoint = new Node(0, 1);
		[path, moves] = findPathDFS(curPoint, endPoint);
		console.log(`Route taken: ${path.join(" -> ")}`);
		console.log(`Moves used: ${moves.join(", ")}`);
		console.log(`Total Steps: ${moves.length}`);
		//challenge output
		endPoint = new Node(3, 7);
		[path, moves] = findPathDFS(curPoint, endPoint);
		console.log(`Route taken: ${path.join(" -> ")}`);
		console.log(`Moves used: ${moves.join(", ")}`);
		console.log(`Total Steps: ${moves.length}`);
	});
})(); 