import Term from "term.js";
import Polynomial from "polynomial.js";

let terms1 = [new Term(-1, "x", 7), new Term(-6, "x", 2), new Term(-9, "x", 4)];
let polynomial1 = new Polynomial(terms1);
console.log(polynomial1.format);

let terms2 = [new Term(5, "x", 1), new Term(-7, "x", 3)];
let polynomial2 = new Polynomial(terms2);
console.log(polynomial2.format);

console.log(polynomial1.multiply(polynomial2).format);