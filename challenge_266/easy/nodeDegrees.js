/* jslint esversion: 6 */
(() => {
      document.addEventListener("DOMContentLoaded", () => {
		/**
		 * calculate degree for each node
		 * @param {String} [edges] - edges between nodes
		 *
		 * @return {Array} [nodes with their degrees]
		 */
		function getDegrees(edges) {
			let nodes = [];
			edges.split("\n").slice(1)
			     .map(edge => edge.trim().split(" ").map(node => Number(node)))
			     .forEach(edge => {
			       nodes[edge[0]] = nodes[edge[0]] ? nodes[edge[0]] + 1 : 1;	
			       nodes[edge[1]] = nodes[edge[1]] ? nodes[edge[1]] + 1 : 1;	
			     });
			return nodes;
		}
		/**
		 * construct adjacency matrix
		 * @param {String} [edges] - edges between nodes
		 *
		 * @return {Array} [adjacency matrix]
		 */
		function makeMatrix(edges) {
			edges = edges.split("\n").map(edge => edge.trim());
			let matrix = [], depth = Number(edges[0]);
			for(let i = 0; i < depth; i++) {
				matrix.push(new Array(depth).fill(0));
			}
			edges.slice(1)
			     .map(edge => edge.split(" ").map(node => Number(node)))
			     .forEach(edge => {
			       [matrix[edge[0] - 1][edge[1] - 1], matrix[edge[1] - 1][edge[0] - 1]] = [1, 1];	
			     });
			return matrix;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = `3
		             1 2
                 1 3`;
		getDegrees(input).forEach((node, index) => {
			console.log(`%cNode ${index} Has a Degree of %c${node}`, "color : skyblue;", "color : orange;");
		});  
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");   
		input = `16
		         1 2
             1 3
             2 3
             1 4
             3 4
             1 5
             2 5
             1 6
             2 6
             3 6
             3 7
             5 7
             6 7
             3 8
             4 8
             6 8
             7 8
             2 9
             5 9
             6 9
             2 10
             9 10
             6 11
             7 11
             8 11
             9 11
             10 11
             1 12
             6 12
             7 12
             8 12
             11 12
             6 13
             7 13
             9 13
             10 13
             11 13
             5 14
             8 14
             12 14
             13 14
             1 15
             2 15
             5 15
             9 15
             10 15
             11 15
             12 15
             13 15
             1 16
             2 16
             5 16
             6 16
             11 16
             12 16
             13 16
             14 16
             15 16`;
		getDegrees(input).forEach((node, index) => {
			console.log(`%cNode ${index} Has a Degree of %c${node}`, "color : skyblue;", "color : orange;");
		}); 
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");    
		input = `3
		         1 2
             1 3`;
		console.log(`%c${makeMatrix(input).map(row => row.join(" ")).join("\n")}`, "color : orange;");  
		input = `16
		         1 2
             1 3
             2 3
             1 4
             3 4
             1 5
             2 5
             1 6
             2 6
             3 6
             3 7
             5 7
             6 7
             3 8
             4 8
             6 8
             7 8
             2 9
             5 9
             6 9
             2 10
             9 10
             6 11
             7 11
             8 11
             9 11
             10 11
             1 12
             6 12
             7 12
             8 12
             11 12
             6 13
             7 13
             9 13
             10 13
             11 13
             5 14
             8 14
             12 14
             13 14
             1 15
             2 15
             5 15
             9 15
             10 15
             11 15
             12 15
             13 15
             1 16
             2 16
             5 16
             6 16
             11 16
             12 16
             13 16
             14 16
             15 16`;
		console.log(`%c${makeMatrix(input).map(row => row.join(" ")).join("\n")}`, "color : orange;");           
	});
})();			