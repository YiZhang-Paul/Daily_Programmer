import Term from "term.js";
import Polynomial from "polynomial.js";

function parseTerm(expression: string): Term {

    const coefficient = /^\d/.test(expression) ? Number.parseInt(expression.match(/^\d+/)[0]) : 1;
    const variable = /[a-zA-Z]/.test(expression) ? expression.match(/[a-zA-Z]/)[0] : "";
    const degree = /\^/.test(expression) ? Number.parseInt(expression.match(/\d+$/)[0]) : (/[a-zA-Z]/.test(expression) ? 1 : 0);

    return new Term(coefficient, variable, degree);
}

function parsePolynomial(expression: string): Polynomial {

    let terms = expression.replace(/\s/g, "").match(/-?\d*[a-zA-Z]+(\^\d+)?|-?\d+/g);

    return new Polynomial(terms.map(term => parseTerm(term)));
}

function reduceFormula(formula: string): string {

    return formula.match(/\([^\(\)]+\)/g)
                  .map(expression => parsePolynomial(expression))
                  .reduce((result, polynomial) => result.multiply(polynomial))
                  .format;
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
console.log(reduceFormula("(2x + 6)(7x + 3)"));
console.log(reduceFormula("(2x^2 + 3x)(5x^2 + 9x)"));