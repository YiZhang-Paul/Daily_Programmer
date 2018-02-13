import Expression from "expression.js";

let expression1 = new Expression(5, "x", 2);
let expression2 = new Expression(-2, "x", 5);
console.log(expression1.multiply(expression2).format);