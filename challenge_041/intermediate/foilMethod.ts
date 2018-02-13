import Term from "term.js";

let term1 = new Term(5, "x", 2);
let term2 = new Term(-2, "x", 5);
console.log(term1.multiply(term2).format);