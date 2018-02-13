import Term from "term.js";
import Polynomial from "polynomial.js";

let terms = [new Term(-1, "x", 7), new Term(-6, "x", 2), new Term(-9, "x", 4)];
let polynomial = new Polynomial(terms);
console.log(polynomial.format);